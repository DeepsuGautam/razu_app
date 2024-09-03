"use client";
import replacer from "@/functions/files/replace";
import React, { useRef, useState } from "react";

const TopForm = ({
  image,
  children,
}: {
  image: string;
  children: React.ReactNode;
}) => {
  const [newImage, setNewImage] = useState<string>(image);
  const ref = useRef<any>(null);
  return (
    <div
      className="w-full relative min-h-screen bg-cover bg-right"
      style={{ backgroundImage: `url("${newImage}")` }}
    >
      {children}
     
      <form action={replacer} className="w-fit p-[2rem] absolute top-0 right-0 flex gap-[2rem]"> <input
        type="file"
        name="file"
        id="file"
        accept="image/*"
        className="hidden"
        ref={ref}
        onChange={(e) => {
          const newFile = e?.target?.files?.[0];
          if (!newFile) return;
          const newUrl = URL.createObjectURL(newFile);
          setNewImage(newUrl);
        }}
      />
      <input type="text" name="filePath" id="filePath" defaultValue={"covers/home_cover.jpg"} className="hidden" />
        <button type="button" className="w-fit px-[2rem] py-[1rem] text-[1.8rem] bg-white rounded-full border-white text-slate-700 font-semibold" onClick={()=>{ref?.current?.click()}}>
          Choose
        </button>
        <button type="submit" className="w-fit px-[2rem] py-[1rem] text-[1.8rem] bg-slate-700 rounded-full border-slate-700 text-white font-semibold">
          Save
        </button>
      </form>
    </div>
  );
};

export default TopForm;
