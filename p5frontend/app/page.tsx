import { redirect } from "next/navigation";
import { dbGetVideogames } from "@/lib/videogames";
import VideogameCard from "@/components/VideogameCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default async function Home() {
  const vgs = await dbGetVideogames();

  return (
    <main className="p-8">
      <Header/>
      <div className="p-5 flex flex-row mt-4 mb-4 flex-wrap place-items-center justify-evenly	 place-content-center	">
      {vgs.map((vg) => (
        <VideogameCard key={vg.idVG} videogame={vg}/>
      ))}
      </div>
      <Footer/>
    </main>
  );
}