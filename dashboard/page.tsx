"use client";
import { useRouter } from "next/navigation";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";

export default function Dashboard() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-50">
      <SignedOut>
        <p>You must be signed in to access the dashboard.</p>
        <SignInButton />
      </SignedOut>

      <SignedIn>
        <h1 className="text-2xl font-bold mb-4">Landslide Prediction Dashboard</h1>

        {/* Button to navigate to Prediction Form */}
        <button
          className="bg-blue-500 text-white px-6 py-2 rounded-lg mb-4 hover:bg-blue-700 transition"
          onClick={() => router.push("/dashboard/prediction")}
        >
          Enter Input
        </button>
      </SignedIn>
    </div>
  );
}
