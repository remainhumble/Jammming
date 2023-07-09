import React, { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";
import Tracklist from "../Tracklist/Tracklist";
// import reactLogo from "../assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [searchResults, setSearchResults] = useState([
    {
      id: 1,
      name: "Song 1",
      artist: "Artist 1",
      album: "Album 1",
    },
    {
      id: 2,
      name: "Song 2",
      artist: "Artist 2",
      album: "Album 2",
    },
    // Add more track objects as needed
  ]);
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
      <h1>
        Ja<span className="ems">mmm</span>ing
      </h1>
      <SearchBar onSearch={search} />
      <Tracklist tracks={searchResults} />
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
