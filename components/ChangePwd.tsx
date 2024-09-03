"use client";
import { rePwd } from "@/functions/post_data/rePwd";
import React, { useEffect, useState } from "react";

const ChangePwd = () => {
  const [err, setErr] = useState<string>("");
  const [succ, setSucc] = useState<string>("");

  const handleSubmit = async (e: any) => {
    e?.preventDefault();
    const data = {
      pass: e?.target?.newPassword?.value,
      rePass: e?.target?.rePassword?.value,
    };
    if (data?.pass !== data?.rePass) {
      return setErr("Both Password Must Match!");
    }
    const success: { success: Boolean; message: string } = await rePwd(
      data?.pass
    );
    if (!success?.success) {
      setErr(success?.message);
      setSucc("");
    } else {
      setSucc(success?.message);
      setErr("");
    }
  };

  useEffect(() => {
    if (err || succ) {
      setTimeout(() => {
        setErr("");
        setSucc("");
      }, 3000);
    }
  }, [err, succ]);

  return (
    <section className="w-full p-[4rem] flex justify-center bg-slate-950">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-[35rem] text-[16px] p-[2rem] text-white text-center"
      >
        <h3 className="text-[3rem] font-bold">Change Password</h3>
        <br />
        <input
          type="text"
          name="newPassword"
          id="newPassword"
          required
          className="w-full p-[1rem] text-center rounded-xl border-2 text-white bg-transparent"
          placeholder="Enter New Password"
        />
        <br />
        <br />
        <input
          type="text"
          name="rePassword"
          required
          id="rePassword"
          className="w-full p-[1rem] text-center rounded-xl border-2 text-white bg-transparent"
          placeholder="Re-Enter New Password"
        />
        <br />
        <br />
        <button className="w-full font-medium bg-white border-2 p-[10px] text-center text-[14px] bg-transparent rounded-xl transition-all duration-300 text-slate-900">
          Change Password
        </button>
        <br /><br />
        {err && (
          <p className="text-[14px] bg-red-500 shadow-lg text-white p-[1rem] rounded-xl ">
            {err}
          </p>
        )}
        {succ && (
          <p className="text-[14px] bg-green-500 shadow-lg text-white p-[1rem] rounded-xl ">
            {succ}
          </p>
        )}
      </form>
    </section>
  );
};

export default ChangePwd;
