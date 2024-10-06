"use client";
import { useEffect } from "react";
import { toast } from "react-toastify";

export default function Error({ error, reset }) {
  useEffect(() => {
    if (error && error.message && typeof error.message === "string") {
      toast.error(error.message);
    }
  }, [error]);

  return (
    <div className="flex flex-col gap-4 items-center justify-center h-screen ">
      <h2 className="text-4xl font-bold text-error">Something went wrong!</h2>
      <p className="text-lg text-gray-500">Please try again later.</p>
      <button
        className="btn btn-lg bg-gray-300 text-orange-400 hover:text-blue-400 transition-all duration-200 font-bold "
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
}
