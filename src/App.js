import React, { useContext, useEffect } from "react";
import "./App.css";
import { AppContext } from "./apiProvider";
import Card from "./components/card";
import Carousel from "./components/carousel";

function App() {
  const {
    authentication,
    getMovies,
    dataSource
  } = useContext(AppContext);

  useEffect(() => {
    authentication();
    getMovies();
  }, []);

  return (
    <div className="container">
      <div className="profile-container">
        <div className="welcome">Welcome</div>
        <img
          className="profile-pic"
          alt="Oops!"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5GVHWwqF-_gEZCa669SSiPiuiQV8DaH12AA&usqp=CAU"
        />
      </div>
      <Card />
      <div className="recent-movies">Recent Movies</div>
      <Carousel data={dataSource} />
    </div>
  );
}

export default App;
