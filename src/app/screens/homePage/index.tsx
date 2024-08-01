import React, { useEffect } from "react";
import Events from "./Events";
import ActiveUsers from "./ActiveUsers";
import Advertisement from "./Advertisement";
import NewDishes from "./NewDishes";
import PopularDishes from "./PopularDishes";
import Statistics from "./Statistics";
import "../../../css/home.css";

import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { setPopularDishes } from "./slice";
import { retrivePopularDishes } from "./selector";
import { Product } from "../../../lib/types/product";
/** REDUX SLICE & SELECTOR */
const actionDispatch = (dispatch: Dispatch) => ({
  setPopularDishes: (data: Product[]) => dispatch(setPopularDishes(data)),
});

const popularDishesRetriever = createSelector(
  retrivePopularDishes,
  (popularDishes) => ({ popularDishes })
);

export default function HomePage() {
  const { setPopularDishes } = actionDispatch(useDispatch());
  const { popularDishes } = useSelector(popularDishesRetriever);
  // Select: Store => Data

  useEffect(() => {
    // // Backend server data request => DATA
    
    // const result = [
    //   {
    //     "_id": "66817c85b64e1ab60c9fdb69",
    //     "productStatus": "PROCESS",
    //     "productCollection": "DISH",
    //     "productName": "Hello",
    //     "productPrice": 10,
    //     "productLeftCount": 100,
    //     "productSize": "NORMAL",
    //     "ProductVolume": 1,
    //     "productDesc": "Delicious meal",
    //     "productImages": [
    //         "uploads/products/f72b9a2c-7325-4d81-99d4-691ccc9e964f.jpg"
    //     ],
    //     "productViews": 1,
    //     "createdAt": "2024-06-30T15:40:53.365Z",
    //     "updatedAt": "2024-07-25T11:11:26.477Z",
    //     "__v": 0
    // },
    // {
    //     "_id": "66817d8d6a76b161601aeae8",
    //     "productStatus": "PROCESS",
    //     "productCollection": "DISH",
    //     "productName": "Turkish Steak",
    //     "productPrice": 15,
    //     "productLeftCount": 100,
    //     "productSize": "LARGE",
    //     "ProductVolume": 1,
    //     "productDesc": "Delicious meal",
    //     "productImages": [
    //         "uploads/products/ef57f8dc-c602-4682-aa1f-d71fcc0de450.jpg"
    //     ],
    //     "productViews": 0,
    //     "createdAt": "2024-06-30T15:45:17.124Z",
    //     "updatedAt": "2024-06-30T16:26:56.242Z",
    //     "__v": 0
    // },
    // ]

    // // slice: DATA => REDUX
    // // @ts-ignore
    // setPopularDishes(result);
  }, []);

  console.log("popularDishes:", popularDishes);

  return (
    <div className={"homepage"}>
      <Statistics />
      <PopularDishes />
      <NewDishes />
      <Advertisement />
      <ActiveUsers />
      <Events />
    </div>
  );
}