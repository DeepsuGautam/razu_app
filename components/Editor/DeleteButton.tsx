"use client";
import React from "react";

const DeleteButton = ({ deleter, id }: { deleter: any, id:string }) => {
  return (
    <button
      type="submit"
      onClick={()=>{
        const confirm = window.confirm("Delete This Item?")
        if(!confirm) return
        deleter(id)
    }}
      className="w-fit text-[14px] rounded-xl transition-all duration-300 text-red-500 border-2 border-red-500 bg-trnsparent py-[5px] px-[2rem] hover:bg-red-500 hover:text-white"
    >
      Delete
    </button>
  );
};

export default DeleteButton;
