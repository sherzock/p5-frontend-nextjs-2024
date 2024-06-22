import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Button from "@/components/ui/Button";
import UpdateSessionForm from "@/components/UpdateSessionForm";

type PageParams = {
  params: { idVG: string;};
};

export default async function Page({ params }: PageParams) {
  const { idVG } = params;

  return (
    <main className="p-8">
      <Header/>
      <div className="flex flex-col justify-center">
          <UpdateSessionForm id={idVG}/>
            <Link href="/" className="text-white text-center mb-5 ">
              <Button label="Go Back"></Button>
            </Link>
      </div>
      <Footer/>
    </main>
  );
}