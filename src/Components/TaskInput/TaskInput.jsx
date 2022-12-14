import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import { nanoid } from "nanoid";

import classes from "./TaskInput.module.scss";
import { joinClasses } from "../../helpers";

const initialTask = {
  name: "",
};

export default function TaskInput({ handleCreateTask }) {
  const [form, setForm] = useState(initialTask);
  const [isError, setError] = useState(false);

  const handleChangeName = ({ target: { value } }) => {
    setError(false);

    setForm((prev) => ({
      ...prev,
      name: value,
    }));
  };

  const handleCreate = () => {
    if (form.name) {
      handleCreateTask({ ...form, id: nanoid() });
      setForm(initialTask);
    } else {
      setError(true);
    }
  };

  return (
    <>
      {isError && <div className={classes.error}>Fill in the field!</div>}
      <form className={classes.wrap}>
        <input
          className={classes.input}
          type="text"
          placeholder="Type the task in"
          name="task"
          value={form.name}
          onChange={handleChangeName}
          onKeyDown={({ key }) => key === "Enter" && handleCreate()}
        />
        <button
          type="button"
          onClick={handleCreate}
          className={joinClasses(classes.icon, classes.add)}
        >
          <FontAwesomeIcon icon={faSquarePlus} />
        </button>
      </form>
    </>
  );
}
