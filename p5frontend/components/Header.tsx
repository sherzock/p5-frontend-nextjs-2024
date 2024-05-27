import Link from "next/link";
import Searchbox from "./ui/Searchbox";
import Button from "./ui/Button";
import SearchForm from "./Searchform";

export default function Header() {
  return (
    <header className="border-b-2 border-white border-solid flex flex-col ">
      <Link href="/">
        <div id="logo" className="text-center font-extrabold text-5xl text-white m-5">
            Library
        </div>
      </Link>
      <SearchForm/>

    </header>
  );
}