import React, { useState } from "react";
import data from "./data";
import "./styles.css";

export default function Accordian() {
  const [selected, setSelected] = useState(null); // For single accordion selection
  const [enableMultiSelection, setEnableMultiSelection] = useState(false); // To enable/disable multi-selection mode
  const [multiple, setMultiple] = useState([]); // For multiple accordion selection

  // Handle clicking on an accordion in single selection mode
  function handleSingleClick(getDataID) {
    // Close the accordion if it's already open. Otherwise open it
    setSelected((prevSelected) =>
      prevSelected === getDataID ? null : getDataID
    );
  }

  // Handle clicking on an accordion in multi-selection mode
  function handleMultiSelection(getDataID) {
    // Check if the accordion is already in the multiple selection list
    const isAccordionOpen = multiple.includes(getDataID);

    if (isAccordionOpen) {
      // If it's open, close it by removing it from multiple
      setMultiple((prevMultiple) =>
        prevMultiple.filter((id) => id !== getDataID)
      );
    } else {
      // If it's closed, add it to multiple
      setMultiple((prevMultiple) => [...prevMultiple, getDataID]);
    }
  }

  return (
    <div className="acc-wrapper">
      {/* Button to toggle enableMultiSelection */}
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
        Enable Multi Selection
      </button>

      {/* Accordion container */}
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item" key={dataItem.id}>
              <div
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(dataItem.id) // Multi-selection mode
                    : () => handleSingleClick(dataItem.id) // Single selection mode
                }
                className="title"
              >
                <h3>{dataItem.decade}</h3>
                <span> + </span>

                {/* Display major events only if the accordion is open */}
                {(selected === dataItem.id ||
                  multiple.includes(dataItem.id)) && (
                  <div className="content">{dataItem.major_events}</div>
                )}
              </div>
            </div>
          ))
        ) : (
          <p>No Data</p>
        )}
      </div>
    </div>
  );
}
