import React, { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

function NewProject({ onAdd }) {
  const modal = useRef();
  const title = useRef();
  const description = useRef();
  const date = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDate = date.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      date: enteredDate,
    });
  }
  return (
    <>
      <Modal ref={modal}  buttonCaption="Close">
        <h2>Invalid input</h2>
        <p>Ooops looks like you forgot to enter a value. </p>
        <p> Please make sure you provide a valid value for every input field</p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button className=" px-6 py-2  text-stone-800 hover:text-stone-950">
              Cancel
            </button>
            <button
              onClick={handleSave}
              className=" px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input type="text" ref={title} label="Title" />
          <Input ref={description} label="Description" textarea />
          <Input type="date" ref={date} label="Due Date" />
        </div>
      </div>
    </>
  );
}

export default NewProject;
