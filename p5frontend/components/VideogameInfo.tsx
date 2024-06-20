"use client";

import { Videogame } from "@/lib/videogames";
import Image from "next/image";
import React from "react";

export default function VideogameInfo ({ videogame }: { videogame: Videogame }) {
  return (
    <div className="flex flex-col justify-around align-items-center"> 
        <div className="">
          <h1 className="italic text-center text-3xl">{videogame.name}</h1>
        </div>
        <div className="flex flex-row gap-5">
            <div>
                <Image src={videogame.poster} width={86} height={80} alt={`Poster of "${videogame.name}"`} className="w-80 h-120 mt-5 mb-5"/>
            </div>
            <div className="content-center justify-center	">
                <p className="italic">Developer: {videogame.developer}</p>
                <p className="">Description: {videogame.description}</p>
                <p className="bold">Achivements: {videogame.totalAchievements}</p>
                <p className="">Since: {videogame.launchYear}</p>
                <p className="bold">Reviews: {videogame.grades}/10</p> 
            </div>
        </div>
    </div>
  );
}