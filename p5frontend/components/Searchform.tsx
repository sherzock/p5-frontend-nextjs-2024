"use client";

import { actionGetVg } from "@/actions/videogames";
import Button from "./ui/Button";
import Searchbox from "./ui/Searchbox";
import React, { useRef } from "react";
import { redirect } from 'next/navigation'

export default function SearchForm() {
  const formRef = useRef<HTMLFormElement>(null);

  const getVg = async (formData: FormData) => {
    formRef.current?.reset();
   /* for (var pair of formData.entries()) {
        console.log(pair[0]+ ', ' + pair[1]); 
    }*/
    await redirect(`/videogames/${formData.get("video game search")}`);
  }

  return (
    <form ref={formRef} action={getVg}>
      <div className="flex flex-row space-x-4 items-center place-content-center	place-items-center m-5">
        <Searchbox name="video game search" type="text" placeholder="Enter a video game name" ></Searchbox>
        <Button label="Search" type="submit" className="text-center " />
      </div>
    </form>
  );
}