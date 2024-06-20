"use client";

import { actionGetVg } from "@/actions/videogames";
import Button from "./ui/Button";
import Searchbox from "./ui/Searchbox";
import React, { useRef } from "react";
import { redirect } from 'next/navigation'
import { AddNewVideogameToLibrary, createNewVideogame, createNewVideogameForm } from "@/lib/videogames";

export default function CreateForm() {
    const formRef = useRef<HTMLFormElement>(null);

    const CreateVG = async (formData: FormData) => {
      formRef.current?.reset();
      await createNewVideogameForm(formData);
      redirect("/");
    }

  return (
    <form ref={formRef} action={CreateVG} className="mt-5">
      <div className="flex flex-col space-x-4 space-y-5 items-center place-content-center	place-items-center m-5">
        <p>Game Name</p>
        <Searchbox name="name" type="text" placeholder="Minecraft..." ></Searchbox>
        <p>Developer</p>
        <Searchbox name="developer" type="text" placeholder="Mojang..." ></Searchbox>
        <p>Description</p>
        <Searchbox name="description" type="text" placeholder="About..." ></Searchbox>
        <p>Release Date</p>
        <Searchbox name="launchYear" type="text" placeholder="2009..." ></Searchbox>
        <p>Total Achievements</p>
        <Searchbox name="totalAchievements" type="text" placeholder="115..." ></Searchbox>
        <p>Grades</p>
        <Searchbox name="grades" type="text" placeholder="9.8..." ></Searchbox>
        <Button label="create" type="submit" className="text-center " />
      </div>
    </form>
  );
}