import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { sign, verify } from "jsonwebtoken";
import users from "@/models/users";
import { compare } from "bcryptjs";

const key: string = process.env.KEY || "";

export const GET = async () => {
  try {
    const auth: string = headers().get("auth") || "";
    const token: string = auth.split(" ")[1];
    const verified: any = verify(token, key);
    if (!verified) throw new Error("Not Verified!");
    const user_id = verified?._id;
    if (!user_id) throw new Error("Not Verified!");
    const admin: any = await users.findOne({ _id: user_id, role: "admin" });
    if (!admin) throw new Error("Not Verified!");
    return NextResponse.json({ message: "This is Admin" }, { status: 200 });
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ message: error?.message }, { status: 401 });
  }
};

interface dataType {
  email: string;
  password: string;
}

export const POST = async (req: NextRequest) => {
  try {
    const data: dataType = await req.json();
    const { email, password } = data;

    const isAdmin = await users.findOne({ email, role: "admin" });
    if(!isAdmin) throw new Error("Enter Correct Credentials")
    const isVerify = await compare(password, isAdmin?.password)
    if(!isVerify) throw new Error("Enter Correct Credentials")
    const newToken = sign({ _id: isAdmin?._id, date: new Date() }, key, {
      expiresIn: 7 * 24000,
    });
    return NextResponse.json({token:newToken})
  } catch (error: any) {
    console.log(error?.message);
    return NextResponse.json({ message: error?.message }, { status: 500 });
  }
};
