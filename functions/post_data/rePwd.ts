"use server";

import users from "@/models/users";
import { hash } from "bcryptjs";
import ConnectDB from "../connection/ConnectDB";


export const rePwd = async (data: string) => {
  try {await ConnectDB()
    const admin = await users.findOne({ role: "admin" });
    const pass:string = await hash(data, 10)
    admin.password = pass
    await admin.save()
    return {success:true, message:"Changed"}
  } catch (error: any) {
    console.log(error?.message);
    return { success: false, message: error?.message };
  }
};
