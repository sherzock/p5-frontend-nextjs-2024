import Link from "next/link";
import Button from "./ui/Button";

export default function Header() {
  return (
    <header className="border-b-2 border-white border-solid flex flex-row place-items-center justify-center		">
      <Link href="/" className="mb-5">
        <div id="logo" className="text-center font-extrabold text-5xl text-white m-5">
            Library
        </div>
      </Link>
      <Link href={"/create"} className="justify-self-end	">
        <Button label="Create Game"></Button>
      </Link>
    </header>
  );
}