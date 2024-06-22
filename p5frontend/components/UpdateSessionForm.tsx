"use client";

import { actionGetVg, actionUpdateInfoFromDB } from "@/actions/videogames";
import Button from "./ui/Button";
import Searchbox from "./ui/Searchbox";
import React, { useRef } from "react";
import { redirect } from 'next/navigation'
import { createNewVideogameForm } from "@/lib/videogames";

export default function UpdateSessionForm({ id }: {id : string}) {
    const formRef = useRef<HTMLFormElement>(null);

    const UpdateInfo = async (formData: FormData) => {
      formRef.current?.reset();
      formData.append("videogameId",id.toString());
      await actionUpdateInfoFromDB(formData);
      redirect("/");
    }

  return (
    <form ref={formRef} action={UpdateInfo} className="mt-5">
      <div className="flex flex-col space-y-10 items-center place-content-center	place-items-center m-5">
        <h1 className="text-3xl	font-extrabold">New Session Information</h1>
        <div>
          <p className="mb-2">Hours Played</p>
          <Searchbox name="hoursPlayed" type="text" placeholder="Enter Hours here" ></Searchbox>
        </div>
        <div>
          <p className="mb-2">Achievements Unlocked</p>
          <Searchbox name="achievementsUnlocked" type="text" placeholder="Enter Unlocked Achievements Here" ></Searchbox>
        </div>
        <Button label="UpdateInfo" type="submit"/>
      </div>
    </form>
  );
}