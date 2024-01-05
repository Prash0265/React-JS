import { CDN_URL } from "../utils/constants";

const Restaurantcard = (props) => {
  const { resData } = props;

  if (!resData || !resData.info) {
    console.error("Invalid resdata:", resData);
    return null;
  }

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        src={CDN_URL + resData.info.cloudinaryImageId}
        alt="Restaurant Logo"
      />
      <h3>{resData.info.name}</h3>
      <h4>{resData.info.cuisines.join(", ")}</h4>
      <h4>{resData.info.avgRating}</h4>
      <h4>{resData.info.sla.deliveryTime} minutes</h4>
    </div>
  );
};

export default Restaurantcard;
