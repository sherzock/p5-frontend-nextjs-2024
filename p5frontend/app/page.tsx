import { redirect } from "next/navigation";
import { dbGetVideogames } from "@/lib/videogames";
import VideogameCard from "@/components/VideogameCard";
import Image from "next/image";

export default async function Home() {
  const vgs = await dbGetVideogames();

  return (
    <main className="p-8">
      {vgs.map((vg) => (
        <VideogameCard key={vg.idVG} videogame={vg}/>
      ))}
    </main>
  );
}