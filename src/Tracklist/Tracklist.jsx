import React, { useState } from "react";
import Track from "../Track/Track";

function Tracklist({ tracks, onRemove }) {
  return (
    <div className="TrackList">
      {tracks.map((track) => (
        <Track key={track.id} track={track} onRemove={onRemove} isRemoval />
      ))}
    </div>
  );
}

export default Tracklist;
