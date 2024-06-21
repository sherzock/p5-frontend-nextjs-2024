"use client";

import { actionGetVg, actionUpdateInfoFromDB } from "@/actions/videogames";
import Button from "./ui/Button";
import Searchbox from "./ui/Searchbox";
import React, { useRef } from "react";
import { redirect } from 'next/navigation'
import { createNewVideogameForm } from "@/lib/videogames";

export default function UpodateSessionForm({ id }: {id : string}) {
    const formRef = useRef<HTMLFormElement>(null);

    const UpdateInfo = async (formData: FormData) => {
      formRef.current?.reset();
      formData.append("idVG",id.toString());
      await actionUpdateInfoFromDB(formData);
      redirect("/");
    }

  return (
    <form ref={formRef} action={UpdateInfo} className="mt-5">
        <h1>New Session Information</h1>
      <div className="flex flex-col space-x-4 space-y-5 items-center place-content-center	place-items-center m-5">
        <p>Hours Played</p>
        <Searchbox name="hoursPlayed" type="text" placeholder="Enter Hours here" ></Searchbox>
        <p>Achievements Unlocked</p>
        <Searchbox name="unlockedAchievements" type="text" placeholder="Enter Unlocked Achievements Here" ></Searchbox>
        <Button label="UpdateInfo" type="submit" className="text-center " />
      </div>
    </form>
  );
}