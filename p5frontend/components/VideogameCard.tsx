"use client";

import { Videogame } from "@/lib/videogames";
import Image from "next/image";
import { dbGetVideogames } from "@/lib/videogames";
import React from "react";

export default function VideogameCard({ videogame }: { videogame: Videogame }) {
  return (
    <div className="heightBig w-80 border-solid border-2	border-white rounded m-5 p-4 hover:bg-white hover:text-black  content-center	"> 
        <div className="m-5 flex flex-col justify-around text-center ">
          <p className="font-extrabold text-3xl	">{videogame.name}</p>
          <Image src={videogame.poster} width={86} height={80} alt={`Poster of "${videogame.name}"`} className=" object-contain h-72 w-full mt-5 mb-5 "/>
          <p className="m-5 font-bold italic">{videogame.developer}</p>
          <p className="">{videogame.grades} / 10</p> 
        </div>
      </div>
  );
}