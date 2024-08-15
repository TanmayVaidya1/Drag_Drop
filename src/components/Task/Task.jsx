  import React, { useState } from "react";
  import { useSortable } from "@dnd-kit/sortable";
  import { CSS } from "@dnd-kit/utilities";
  import { ArcherElement } from "react-archer";
  import "./Task.css";
  
  const Popup = ({ title, details, onClose }) => (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>{title}</h2>
        <p>{details}</p>
        <button className="btn btn-danger" onClick={onClose}>Close</button>
      </div>
    </div>
  );

  export const Task = ({ id, title, details, targetIds = [] }) => {
    const [isPopupVisible, setPopupVisible] = useState(false);
    const { attributes, listeners, setNodeRef, transform, transition } =
      useSortable({ id });

    const style = {
      transition,
      transform: CSS.Transform.toString(transform),
    };

    return (
      <ArcherElement
        id={id}
        relations={targetIds.map((targetId) => ({
          targetId,
          targetAnchor: 'top',
          sourceAnchor: 'bottom',
          style: { strokeColor: 'blue', strokeWidth: 2 },
        }))}
      >
        <div>
        
          <div
            ref={setNodeRef}
            style={style}
            {...attributes}
            {...listeners}
            className="task"
          >
            {title}
            <button onClick={() => setPopupVisible(true)} className="show-more-button btn btn-success">
              Show More
            </button>
          </div>
        
          {isPopupVisible && (
            <Popup
              title={title}
              details={details}
              onClose={() => setPopupVisible(false)}
            />
          )}
        </div>
      </ArcherElement>
    );
  };

