import React from "react";
import Buttom from "./Buttom";

function SideBar({ onStarAddProject }) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl ">
      <h2 className=" mb-8 font-bold uppercase md:text-xl text-stone-200">
        yours projects
      </h2>
      <div>
        <Buttom onClick={onStarAddProject}>+ Add project</Buttom>
      </div>
      <ul></ul>
    </aside>
  );
}

export default SideBar;
