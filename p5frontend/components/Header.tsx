import Link from "next/link";
import Searchbox from "./ui/Searchbox";
import Button from "./ui/Button";

export default function Header() {
  return (
    <header className="border-b-2 border-white border-solid flex flex-col ">
      <Link href="/">
        <div id="logo" className="text-center font-extrabold text-5xl text-white mr-4">
            Library
        </div>
      </Link>
      <div>
        <Searchbox label="Search a video game" name="video game search" type="text" placeholder="Enter a video game name" ></Searchbox>
        <Button label="Search" type="submit" />
      </div>

    </header>
  );
}