import React from "react";
import { createRoot } from "react-dom/client";

/**
 * Header - logo, Nav Items
 * Body - Search, Restaurant container
 * Footer - copyright, links, address, contact
 */
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://penji.co/wp-content/uploads/2022/08/10.-mr.-d-food-logo.jpg"
          alt="Logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const Restaurantcard = (props) => {
const {resName,cuisine,rating,deliverytime} = props;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        src="https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg"
      ></img>
      <h3>{resName}</h3>
      <h4>{cuisine}</h4>
      <h4>{rating}</h4>
      <h4>{deliverytime}</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <Restaurantcard
          resName="KFC"
          cuisine="Fried chicken and wings"
          rating="4.2 stars"
          deliverytime="20 minutes"
        />
        <Restaurantcard
          resName="Burger king"
          cuisine="Burger and chicken nuggets"
          rating="4.4 stars"
          deliverytime="25 minutes"
        />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<AppLayout />);
