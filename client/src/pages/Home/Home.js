import React from "react";
const trendingArray = [];
require("dotenv").config();

function Home() {
  const api = process.env.apiKey;
  const fetchTrending = async () => {
    const apiData = await fetch(
      `https://api.themoviedb.org/3/trending/movie/week?${api}`
    );
  };
  return (
    <>
      <div>
        <h2>Homepage</h2>
      </div>

      <div>
        <ul>
          <div className="">
            <li>
              <img
                className="imgEl"
                src="https://lumiere-a.akamaihd.net/v1/images/p_disneymovies_avatarthewayofwater_1710_b7d39b03.jpeg?region=0%2C0%2C540%2C810"
              ></img>
              <a href="#">Avatar: Way of the Water</a>
            </li>
          </div>
        </ul>
      </div>
      <div>random movies</div>
    </>
  );
}

export default Home;
