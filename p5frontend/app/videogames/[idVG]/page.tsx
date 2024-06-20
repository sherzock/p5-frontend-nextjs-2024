import { actionGetVg } from "@/actions/videogames";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VideogameInfo from "@/components/VideogameInfo";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { redirect } from "next/dist/server/api-utils";

type PageParams = {
    params: { idVG: string;};
  };

export default async function Page({ params }: PageParams) {
  
  const { idVG } = params;
  const vg = await actionGetVg(Number(idVG));

  return (
    <main className="p-8">
      <Header/>
      <div className="flex flex-col justify-center">
      <div className="p-5 flex flex-row mt-4 mb-4 flex-wrap place-items-center justify-evenly place-content-center	">
        <VideogameInfo videogame={vg}/>
      </div>
          <Link href="/" className="text-white text-center mb-5 ">
            Go Back
          </Link>
      </div>
      <Footer/>
    </main>
  );
}