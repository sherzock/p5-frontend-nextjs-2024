import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import CreateForm from "@/components/CreateForm";


export default async function Page() {


  return (
    <main className="p-8">
      <Header/>
      <div className="flex flex-col justify-center">
          <CreateForm/>
          <Link href="/" className="text-white text-center mb-5 ">
            Go Back
          </Link>
      </div>
      <Footer/>
    </main>
  );
}