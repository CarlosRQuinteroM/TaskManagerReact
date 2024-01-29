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

  function handleAddProject(projectData) {
    setProjectsState((prevState) => {
      const NewProject = {
        ...projectData,
        id: Math.random(),
      };
      return {
        ...prevState,
        projects: [...prevState.projects, NewProject],
      };
    });
  }
  console.log(projectsState)

  let content;

  if (projectsState.selectedProjectId === null) {
    content = <NewProject  onAdd={handleAddProject}/>;
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
