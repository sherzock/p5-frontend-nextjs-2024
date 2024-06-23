import { actionGetVg, actionfindInfoPlayerfromVG } from "@/actions/videogames";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VideogameInfo from "@/components/VideogameInfo";
import Link from "next/link";
import DeleteForm from "@/components/DeleteForm";
import Button from "@/components/ui/Button";
import { notFound } from "next/navigation";
import SessionInfo from "@/components/SessionInfo";

type PageParams = {
    params: { idVG: string;};
  };

export default async function Page({ params }: PageParams) {
  const { idVG } = params;
  const vg = await actionGetVg(Number(idVG));
  const session = await actionfindInfoPlayerfromVG(Number(idVG))
  console.log(session);
  

  if(!vg)
    notFound();

  if(!session)
    notFound();

  return (
    <main className="p-8">
      <Header/>
      <div className="flex flex-col justify-center">
      <div className="p-5 flex flex-col mt-4 mb-4 flex-wrap place-items-center justify-evenly place-content-center	">
        <VideogameInfo videogame={vg}/>
        <SessionInfo session={session}/>
      </div>
          <Link href='[idVG]/Session' as={`${idVG}/Session`} className="text-white text-center mb-5 ">
            <Button label="Add Session Info"></Button>
          </Link>
          <br></br>
          <Link href="/" className="text-white text-center mb-5 ">
            <Button label="Go Back"></Button>
          </Link>
      </div>
      <Footer/>
    </main>
  );
}