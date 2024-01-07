import { CDN_URL } from "../utils/constants";

const Restaurantcard = (props) => {
  const { resData } = props;

  const {cloudinaryImageId,name,cuisines,avgRating,deliveryTime} = resData?.info;

  if (!resData || !resData.info) {
    console.error("Invalid resdata:", resData);
    return null;
  }

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        src={CDN_URL + cloudinaryImageId}
        alt="Restaurant Logo"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

export default Restaurantcard;
