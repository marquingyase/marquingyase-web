"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft, Home, Search } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        {/* 404 graphic – simple shapes like in your hero */}
        <div className="relative w-48 h-48 mx-auto">
          <div
            className="absolute top-0 right-0 w-32 h-32 rounded-3xl rotate-12 opacity-80"
            style={{ backgroundColor: "#191bdf" }}
          />
          <div
            className="absolute bottom-0 left-0 w-28 h-28 rounded-full opacity-80"
            style={{ backgroundColor: "#31db06" }}
          />
          <div
            className="absolute top-12 left-12 w-16 h-16 rounded-2xl rotate-45"
            style={{ backgroundColor: "#ff00ff", opacity: 0.7 }}
          />
          <div className="absolute inset-0 flex items-center justify-center text-8xl font-bold text-black tracking-tighter">
            404
          </div>
        </div>

        <h1 className="text-4xl text-black md:text-6xl font-bold leading-tight tracking-tight">
          Page not found
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-md mx-auto">
          Oops! The page you&apos;re looking for doesn&apos;t exist or has been
          moved.
        </p>

        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <button
            onClick={() => router.push("/")}
            className="inline-flex cursor-pointer items-center gap-2 px-8 py-4 rounded-full text-white font-semibold transition-all hover:shadow-lg hover:-translate-y-0.5"
            style={{ backgroundColor: "#191bdf" }}
          >
            <Home size={18} />
            Go Home
          </button>
          <button
            onClick={() => router.back()}
            className="inline-flex cursor-pointer items-center gap-2 px-8 py-4 rounded-full font-semibold border-2 border-black text-black hover:bg-black hover:text-white transition-all"
          >
            <ArrowLeft size={18} />
            Go Back
          </button>
        </div>

        <div className="flex items-center justify-center gap-2 text-sm text-gray-500 pt-8">
          <Search size={16} style={{ color: "#ff00ff" }} />
          <span>
            Can’t find what you need? Visit our{" "}
            <Link href="/" className="underline" style={{ color: "#191bdf" }}>
              homepage
            </Link>
            .
          </span>
        </div>
      </div>
    </div>
  );
}
