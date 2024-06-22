"use client";

import React from "react";
import { InfoPlayer } from "@prisma/client";

export default function SessionInfo({ session }: { session: InfoPlayer }) {

    return (
        <>
            <p>Hours Played: {session.hoursPlayed}</p>
            <p>Achievements Unlocked: {session.achievementsUnlocked}</p>
        </>
    )
        


}