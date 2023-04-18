import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="container">
      <h1>Home Page</h1>
      <p>
        <Link to="/bast38900">Bjarke on GitHUB</Link> on GitHub.
        {/* <Link to="https://github.com/bast38900">Bjarke on GitHUB</Link> */}
      </p>
    </div>
  );
}
