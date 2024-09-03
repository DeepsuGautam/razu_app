"use server";

import sections from "@/models/sections";
import { revalidatePath } from "next/cache";
import ConnectDB from "../connection/ConnectDB";

export const replaceData = async (data: FormData) => {
  try {
    await ConnectDB();
    const obj = {
      title: data?.get("title"),
      subtitle: data?.get("subtitle") || "",
      paragraph: data?.get("paragraph"),
      relation: data?.get("relation"),
    };
    const sec: any = await sections.findOne({ relation: obj?.relation });
    if (!sec) {
      const newSec = new sections(obj);
      await newSec.save();
      return true;
    }
    sec.title = obj?.title;
    sec.subtitle = obj?.subtitle;
    sec.paragraph = obj?.paragraph;

    await sec.save();
    revalidatePath("/dashboard");
  } catch (error: any) {
    console.log(error?.message);
  }
};

export const addData = async (model: any, data: string) => {
  try {
    await ConnectDB();
    const parsed: any = JSON.parse(data);
    const newData = new model(parsed);
    await newData.save();
    revalidatePath("/dashboard");
  } catch (error: any) {
    console.log(error?.message);
  }
};

export const editData = async (model: any, data: string) => {
  try {
    await ConnectDB();
    const parsed: any = JSON.parse(data);
    const _id: string = parsed?._id;
    const newData = await model.findOne({ _id });
    if (!newData) return false;
    newData.title = parsed?.title;
    await newData.save();
    revalidatePath("/dashboard");
  } catch (error: any) {
    console.log(error?.message);
  }
};

export const deleteData = async (model: any, _id: string) => {
  try {
    await ConnectDB();
    await model.findOneAndDelete({ _id });
    revalidatePath("/dashboard");
  } catch (error: any) {
    console.log(error?.message);
  }
};
