"use client";
import Contact from "@/functions/post_data/Contact";
import React, { useEffect, useState } from "react";

const MainForm = () => {
  const [message, setMessage] = useState<string>("");

  const handleSubmit = async (e: any) => {
    e?.preventDefault();
    const { name, phone, email, text } = e?.target;
    const str_obj = JSON.stringify({
      name: name?.value,
      phone: phone?.value,
      email: email?.value,
      message: text?.value,
    });
    const isCorrect: string = await Contact(str_obj);
    setMessage(isCorrect);
  };

  useEffect(() => {
    if (message?.length > 0) {
      setTimeout(() => {
        setMessage("");
      }, 5000);
    }
  }, [message]);

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full p-[2rem] text-white flex flex-wrap justify-evenly z-10 gap-[2rem]"
    >
      <h3 className="text-[4rem] w-full font-bold">CONTACT NOW!</h3>
      <input
        type="text"
        name="name"
        id="name"
        className="text-white w-full md:w-[calc(50%-1rem)] mt-[1rem] pb-[2rem] min-w-[30rem] text-[1.8rem] bg-transparent focus:outline-none border-b-2"
        required
        placeholder="NAME"
      />
      <input
        type="text"
        name="phone"
        id="phone"
        className="text-white w-full md:w-[calc(50%-1rem)] mt-[1rem] pb-[2rem] min-w-[30rem] text-[1.8rem] bg-transparent focus:outline-none border-b-2"
        required
        placeholder="PHONE"
      />
      <input
        type="email"
        name="email"
        id="email"
        className="text-white w-full text-[1.8rem] mt-[2rem] pb-[2rem] bg-transparent focus:outline-none border-b-2"
        required
        placeholder="EMAIL"
      />
      <textarea
        name="text"
        id="text"
        className="text-white w-full mt-[2rem] resize-none text-[1.8rem] bg-transparent focus:outline-none border-b-2"
        required
        placeholder="MESSAGE"
      />
      <div className="w-full flex justify-start py-[2rem]">
        <button className="px-[3rem] py-[1rem] text-white bg-slate-900 rounded-xl hover:bg-slate-950 transition-all duration-300 text-[1.6rem]">
          SEND
        </button>
      </div>
      {message?.length > 0 && (
        <p
          className="w-full p-[0.75rem] text-[1.6rem] font-medium rounded-xl text-left"
          style={{
            background:
              message === "Message Sent Successfully!" ? "green" : "red",
          }}
        >
          {message}
        </p>
      )}
    </form>
  );
};

export default MainForm;
