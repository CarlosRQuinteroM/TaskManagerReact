import React from "react";
import Input from "./Input";

function NewProject() {
  return (
    <div>
      <menu>
        <li>
          <button>Cancel</button>
          <button>Save</button>
        </li>
      </menu>
      <div>
        <Input label="Title" />
        <Input label="Description" textarea={true} />
        <Input label="Due Date" />
      </div>
    </div>
  );
}

export default NewProject;
