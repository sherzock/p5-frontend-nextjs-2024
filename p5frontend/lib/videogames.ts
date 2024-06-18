import { db } from "@/db/db";
import exp from "constants";
import "server-only";

export type Videogame = {
    idVG: number;
    name: string;
    description: string;
    poster: string;    // URL o ruta de la imagen de la portada
    grades: number;
    launchYear: number;
    developer: string;
    totalAchievements: number;
    hoursPlayed: number;
    achivementsUnlocked: number;     
};

export const dbGetVideogames = async () => {
    return await db.videogame.findMany({
        orderBy: { name: "asc" },
    });
};

export const dbGetVideogame = async (idVG: number) => {
    return await db.videogame.findUniqueOrThrow({
        where: { idVG },
    });
};

export const AddSessionInfoVideogame = async (idInfo: number, hoursPlayed: number, achievementsUnlocked: number) => {
    return await db.infoPlayer.update({
        where: { idInfo },
        data: { hoursPlayed, achievementsUnlocked },
    });
};

export const createNewVideogame = async (name: string, description: string, poster: string, grades: number, launchYear: number, developer: string, totalAchievements: number) => {
    return await db.videogame.create({
        data: {
            name,
            description,
            poster,
            grades,
            launchYear,
            developer,
            totalAchievements
        }
    });
}

export const AddNewVideogameToLibrary = async (  hoursPlayed: number, achievementsUnlocked: number, videogameId: number) => {
    return await db.infoPlayer.create({
        data: {
            hoursPlayed,
            achievementsUnlocked,
            videogameId
        }
    });
}

export const DeleteNewVideogameToLibrary = async ( idInfo: number) => {
    return await db.infoPlayer.delete({
        where: { idInfo },
    });
}

export const findInfoPlayerfromVG = async (videogameId: number) => {
    return await db.infoPlayer.findFirst({
        where: { videogameId },
    });
};