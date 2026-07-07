"use client";

import React, { Suspense } from "react";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

function SignInRedirectContent() {
  const searchParams = useSearchParams();
  const provider = searchParams.get("provider") || "google";
  const brand = searchParams.get("brand") || "blj";

  useEffect(() => {
    // Automatically trigger sign-in with Google or Facebook
    signIn(provider, {
      callbackUrl: `http://localhost:3000/auth-callback?brand=${brand}`,
    });
  }, [provider, brand]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white font-sans">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-red-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <h2 className="text-xl font-bold tracking-wider">REDIRECTION VERS {provider.toUpperCase()}...</h2>
        <p className="text-zinc-400 text-sm mt-2">Veuillez patienter.</p>
      </div>
    </div>
  );
}

export default function SignInRedirect() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-black text-white font-sans">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-red-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <h2 className="text-xl font-bold tracking-wider">CHARGEMENT...</h2>
        </div>
      </div>
    }>
      <SignInRedirectContent />
    </Suspense>
  );
}
