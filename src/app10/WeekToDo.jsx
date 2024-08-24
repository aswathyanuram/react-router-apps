import React, { useState } from "react";
import styles from "./WeekToDo.module.css";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import { Checkbox, Progress } from "antd";

export default function WeekToDo() {
  const [notes, setNotes] = useState([
    {
      id: "group1",
      title: "Grocery",
      notes: [
        { id: "group1note1", title: "Buy Milk", isCompleted: false },
        { id: "group1note2", title: "Get Vegetables", isCompleted: false },
      ],
      isOpen: false,
    },
    {
      id: "group2",
      title: "Learn",
      notes: [
        { id: "group2note1", title: "Learn React", isCompleted: false },
        { id: "group2note2", title: "Learn Javascript", isCompleted: false },
        { id: "group2note3", title: "Learn NodeJS", isCompleted: false },
      ],
      isOpen: true,
    },
  ]);

  return (
    <div className={styles.noteContainer}>
      {notes.map((noteGroup) => {
        const { id, title, notes, isOpen } = noteGroup;
        return (
          <div className={styles.card}>
            <div className={styles.top}>
              <div className={styles.completion}>
                <Progress
                  strokeWidth={10}
                  type="circle"
                  percent={75}
                  size={"small"}
                  showInfo={false}
                />
              </div>
              <div className={styles.groupTitle}>{title}</div>
              <div
                className={styles.groupExpand}
                onClick={() => {
                  setNotes((old) => {
                    return old.map((item) => {
                      if (id == item?.id) {
                        return { ...item, isOpen: !isOpen };
                      } else {
                        return { ...item };
                      }
                    });
                  });
                }}
              >
                {isOpen && <HiChevronUp />}
                {!isOpen && <HiChevronDown />}
              </div>
            </div>
            {isOpen && (
              <div className={styles.bottom}>
                {notes.map((note) => {
                  const { id, title, isCompleted } = note;
                  return (
                    <div className={styles.noteCard}>
                      <div className={styles.noteCheckbox}>
                        <Checkbox onChange={() => {}}></Checkbox>
                      </div>
                      <div className={styles.noteTitle}>{title}</div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
