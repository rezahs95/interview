import React, { useContext, useEffect } from "react";
import "./App.css";
import { AppStateContext, AppActionContext } from "./providers/apiProvider";
import Card from "./components/Card/card";
import Carousel from "./components/Carousel/carousel";

function App() {
  const { authentication, getMovies } = useContext(AppActionContext);
  const { dataSource } = useContext(AppStateContext);

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
          alt="Profile"
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
