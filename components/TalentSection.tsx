import React from "react";
import { GetAll } from "@/functions/get_data/GetDatas";
import projects from "@/models/projects";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slide from "./Slide";

type datas = {
  title:string
}

const TalentSection = async () => {
  const data:datas[] = await GetAll(projects, 1);
  return (
    <section className="w-full bg-slate-900 " id="creativity">
      <h2 className="p-[4rem] text-[5rem] text-orange-400 font-bold z-50">
        THINGS I CAN DO
      </h2>
      <Slide>
        {data?.map((item:datas, index: number) => (
          <div key={index}>
            <div className="px-[3rem]">
            <div className="w-full max-w-[35rem] p-[3rem] text-[2.2rem] text-center font-bold border-2 rounded-2xl shadow-xl text-white transition-all duration-300 hover:text-orange-400 hover:border-orange-400">
               {item?.title}
            </div>
            </div>
          </div>
        ))}
      </Slide>
      <br />
    </section>
  );
};

export default TalentSection;
