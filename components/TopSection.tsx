import Link from "next/link";
import React from "react";
import { get_images } from "@/functions/files/get_images";
import { GetUniqueDatas } from "@/functions/get_data/GetDatas";
import sections from "@/models/sections"

type dataType = {
  title:string,
  paragraph:string
}

const TopSection = async () => {
  const image = await get_images("covers", "home_cover.jpg");
  const data:dataType[] = await GetUniqueDatas(sections, 1, {relation:"topSection"})
  return (
    <section
      id="home"
      className="w-full text-[2.2rem] bg-fixed bg-right bg-no-repeat min-h-screen flex flex-col justify-center bg-cover"
      style={{ backgroundImage: `url("${image}")` }}
    >
      <div className="w-full min-h-screen flex flex-col justify-center gap-[2rem] p-[4rem] text-white bg-[#000000] bg-opacity-50">
        <div className="w-full max-w-[60rem] p-[4rem]">
          <h1 className="text-[5rem] font-bold uppercase">
            {data?.[0]?.title}
          </h1>
          <p className="uppercase">
            {data?.[0]?.paragraph}
          </p>
          <br />
          <br />
          <Link
            href={"/#about"}
            className="w-fit h-[fit] py-[1rem] px-[4rem] border-2 rounded-xl font-medium text-[2.2rem] text-white transition-all duration-300 hover:bg-white hover:text-black"
          >
            CONTINUE
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TopSection;
