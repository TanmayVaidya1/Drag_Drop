

import React from "react";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { ArcherContainer } from "react-archer";
import { Task } from "../Task/Task";
import "./Column.css";

export const Column = ({ tasks }) => {
  return (
    <ArcherContainer strokeColor="red">
      <div className="column ">
        <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
          {tasks.map((task, index) => (
            <Task
              key={task.id}
              id={task.id}
              title={task.title}
              details={task.details}
              targetIds={tasks.slice(index + 1).map(t => t.id)} // Connect to subsequent tasks
            />
          ))}
        </SortableContext>
      </div>
    </ArcherContainer>
  );
};
