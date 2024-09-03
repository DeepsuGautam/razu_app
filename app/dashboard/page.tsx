import AbtEdit from "@/components/AbtEdit";
import ChangePwd from "@/components/ChangePwd";
import ThingsEdit from "@/components/ThingsEdit";
import TopEdit from "@/components/TopEdit";
import React from "react";

const page = () => {
  return (
    <main className="w-full">
      <TopEdit />
      <AbtEdit/>
      <ThingsEdit/>
      <ChangePwd/>
    </main>
  );
};

export default page;
