"use client";

import { Videogame } from "@/lib/videogames";
import { dbGetVideogames } from "@/lib/videogames";
import React from "react";

export default function VideogameCard({ videogame }: { videogame: Videogame }) {
  return (
    <div className="w-64 hover:outline hover:scale-110 m-5"> 
        <div className="m-5 flex flex-col justify-around">
          <p className="italic">{videogame.name}</p>
          <br/>
          <p className="italic">Developer: {videogame.developer}</p>
          <p className="">Description: {videogame.description}</p>
          <p className="bold">Achivements: {videogame.totalAchievements}</p>
          <p className="">Since: {videogame.launchYear}</p>
          <p className="bold">Reviews: {videogame.grades}/10</p> 
        </div>
      </div>
  );
}