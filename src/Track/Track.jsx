import React, { useState } from "react";

function Track({ track, onAdd, onRemove, isRemoval }) {
  const handleAdd = () => {
    onAdd(track);
  };

  const handleRemove = () => {
    onRemove(track);
  };

  return (
    <div className="Track">
      <div className="Track-information">
        <h3>{track.name}</h3>
        <p>
          {track.artist} | {track.album}
        </p>
      </div>
      <button
        className="Track-action"
        onClick={isRemoval ? handleRemove : handleAdd}
      >
        {isRemoval ? "-" : "+"}
      </button>
    </div>
  );
}

export default Track;
