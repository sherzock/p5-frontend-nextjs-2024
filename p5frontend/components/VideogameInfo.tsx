"use client";

import { Videogame } from "@/lib/videogames";
import Image from "next/image";
import React from "react";
import DeleteForm from "./DeleteForm";

export default function VideogameInfo ({ videogame }: { videogame: Videogame }) {
  return (
    <div className="flex flex-col justify-around align-items-center"> 
        <div className="">
          <h1 className="text-center text-5xl font-extrabold">{videogame.name}</h1>
        </div>
        <div className="flex flex-row gap-5 m-5">
            <div>
                <Image src={videogame.poster} width={86} height={80} alt={`Poster of "${videogame.name}"`} className="w-80 h-120 mt-5 mb-5"/>
            </div>
            <div className="content-center justify-center space-y-3.5">
                <p className="">DEVELOPER: {videogame.developer}</p>
                <p className="">DESCRIPTION: {videogame.description}</p>
                <p className="">ACHIEVEMENTS: {videogame.totalAchievements}</p>
                <p className="">RELEASE DATE: {videogame.launchYear}</p>
                <p className="">REVIEWS: {videogame.grades}/10</p>
                <DeleteForm id={videogame.idVG.toString()}/>
            </div>
        </div>
    </div>
  );
}