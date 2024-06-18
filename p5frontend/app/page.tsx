import { redirect } from "next/navigation";
import { dbGetVideogame } from "@/lib/videogames";
import Image from "next/image";

export default async function Home() {
  const vg = await dbGetVideogame(1);

  return (
    <main className="p-8">
      <div className="flex flex-row m-2 w-64 hover:outline hover:scale-110 shadow-xl"> 
        <div className="m-4 flex flex-col justify-around">
          <p className="italic">{vg.name}</p>
          <p className="italic">{vg.developer}</p>
          <p className="">{vg.description}</p>
          <p className="bold">{vg.totalAchievements}</p>
          <p className="">{vg.launchYear}</p>
          <p className="bold">{vg.grades}</p> 
        </div>
      </div>
    </main>
  );
}