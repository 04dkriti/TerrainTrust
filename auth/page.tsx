import { SignInButton, SignUpButton } from '@clerk/nextjs';

export default function AuthPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-6">
            <h1 className="text-2xl font-bold mb-4">Sign In / Sign Up</h1>
            <p className="text-gray-600">Choose an option to continue.</p>

            <div className="mt-6 flex gap-4">
                <SignInButton>
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-lg">
                        Sign In
                    </button>
                </SignInButton>
                <SignUpButton>
                    <button className="bg-green-600 text-white px-6 py-2 rounded-lg">
                        Sign Up
                    </button>
                </SignUpButton>
            </div>
        </div>
    );
}
