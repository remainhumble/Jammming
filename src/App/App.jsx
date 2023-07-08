import React, { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";
// import reactLogo from "../assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlist, setPlaylist] = useState([]);

  const addToPlaylist = (track) => {
    setPlaylist([...playlist, track]);
  };

  const removeFromPlaylist = (track) => {
    const updatedPlaylist = playlist.filter((t) => t.id !== track.id);
    setPlaylist(updatedPlaylist);
  };

  const savePlaylist = () => {
    // Logic to save the playlist to Spotify
  };

  const search = (searchTerm) => {
    // Logic to perform the search and update searchResults state
  };

  return (
    <>
      <h1>Jammming</h1>
      <SearchBar onSearch={search} />
      <div className="App-playlist">
        <SearchResults searchResults={searchResults} onAdd={addToPlaylist} />
        <Playlist
          playlist={playlist}
          onRemove={removeFromPlaylist}
          onSave={savePlaylist}
        />
      </div>
    </>
  );
}

export default App;
