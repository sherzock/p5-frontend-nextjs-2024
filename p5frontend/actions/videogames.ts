"use server";

import { dbGetVideogames, dbGetVideogame, AddSessionInfoVideogame, createNewVideogame, DeleteVideogame, findInfoPlayerfromVG, updateInfoPlayer, getInfoPlayerByVideogameId, AddNewInfoPlayerToVG } from "@/lib/videogames";
import { revalidatePath } from "next/cache";

export async function actionGetVgs() {
    const vgs = dbGetVideogames();
    return vgs;
}

export async function actionDeleteVideogame(vgId: number) {
    const vg = DeleteVideogame(vgId);
    revalidatePath("/");
}

export async function actionGetVg(vgId: number) {
    const vg = dbGetVideogame(vgId);
    return vg;
}

export async function actionfindInfoPlayerfromVG(vgId: number) {
    const info = findInfoPlayerfromVG(vgId);
    return info;
}

export async function actionAddSessionInfoVideogame(idInfo: number, hoursPlayed: number, achievementsUnlocked: number) {
    const session = AddSessionInfoVideogame(idInfo, hoursPlayed, achievementsUnlocked);
    revalidatePath("/");
}

export async function actionCreateNewVideogame(name: string, description: string, poster: string, grades: number, launchYear: number, developer: string, totalAchievements: number) {
    const vg = createNewVideogame(name, description, poster, grades, launchYear, developer, totalAchievements);
    revalidatePath("/");
}

export async function actionUpdateInfoFromDB(formData: FormData) {
    const vg = updateInfoPlayer(formData);
    revalidatePath("/");
}


export async function actionGetPlayerInfoFromVGId(VGId: string) {
    const vg = getInfoPlayerByVideogameId(VGId);
    revalidatePath("/");
}


export async function actionAddNewInfoPlayerToVG(VGId: string) {
    const vg = AddNewInfoPlayerToVG(Number(VGId));
    revalidatePath("/");
}