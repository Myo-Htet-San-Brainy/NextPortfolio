import Link from "next/link";

export default function NotFound() {
  return (
    <main className="py-32 flex h-full flex-col items-center justify-center gap-2">
      {/* optional - add frown icon */}
      <h2 className="text-xl font-semibold">404 Not Found</h2>
      <p>Could not find the requested project.</p>
      <Link
        href="/projects"
        className="btn btn-lg bg-gray-300 text-orange-400 hover:text-blue-400 transition-all duration-400 font-bold "
      >
        Go Back
      </Link>
    </main>
  );
}
