import { GetAll } from "@/functions/get_data/GetDatas";
import projects from "@/models/projects";
import React from "react";
import DeleteButton from "./Editor/DeleteButton";
import { addData, deleteData, editData } from "@/functions/post_data/Editor";

type datas = {
  title: string;
  _id: string;
};
const ThingsEdit = async () => {
  const data: datas[] = await GetAll(projects, 1);

  const deleter = async (id: string) => {
    "use server";
    await deleteData(projects, id);
  };

  const editor = async (data: FormData) => {
    "use server";
    const obj: string = JSON.stringify({
      _id: data.get("_id"),
      title: data.get("title"),
    });
    await editData(projects, obj);
  };

  const adder = async (data: FormData) => {
    "use server";
    const obj: string = JSON.stringify({ title: data?.get("title") });
    await addData(projects, obj);
  };
  return (
    <section className="w-full p-[4rem] bg-slate-900">
      <h3 className="text-[5rem] font-bold text-orange-400 ">
        THINGS I CAN DO
      </h3>
      <div className="w-full overflow-x-scroll  custom-scroll  py-[2rem]">
        <div
          className="flex gap-[2rem]"
          style={{ width: `calc(${data?.length} * 36rem + 36rem)` }}
        >
          <form
            action={adder}
            className="w-full max-w-[35rem] flex-wrap flex justify-center gap-[4rem] rounded-xl p-[2rem] border-2 text-center text-white text-[2.2rem] font-medium"
          >
            <input
              type="text"
              name="title"
              id="title"
              required
              className="w-full bg-transparent focus:outline-none text-center"
              placeholder="Enter Title"
            />
            <div className="w-full flex flex-wrap  justify-center gap-[2rem]">
              <button
                type="submit"
                className="w-fit text-[14px] rounded-xl transition-all duration-300 text-white border-2 bg-trnsparent py-[5px] px-[2rem] hover:bg-white hover:text-slate-900"
              >
                Save
              </button>
            </div>
          </form>
          {Array.isArray(data) &&
            data?.map((item: datas, index: number) => (
              <form
                action={editor}
                key={index}
                className="w-full max-w-[35rem] flex-wrap flex justify-center gap-[4rem] rounded-xl p-[2rem] border-2 text-center text-white text-[2.2rem] font-medium"
              >
                <input
                  type="text"
                  name="_id"
                  id="_id"
                  required
                  className="hidden"
                  defaultValue={item?._id?.toString()}
                />
                <input
                  type="text"
                  name="title"
                  id="title"
                  required
                  className="w-full bg-transparent focus:outline-none text-center"
                  defaultValue={item?.title}
                  placeholder="Enter Title"
                />
                <div className="w-full flex flex-wrap  justify-center gap-[2rem]">
                  <button
                    type="submit"
                    className="w-fit text-[14px] rounded-xl transition-all duration-300 text-white border-2 bg-trnsparent py-[5px] px-[2rem] hover:bg-white hover:text-slate-900"
                  >
                    Save
                  </button>
                  <DeleteButton deleter={deleter} id={item?._id?.toString()} />
                </div>
              </form>
            ))}
        </div>
      </div>
    </section>
  );
};

export default ThingsEdit;
