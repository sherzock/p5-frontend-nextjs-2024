"use client";

import { actionGetVg } from "@/actions/videogames";
import Button from "./ui/Button";
import Searchbox from "./ui/Searchbox";
import React, { useRef } from "react";
import { redirect } from 'next/navigation'
import { createNewVideogameForm } from "@/lib/videogames";

export default function CreateForm() {
    const formRef = useRef<HTMLFormElement>(null);

    const CreateVG = async (formData: FormData) => {
      formRef.current?.reset();
      await createNewVideogameForm(formData);
      redirect("/");
    }

    return (
      <form ref={formRef} action={CreateVG} className="m-5">
      <div className="flex flex-col space-y-5 items-center place-content-center	place-items-center m-5">
        <Button label="Create" type="submit" />
        <div>
          <p className="mb-1">Game Name</p>
          <Searchbox name="name" type="text" placeholder="Minecraft..." ></Searchbox>
        </div>
        <div>
          <p className="mb-1">Developer</p>
          <Searchbox name="developer" type="text" placeholder="Mojang..." ></Searchbox>
        </div>
        <div>
          <p className="mb-1">Description</p>
          <Searchbox name="description" type="text" placeholder="About..." ></Searchbox>
        </div>
        <div>
          <p className="mb-1">Release Date</p>
          <Searchbox name="launchYear" type="text" placeholder="2009..." ></Searchbox>
        </div>
        <div>
        <p className="mb-1">Total Achievements</p>
        <Searchbox name="totalAchievements" type="text" placeholder="115..." ></Searchbox>
        </div>
        <div>
          <p className="mb-1">Grades</p>
          <Searchbox name="grades" type="text" placeholder="9.8..." ></Searchbox>
        </div>
      </div>
    </form>
  );
}