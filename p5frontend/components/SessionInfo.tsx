"use client";

import React from "react";
import { InfoPlayer } from "@prisma/client";

export default function SessionInfo({ session }: { session: InfoPlayer }) {

    return (
        <div className="m-5 flex flex-col justify-around text-center ">
            <p>HOURS PLAYED: {session.hoursPlayed}</p>
            <p>ACHIEVEMENTS UNLOCKED: {session.achievementsUnlocked}</p>
        </div>
    )
        


}