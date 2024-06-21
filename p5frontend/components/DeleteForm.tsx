"use client";

import Button from "./ui/Button";
import React, { useRef, useState } from "react";
import { redirect } from 'next/navigation'
import { DeleteVideogame } from "@/lib/videogames";

export default function DeleteForm({ id }: {id : string}) {
  const formRef = useRef<HTMLFormElement>(null);

  const DeleteVg = async (formData: FormData) => {
    formRef.current?.reset();
    console.log(id);
    formData.append("idVG",id.toString());
    await DeleteVideogame(formData);
    redirect("/");
  }

  return (
    <form ref={formRef} action={DeleteVg} className="mt-5">
    <Button label="Delete Videogame">
    </Button>
</form>
  );
}