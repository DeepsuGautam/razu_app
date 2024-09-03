import { get_images } from "@/functions/files/get_images";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import sections from "@/models/sections";
import { GetUniqueDatas } from "@/functions/get_data/GetDatas";

type dataType = {
  title: string;
  paragraph: string;
  subtitle: string;
};
const AboutSection = async () => {
  const image = await get_images("covers", "about.png");
  const data: dataType[] = await GetUniqueDatas(sections, 1, {
    relation: "aboutSection",
  });

  return (
    <section
      className="w-full min-h-screen bg-slate-950 p-[4rem] flex flex-col justify-center text-[2.2rem]"
      id="about"
    >
      <div className="w-full flex flex-wrap justify-evenly gap-[4rem]">
        <Image
          src={image}
          alt=""
          width={1000}
          height={1000}
          className="w-full max-w-[60rem] rounded-full overflow-hidden bg-slate-900 shadow-xl"
        />
        <div className="w-full max-w-[60rem] flex flex-col justify-center gap-[2rem] text-white">
          <h2 className="text-[5rem] font-bold ">{data?.[0]?.title}</h2>
          <h3 className="text-[3rem] font-semibold text-orange-400">
            {data?.[0]?.subtitle}
          </h3>
          <p>{data?.[0]?.paragraph}</p>
          <Link
            href={`/#creativity`}
            className="w-fit px-[4rem] my-[2rem] py-[1rem] border-2 text-white text-[2.2rem] font-medium rounded-xl hover:bg-white hover:text-slate-800 transition-all duration-300"
          >
            MY TALENTS
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
