import React from "react";
import auth from "../utils/auth";
// just a placeholder header
export default function Header() {
  const user = auth.getUser();
  const greeting = user ? `Hello, ${user.name}` : "";
  return (
    <header>
      <h1 id="headerEl">Movie Review</h1>
      <h2>{greeting}</h2>
    </header>
  );
}
