"use server";
import { db } from "@/db/db";

export type Videogame = {
    idVG: number;
    name: string;
    description: string;
    poster: string;    // URL o ruta de la imagen de la portada
    grades: number;
    launchYear: number;
    developer: string;
    totalAchievements: number;  
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
export async function createNewVideogameForm (formData: FormData) {
    const nameField = formData.get("name");
    if(nameField === null) {
        throw new Error(`Missing "name" field`);
    }
    const name = nameField.toString();

    const descriptionField = formData.get("description");
    if(descriptionField === null) {
        throw new Error(`Missing "description" field`);
    }
    const description = descriptionField.toString();

    const poster = "/acvalhalla.jpg";

    const launchYearField = formData.get("launchYear");
    if(launchYearField === null) {
        throw new Error(`Missing "launchYear" field`);
    }
    const launchYear = launchYearField.toString();

    const gradesField = formData.get("grades");
    if(gradesField === null) {
        throw new Error(`Missing "grades" field`);
    }
    const grades = gradesField.toString();

    const developerField = formData.get("developer");
    if(developerField === null) {
        throw new Error(`Missing "developer" field`);
    }
    const developer = developerField.toString();


    const totalAchievementsFIeld = formData.get("totalAchievements");
    if(totalAchievementsFIeld === null) {
        throw new Error(`Missing "totalAchievements" field`);
    }
    const totalAchievements = totalAchievementsFIeld.toString();

    await createNewVideogame(name, description, poster, Number(grades), Number(launchYear), developer, Number(totalAchievements));
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

export const DeleteVideogame = async ( idVG: number) => {
    return await db.videogame.delete({
        where: { idVG },
    });
}

export const findInfoPlayerfromVG = async (videogameId: number) => {
    return await db.infoPlayer.findFirst({
        where: { videogameId },
    });
};