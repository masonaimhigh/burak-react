import React, { useEffect } from "react";
import Statistics from "./Statistics";
import PopularDishes from "./PopularDishes";
import NewDishes from "./NewDishes";
import Advertisement from "./Advertisement";
import ActiveUsers from "./ActiveUsers";
import Events from "./Events";
import "../../../css/home.css"

export default function HomePage() {

  useEffect(() => {
    // Selector: Store => Data    #3

    // // Backend server data request => DATA   #1
    // slice: Data => Redux Store   #2

    // const result = [
    //   {


  }, []);

    return <div className={"homepage"}>
      <Statistics/>
      <PopularDishes/>
      <NewDishes/>
      <Advertisement/>
      <ActiveUsers/>
      <Events/>
    </div>;
  }