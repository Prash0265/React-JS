import Restaurantcard from "./RestaurantCard";
import resObj from "../utils/mockData";
import {  useState } from "react";

if (!resObj) {
  console.error("Invalid data structure for restaurants.");
  // Render an error message or handle the error appropriately
}

// const { restaurants } = resObj;


const Body = () => {
  console.log("resObj", resObj); // Log resObj to check its structure

  const [listOfRestaurants, setListOfRestaurants] = useState(resObj);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestaurants(filteredList);
          }}
          onMouseOver={() => {
            console.log("Button Clicked");
          }}
        >
          Top Rated restaurant
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <Restaurantcard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
