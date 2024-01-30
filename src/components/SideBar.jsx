import React from "react";
import Buttom from "./Buttom";

function SideBar({
  onStarAddProject,
  projects,
  onSelectProject,
  selectedProjectId,
}) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl ">
      <h2 className=" mb-8 font-bold uppercase md:text-xl text-stone-200">
        yours projects
      </h2>
      <div>
        <Buttom onClick={onStarAddProject}>+ Add project</Buttom>
      </div>
      <ul className="mt-8">
        {projects.map((project) => {
          let cssClases =
            "w-full text-left px-2 py1 rounded-sm my-1  hover:text-stone-200 hover:bg-stone-800";
          if (project.id === selectedProjectId) {
            cssClases += "bg-stone-600 text-stone-200";
          } else {
            cssClases += "text-stone-400";
          }
          return (
            <li key={project.id}>
              <button onClick={() => onSelectProject(project.id)} className={cssClases}>
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default SideBar;
