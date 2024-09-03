"use server";

import { existsSync, unlinkSync, writeFileSync } from "fs";
import { join } from "path";

const replacer = async (data: any) => {
  try {
    const file = data?.get("file");
    const filePath = data?.get("filePath");
    if (!file || !filePath) throw new Error("Input All");
    const array_buffer: ArrayBuffer = await file.arrayBuffer();
    const buffered_data: Buffer = Buffer.from(array_buffer);

    const fullpath: string = join(process.cwd(), "uploads", filePath);
    const fileExist: Boolean = existsSync(fullpath);
    if (fileExist) {
      unlinkSync(fullpath);
    }
    writeFileSync(fullpath, buffered_data);
    return "File Replaced";
  } catch (error: any) {
    console.log(error?.message);
    return error?.message;
  }
};

export default replacer;
