"use client";

import { Videogame } from "@/lib/videogames";
import { dbGetVideogames } from "@/lib/videogames";
import React from "react";

export default function VideogameCard({ videogame }: { videogame: Videogame }) {
  return (
    <div className="flex flex-row m-2 w-64 hover:outline hover:scale-110 shadow-xl"> 
        <div className="m-4 flex flex-col justify-around">
          <p className="italic">{videogame.name}</p>
          <p className="italic">{videogame.developer}</p>
          <p className="">{videogame.description}</p>
          <p className="bold">{videogame.totalAchievements}</p>
          <p className="">{videogame.launchYear}</p>
          <p className="bold">{videogame.grades}</p> 
        </div>
      </div>
  );
}