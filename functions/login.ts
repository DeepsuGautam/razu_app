"use server";

import { cookies } from "next/headers";
import ConnectDB from "./connection/ConnectDB";

const domain = process.env.DOMAIN || "http://182.93.94.210:3002";

async function login(data: FormData): Promise<{ error?: string }> {
  try {await ConnectDB()
    const userData = JSON.stringify({
      email: data.get("email"),
      password: data.get("password"),
    });

    const res = await fetch(`${domain}/auth`, {
      method: "POST",
      cache: "no-store",
      body: userData,
    });

    if (!res.ok) {
      const reply = await res.json();
      throw new Error(reply?.message || "Login failed");
    }

    const cookiedata = await res.json();
    cookies().set("token", cookiedata?.token, { maxAge: 7 * 24 * 60 * 60 });

    // Return success without redirect
    return {};
  } catch (error: any) {
    return { error: error.message };
  }
}

export default login;
