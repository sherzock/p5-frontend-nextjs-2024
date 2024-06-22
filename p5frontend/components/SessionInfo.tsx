"use client";

import { Videogame } from "@/lib/videogames";
import Image from "next/image";
import { dbGetVideogames } from "@/lib/videogames";
import React from "react";
import { actionGetPlayerInfoFromVGId } from "@/actions/videogames";

export default function VideogameCard({ url }: { url: string }) {

    const id = parseInt(url, 10);

    const session = actionGetPlayerInfoFromVGId(id.toString());
        


}