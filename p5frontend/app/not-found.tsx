import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-col justify-items-center	justify-center	justify-items-center text-center place-content-center space-y-10 h-screen space-between">
      <h1 className="text-3xl font-black	">404</h1>
      <p className="text-xl font-extrabold	">Page not found.</p>
        <Link href="/" className="font">
          Back to Library
        </Link>
    </main>
  );
}