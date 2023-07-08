import React from "react";
import Tracklist from "../Tracklist/Tracklist";

function Playlist({ playlist, onRemove, onSave }) {
  return (
    <div className="Playlist">
      <h2>Playlist</h2>
      <Tracklist tracks={playlist} onRemove={onRemove} />
      <button className="Playlist-save" onClick={onSave}>
        Save to Spotify
      </button>
    </div>
  );
}

export default Playlist;
