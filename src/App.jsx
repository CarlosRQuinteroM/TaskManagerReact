import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import SideBar from "./components/SideBar";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function handlesStarAddProject() {
   
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  let content;

  if (projectsState.selectedProjectId === null) {
    content = <NewProject />;
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStarAddProject={handlesStarAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar onStarAddProject={handlesStarAddProject} />
      {content}
    </main>
  );
}

export default App;
