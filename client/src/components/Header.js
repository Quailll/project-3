import React from "react";

// just a placeholder header
export default function Header() {
  return (
    <div className="header">
      <header >
        <h1 id="headerEl">
          <img
            className="header-logo"
            alt="film fuse logo"
            src="https://cdn.discordapp.com/attachments/1101558001803997225/1104642785266634804/filmfuse.png"
          ></img>
          <a id="headerClick" href="/">
            Film Fuse
          </a>
        </h1>
      </header>
    </div>
  );
}
