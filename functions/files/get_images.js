"use server";
import { hash } from "bcryptjs";
import { readFileSync, unlinkSync, writeFileSync } from "fs";
import { extname, join } from "path";

export const get_images = async(foldername, imagename) => {
  try {
    const main_path = join(process.cwd(), "uploads", foldername, imagename);
    const image = readFileSync(main_path);
    const base64Image = image.toString("base64");
    const url = `data:image/jpeg;base64,${base64Image}`;
    return url;
  } catch (error) {
    console.log(error.message);
    return "/";
  }
};

export const add_images = async (file, foldername, fileName) => {
  try {
    const newUniqueName = await hash(`${file?.name}-${new Date()}`, 10);
    const ext = extname(file?.name);
    const bufferred = Buffer.from(await file?.arrayBuffer());
    const name = `${fileName}-${newUniqueName}.${ext}`;
    const fullPath = join(process.cwd(), "uploads", foldername, name);
    writeFileSync(fullPath, bufferred);
    return { success: true, file: name };
  } catch (error) {
    console.log(error.message);
    return { success: false };
  }
};

export const del_images = async (filePath) => {
  try {
    const absolutPath = join(process.cwd(), "uploads", filePath);
    unlinkSync(absolutPath);
    return true;
  } catch (error) {
    console.log(error?.message);
    return false;
  }
};

export const add_covers = async (file, foldername, fileName) => {
  try {
    const bufferred = Buffer.from(await file?.arrayBuffer());
    const name = fileName;
    const fullPath = join(process.cwd(), "uploads", foldername, name);
    writeFileSync(fullPath, bufferred);
    return true;
  } catch (error) {
    console.log(error.message);
    return false;
  }
};
