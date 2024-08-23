import React, { useState } from "react";
import styles from "./ToDo.module.css";
import { v4 as uuidv4 } from "uuid";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { IoSaveOutline } from "react-icons/io5";

export default function ToDo() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>ToDo List </h1>
      </div>

      <div className={styles.createcontainer}>
        <input
          className={styles.input}
          type="text"
          value={input}
          placeholder="Create a new todo"
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button
          className={styles.add}
          onClick={() => {
            setTasks((old) => {
              return [
                ...old,
                { task: input, isRead: true, id: uuidv4(), isChecked: false },
              ];
            });
            setInput("");
          }}
        >
          Add
        </button>
      </div>

      <div className={styles.tasks}>
        {tasks.map((task) => {
          return (
            <div className={styles.task}>
              <input
                type="checkbox"
                className={styles.checkbox}
                checked={task.isChecked}
                onChange={(e) => {
                  let checked = e.target.checked;
                  setTasks((old) => {
                    return old.map((item) => {
                      if (task.id == item.id) {
                        return { ...item, isChecked: checked };
                      } else {
                        return item;
                      }
                    });
                  });
                }}
              />
              {task.isRead && (
                <span
                  className={
                    task.isChecked ? styles.taskdone : styles.tasknotdone
                  }
                >
                  {task.task}
                </span>
              )}
              {!task.isRead && (
                <input
                  className={styles.editinput}
                  type="text"
                  value={task.task}
                  onChange={(e) => {
                    let newInput = e.target.value;
                    setTasks((old) => {
                      return old.map((item) => {
                        if (task.id == item.id) {
                          return { ...item, task: newInput };
                        } else {
                          return { ...item };
                        }
                      });
                    });
                  }}
                />
              )}
              {!task.isRead && (
                <IoSaveOutline
                  className={styles.save}
                  onClick={() => {
                    setTasks((old) => {
                      return old.map((item) => {
                        if (task.id == item.id) {
                          return { ...item, isRead: true };
                        } else {
                          return { ...item };
                        }
                      });
                    });
                  }}
                />
              )}
              {task.isRead && (
                <CiEdit
                  className={styles.edit}
                  onClick={() => {
                    setTasks((old) => {
                      return old.map((item) => {
                        if (task.id == item.id) {
                          return { ...item, isRead: false };
                        } else {
                          return { ...item };
                        }
                      });
                    });
                  }}
                />
              )}
              <MdDeleteOutline
                className={styles.delete}
                onClick={() => {
                  setTasks((old) => {
                    return old.filter((item) => {
                      if (task.id == item.id) {
                        return task.id != item.id;
                      } else {
                        return { ...item };
                      }
                    });
                  });
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
