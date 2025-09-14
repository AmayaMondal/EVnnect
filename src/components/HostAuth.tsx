import React, { useState } from "react";
import { Zap } from "lucide-react";

type User = {
  id: string;
  name: string;
  email: string;
  type: "user" | "host";
};

interface HostAuthPageProps {
  setCurrentUser: React.Dispatch<React.SetStateAction<User | null>>;
  setCurrentPage: React.Dispatch<
    React.SetStateAction<
      "home" | "host-auth" | "user-auth" | "host-dashboard" | "user-dashboard" | "map"
    >
  >;
}

const HostAuthPage: React.FC<HostAuthPageProps> = ({ setCurrentUser, setCurrentPage }) => {
  const [authMode, setAuthMode] = useState<"login" | "signup">("login");

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Zap className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">
            {authMode === "login" ? "Welcome Back" : "Join Evnnect"}
          </h2>
          <p className="text-gray-600 mt-2">Host Dashboard Access</p>
        </div>

        <form
          className="space-y-6"
          onSubmit={(e) => {
            e.preventDefault();
            setCurrentUser({
              id: "1",
              name: "Test Host",
              email: "host@example.com",
              type: "host",
            });
            setCurrentPage("host-dashboard");
          }}
        >
          {authMode === "signup" && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-blue-600 to-green-600 text-white font-semibold rounded-lg hover:scale-105 transition"
          >
            {authMode === "login" ? "Sign In" : "Create Account"}
          </button>
        </form>

        <div className="mt-6 text-center">
          <button
            onClick={() =>
              setAuthMode(authMode === "login" ? "signup" : "login")
            }
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            {authMode === "login"
              ? "Don't have an account? Sign up"
              : "Already have an account? Sign in"}
          </button>
        </div>

        <div className="mt-4 text-center">
          <button
            onClick={() => setCurrentPage("home")}
            className="text-gray-500 hover:text-gray-700"
          >
            ← Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default HostAuthPage;
