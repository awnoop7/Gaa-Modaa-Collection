import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    setError("");
    console.log("Logging in with:", { email, password });

    setEmail("");
    setPassword("");
  };

  return (
    <main className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="max-w-md w-full p-6 sm:p-8 border rounded-md shadow-md bg-white">
        <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>
        {error && (
          <p className="mb-4 text-red-600 text-center font-medium">{error}</p>
        )}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label className="flex flex-col text-sm font-medium">
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="you@example.com"
              required
            />
          </label>

          <label className="flex flex-col text-sm font-medium">
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="********"
              required
            />
          </label>

          {/* Boxed Login Button */}
          <div></div>
          <div className="mt-4 inline-block rounded-md border-2 border-blue-600 p-0.5">
            <button
              type="submit"
              className="w-full py-2 px-6 bg-transparent text-blue-600 font-semibold rounded-md hover:bg-blue-600 hover:text-white transition"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default Login;
