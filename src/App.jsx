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
      const projectId = Math.random();
      const NewProject = {
        ...projectData,
        id: projectId,
      };
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, NewProject],
      };
    });
  }

  function handleCancelProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  let content;

  if (projectsState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelProject} />;
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStarAddProject={handlesStarAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar
        onStarAddProject={handlesStarAddProject}
        projects={projectsState.projects}
      />
      {content}
    </main>
  );
}

export default App;
