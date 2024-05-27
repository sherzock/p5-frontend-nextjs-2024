import Link from "next/link";
import Searchbox from "./ui/Searchbox";
import Button from "./ui/Button";

export default function Header() {
  return (
    <header className="border-b-2 border-white border-solid flex flex-col ">
      <Link href="/">
        <div id="logo" className="text-center font-extrabold text-5xl text-white m-5">
            Library
        </div>
      </Link>
      <div className="flex flex-row space-x-4 items-center place-content-center	place-items-center m-5">
        <Searchbox name="video game search" type="text" placeholder="Enter a video game name" ></Searchbox>
        <Button label="Search" type="submit" className="text-center " />
      </div>

    </header>
  );
}