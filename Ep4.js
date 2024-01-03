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

const Restaurantcard = () => {
    return (
        <div className="res-card" >
            <h3>Meghana foods</h3>

        </div>
    )
}

const Body = () => {
  return (
    <div className="body">
      <div className="Search">Search</div>
      <div className="res-container">
        <Restaurantcard/>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body/>
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<AppLayout />);
