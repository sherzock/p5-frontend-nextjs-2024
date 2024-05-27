import { redirect } from "next/navigation";
import { actionGetVgs } from "@/actions/videogames";
import VideogameCard from "@/components/VideogameCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default async function Home() {
  const vgs = await actionGetVgs();

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