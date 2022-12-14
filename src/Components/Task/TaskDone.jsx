import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faTrash } from "@fortawesome/free-solid-svg-icons";

import classes from "./Task.module.scss";
import { joinClasses } from "../../helpers";

export default function TaskDone({ task, returnTask, deleteTask }) {
  const handleReturn = () => returnTask(task);
  const handleDelete = () => deleteTask(task);

  return (
    <>
      <div className={classes.name} title={task.name}>
        {task.name}
      </div>
      <div className={classes.actions}>
        <button
          className={joinClasses(classes.icon, classes.del)}
          onClick={handleDelete}
        >
          <FontAwesomeIcon
            icon={faTrash}
          />
        </button>
        <button className={joinClasses(classes.icon, classes.back)} onClick={handleReturn}>
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
      </div>
    </>
  );
}
