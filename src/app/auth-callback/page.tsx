"use client";

import React, { useEffect, Suspense } from "react";
import { useSession } from "next-auth/react";
import { useSearchParams } from "next/navigation";

function AuthCallbackContent() {
  const { data: session, status } = useSession();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (status === "authenticated" && session?.user) {
      const brand = searchParams.get("brand") || "blj";
      // Call Express backend to log in / register customer and get token
      fetch("http://localhost:5000/api/customer/oauth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: session.user.email,
          name: session.user.name,
          provider: (session.user as any).provider || "google",
          providerAccountId: (session.user as any).providerAccountId || (session.user as any).id || "unknown",
          image: session.user.image,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.token) {
            // Redirect back to Vite SPA with the token!
            const targetUrl = new URL(`http://localhost:5173/`);
            targetUrl.searchParams.set("auth_token", data.token);
            targetUrl.searchParams.set("brand", brand);
            window.location.href = targetUrl.toString();
          } else {
            console.error("No token returned from Express backend", data);
          }
        })
        .catch((err) => {
          console.error("Error in oauth callback fetch:", err);
        });
    } else if (status === "unauthenticated") {
      // If not authenticated, redirect back to Vite SPA
      window.location.href = "http://localhost:5173/";
    }
  }, [session, status, searchParams]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white font-sans">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-red-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <h2 className="text-xl font-bold tracking-wider">CONNEXION EN COURS...</h2>
        <p className="text-zinc-400 text-sm mt-2">Veuillez patienter pendant la redirection.</p>
      </div>
    </div>
  );
}

export default function AuthCallback() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-black text-white font-sans">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-red-650 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <h2 className="text-xl font-bold tracking-wider">CHARGEMENT...</h2>
        </div>
      </div>
    }>
      <AuthCallbackContent />
    </Suspense>
  );
}
