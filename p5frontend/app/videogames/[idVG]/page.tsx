import { actionGetVg } from "@/actions/videogames";
import VideogameCard from "@/components/VideogameCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type PageParams = {
    params: { idVG: string;};
  };

export default async function Page({ params }: PageParams) {
  
  const { idVG } = params;

  console.log(idVG)

    const vg = await actionGetVg(Number(idVG));

  return (
    <main className="p-8">
      <Header/>
      <div className="p-5 flex flex-row mt-4 mb-4 flex-wrap place-items-center justify-evenly place-content-center	">
        <VideogameCard videogame={vg}/>
      </div>
      <Footer/>
    </main>
  );
}