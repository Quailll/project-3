import React, { useState, useEffect } from "react";

require("dotenv").config();

export default function Home() {
  const api = process.env.apiKey;
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/trending/movie/week?${api}`
    )
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  }, []);
  return (
    <>
      <div>
        <h2>Homepage</h2>
      </div>

      <div>
        <ul>
          <div className="">
            <li>
              {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : "Loading..."}
            </li>
          </div>
        </ul>
      </div>
      <div>random movies</div>
    </>
  );
}


