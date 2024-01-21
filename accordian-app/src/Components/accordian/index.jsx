import React, { useState } from "react";
import data from "./data";

export default function Accordian() {
  const [selected, setSelected] = useState(null);

  function handleSingleClick(getDataID) {
    setSelected(getDataID);
  }

  return (
    <div className="wrapper">
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div
              onClick={() => handleSingleClick(dataItem.id)}
              className="title"
            >
              <h3>{dataItem.decade}</h3>
              <span> + </span>

              {selected === dataItem.id ? (
                <div>{dataItem.major_events}</div>
              ) : null}
            </div>
          ))
        ) : (
          <p>No Data</p>
        )}
      </div>
    </div>
  );
}
