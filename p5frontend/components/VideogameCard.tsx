"use client";

import { Videogame } from "@/lib/videogames";
import Image from "next/image";
import { dbGetVideogames } from "@/lib/videogames";
import React from "react";

export default function VideogameCard({ videogame }: { videogame: Videogame }) {
  return (
    <div className="w-64 hover:outline hover:scale-110 m-5"> 
        <div className="m-5 flex flex-col justify-around text-center">
          <p className="italic">{videogame.name}</p>
          <Image src={videogame.poster} width={86} height={80} alt={`Poster of "${videogame.name}"`} className="w-80 h-120 mt-5 mb-5"/>
          <p className="italic">Developer: {videogame.developer}</p>
          <p className="">Description: {videogame.description}</p>
          <p className="bold">Achivements: {videogame.totalAchievements}</p>
          <p className="">Since: {videogame.launchYear}</p>
          <p className="bold">Reviews: {videogame.grades}/10</p> 
        </div>
      </div>
  );
}