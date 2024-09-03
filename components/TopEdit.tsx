import { get_images } from "@/functions/files/get_images";
import { GetUniqueDatas } from "@/functions/get_data/GetDatas";
import sections from "@/models/sections";
import React from "react";
import TopForm from "./Editor/TopForm";
import { replaceData } from "@/functions/post_data/Editor";

type dataType = {
  _id: any;
  title: string;
  paragraph: string;
  relation: string;
};

const TopEdit = async () => {
  const image: string = await get_images("covers", "home_cover.jpg");
  const data: dataType[] = await GetUniqueDatas(sections, 1, {
    relation: "topSection",
  });
  return (
    <section className="w-full">
      <TopForm image={image}>
        <form
          action={replaceData}
          className="w-full min-h-screen flex flex-col justify-center p-[4rem] bg-black bg-opacity-50 text-white"
        >
          <input
            type="text"
            id="relation"
            name="relation"
            className="hidden"
            defaultValue="topSection"
          />
          <input
            type="text"
            className="text-[5rem] font-bold bg-transparent max-w-[60rem] focus:outline-none resize-none"
            required
            name="title"
            id="title"
            defaultValue={data?.[0]?.title}
            placeholder="Enter Title"
          />

          <textarea
            name="paragraph"
            id="paragraph"
            className="text-[2rem] font-bold max-w-[60rem] h-[20rem] bg-transparent focus:outline-none resize-none"
            required
            defaultValue={data?.[0]?.paragraph}
            placeholder="Enter Paragraph"
          />
          <button className="w-fit py-[1rem] border-2 rounded-xl px-[3rem] bg-transparent text-[2rem] font-medium text-white transition-all duration-300 hover:bg-white hover:text-slate-700">
            SUBMIT CHANGES
          </button>
        </form>
      </TopForm>
    </section>
  );
};

export default TopEdit;
