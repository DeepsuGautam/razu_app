"use client"
import React, { useState } from "react";
import login from "@/functions/login"

const Page = ({ searchParams }: { searchParams: { error: string } }) => {
  const [error, setError] = useState<any>(searchParams?.error || "");
  const [loading, setLoading] = useState<any>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);

    const result = await login(formData);
    if (result.error) {
      setError(result.error);
      setLoading(false);
    } else {
      // Perform client-side redirection on success
      window.location.href = "/dashboard";
    }
  };

  return (
    <main className="w-full min-h-screen flex flex-col bg-slate-100 justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-[35rem] mx-auto p-[2rem] text-center bg-white rounded-xl shadow-xl"
      >
        <h2 className="text-[3rem] font-semibold text-slate-800">
          Welcome Admin
        </h2>
        <br />
        <input
          type="email"
          placeholder="Enter Email"
          required
          id="email"
          name="email"
          className="w-full border-2 text-slate-800 rounded-xl border-slate-800 p-[1rem] text-[16px]"
        />
        <br />
        <br />
        <input
          type="password"
          placeholder="Enter Password"
          required
          id="password"
          name="password"
          className="w-full border-2 text-slate-800 rounded-xl border-slate-800 p-[1rem] text-[16px]"
        />
        <br />
        <br />
        <button
          type="submit"
          className="w-full bg-blue-500 rounded-xl p-[1rem] text-[16px] font-semibold text-white transition-all duration-300 hover:bg-blue-600"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Submit"}
        </button>
        {error && (
          <p className="pt-[2rem] text-red-500 text-[14px] font-medium">
            {error}
          </p>
        )}
      </form>
    </main>
  );
};

export default Page;
