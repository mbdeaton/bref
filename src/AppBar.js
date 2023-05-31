import React from "react";
import logo from "./logo.svg";
import "./AppBar.css";

function AppBar() {
  return (
    <div className="app-bar">
      <img
        className="logo"
        src={logo}
        alt="the Braille letters 'bref' in red"
      />
      <h2 className="app-name">Braille Reference</h2>
      <a href="https://github.com/mbdeaton/bref">
        <svg role="img" viewBox="0 0 24 24" title="get help">
          <path d="M12,4C7.58,4,4,7.58,4,12s3.58,8,8,8,8-3.58,8-8S16.42,4,12,4Zm-1,3h2v2h-2v-2Zm3,10h-4v-1h1v-4h-1v-1h3v5h1v1Z"></path>
        </svg>
      </a>
    </div>
  );
}

export default AppBar;
