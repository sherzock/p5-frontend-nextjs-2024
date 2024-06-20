import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b-2 border-white border-solid flex flex-col">
      <Link href="/" className="mb-5">
        <div id="logo" className="text-center font-extrabold text-5xl text-white m-5">
            Library
        </div>
      </Link>

    </header>
  );
}