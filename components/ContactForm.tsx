import { get_images } from "@/functions/files/get_images";
import React from "react";
import MainForm from "./MainForm";

const ContactForm = async () => {
  const bg = await get_images("covers", "contact-bg.jpg");
  return (
    <section
      className="w-full min-h-screen flex bg-cover bg-fixed bg-no-repeat"
      style={{ backgroundImage: `url("${bg}")` }}
    >
      <div className="w-full min-h-screen flex flex-col justify-center bg-black bg-opacity-50">
        <div className="w-[80%] max-w-[80rem] relative rounded-xl shadow-xl overflow-hidden bg-black bg-opacity-20 mx-auto">
          <div className=" blur-xl absolute top-0 left-0 right-0 bottom-0 -z-10"></div>
         <MainForm/>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
