"use server";

import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const domain: string = process.env.DOMAIN || "http://182.93.94.210:3002";

const middleware = async (req: NextRequest) => {
  const url: string = req?.url;
  const isDash = url?.includes("/dashboard");
  if (!isDash) {
    return NextResponse.next();
  }
  const cookieData: string | undefined = cookies().get("token")?.value;
  if (!cookieData) return NextResponse.redirect(domain+"/login");
  const res = await fetch(`${domain}/auth`, {
    cache: "no-cache",
    headers: {
      auth: `Bearer ${cookieData}`,
    },
  });
  if (!res.ok) return NextResponse.redirect(domain+"/login");
  return NextResponse.next();
};

export default middleware;
