"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import DocsContent from "@/components/DocsContent";

export default function Home() {
  const [showDocs, setShowDocs] = useState(false);
  const router = useRouter();

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-[#556B2F]">
      {/* Background Image - Fullscreen with 20px margins */}
      <div className="absolute inset-x-0 top-5 bottom-5 w-full h-[calc(100vh-40px)]">
        <Image
          src="/BG.jpg"
          alt="Background"
          fill
          priority
          objectFit="cover"
          className="rounded-lg"
        />
      </div>

      {/* Overlay for Readability */}
      <div className="absolute inset-x-0 top-5 bottom-5 bg-[#556B2F] bg-opacity-50 rounded-lg"></div>

      {/* Content - Buttons Centered on Background */}
      <div className="relative z-10 flex flex-col items-center">
        <h1 className="text-4xl font-bold text-white mb-6">Welcome to LandSafe</h1>

        {/* Buttons Side by Side */}
        <div className="flex gap-6">
          <button
            className="rounded-full bg-white text-[#556B2F] font-semibold text-lg h-12 px-8 hover:bg-[#cce7b0] transition"
            onClick={() => router.push("/auth")}
          >
            Get Started
          </button>

          <button
            className="rounded-full border border-white text-white text-lg h-12 px-8 hover:bg-[#cce7b0] hover:text-[#556B2F] transition"
            onClick={() => setShowDocs(!showDocs)}
          >
            {showDocs ? "Hide Docs" : "Read our Docs"}
          </button>
        </div>

        {/* Docs Section */}
        {showDocs && <DocsContent />}
      </div>
    </div>
  );
}
