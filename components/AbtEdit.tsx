import { get_images } from "@/functions/files/get_images";
import { GetUniqueDatas } from "@/functions/get_data/GetDatas";
import sections from "@/models/sections";
import React from "react";
import AboutImgEdit from "./Editor/AbtImgEdit";
import { replaceData } from "@/functions/post_data/Editor";

type dataType = {
  _id: any;
  title: string;
  subtitle: string;
  paragraph: string;
  relation: string;
};

const AbtEdit = async () => {
  const image: string = await get_images("covers", "about.png");
  const res: dataType[] = await GetUniqueDatas(sections, 1, {
    relation: "aboutSection",
  });

  const data: dataType = res?.[0];

  return (
    <section className="w-full min-h-screen p-[4rem] bg-slate-950 flex flex-wrap justify-evenly gap-[4rem]">
      <AboutImgEdit image={image} />
      <form
        action={replaceData}
        className="w-full max-w-[60rem] flex flex-col justify-center gap-[2rem]"
      >
      <input
        type="text"
        id="_id"
        name="_id"
        className="hidden"
        defaultValue={data?._id?.toString()}
      />
      <input
        type="text"
        id="relation"
        name="relation"
        className="hidden"
        defaultValue={data?.relation}
      />
        <input
          id="title"
          name="title"
          type="text"
          placeholder="Enter Tiltle"
          className="w-full bg-transparent text-[5rem] text-white font-bold focus:outline-none"
          required
          defaultValue={data?.title}
        />
        <input
          id="subtitle"
          name="subtitle"
          placeholder="Enter Subtitle"
          type="text"
          className="w-full bg-transparent text-[3.5rem] text-orange-500 font-bold focus:outline-none"
          required
          defaultValue={data?.subtitle}
        />

        <textarea
          id="paragraph"
          name="paragraph"
          placeholder="Enter Paragraph"
          className="w-full bg-transparent text-[2rem] text-white font-medium h-[25rem] resize-none focus:outline-none"
          required
          defaultValue={data?.paragraph}
        />
        <button
          type="submit"
          className="border-2 w-fit text-[2rem] py-[1rem] px-[3rem] font-medium rounded-xl text-white hover:bg-white hover:text-slate-950 transition-all duration-300"
        >
          Save Changes
        </button>
      </form>
    </section>
  );
};
export default AbtEdit;
