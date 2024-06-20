"use client";

import { Videogame } from "@/lib/videogames";
import Image from "next/image";
import { dbGetVideogames } from "@/lib/videogames";
import React from "react";

export default function VideogameCard({ videogame }: { videogame: Videogame }) {
  return (
    <div className="w-64 hover:outline hover:scale-110 m-5"> 
        <div className="m-5 flex flex-col justify-around text-center ">
          <p className="bold text-3xl	">{videogame.name}</p>
          <Image src={videogame.poster} width={86} height={80} alt={`Poster of "${videogame.name}"`} className="w-80 h-120 mt-5 mb-5"/>
          <p className="m-5">{videogame.description}</p>
          <p className="bold">Reviews {videogame.grades} / 10</p> 
        </div>
      </div>
  );
}