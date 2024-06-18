import Link from "next/link";

export default function Header() {
  return (
    <header className="">
      <Link href="/">
        <div id="logo" className="text-center font-extrabold text-5xl text-white mr-4 ">
            Library
        </div>
      </Link>
    </header>
  );
}