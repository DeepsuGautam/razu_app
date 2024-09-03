"use client";
import replacer from "@/functions/files/replace";
import Image from "next/image";
import React, { useRef, useState } from "react";

const AbtImgEdit = ({ image }: { image: string }) => {
  const [blob, setBlob] = useState<string>("");

  const ref = useRef<any>(null);
  return (
    <form
      action={replacer}
      className="w-full max-w-[60rem] flex flex-col justify-center gap-[3rem]"
    >
      <input
        type="file"
        name="file"
        id="file"
        className="hidden"
        ref={ref}
        onChange={(e) => {
          const file: File | undefined = e?.target?.files?.[0];
          if (!file) return;
          const newBlob: string = URL.createObjectURL(file);
          setBlob(newBlob);
        }}
      />
      <input
        type="text"
        name="filePath"
        id="filePath"
        defaultValue={"covers/about.png"}
        className="hidden"
      />
      <Image
        src={blob || image}
        alt="My Profile Image"
        width={700}
        height={700}
        className="w-full rounded-full bg-slate-900 shadow-xl"
        onClick={() => {
          ref?.current?.click();
        }}
      />
      <button type="submit" className="border-2 w-fit mx-auto text-[2rem] py-[1rem] px-[3rem] font-medium rounded-xl text-white hover:bg-white hover:text-slate-950 transition-all duration-300">
        Save Image
      </button>
    </form>
  );
};

export default AbtImgEdit;
