import { CDN_URL } from "../utils/constants";

const Restaurantcard = (props) => {
  const { resdata } = props;

  if (!resdata || !resdata.info) {
    console.error("Invalid resdata:", resdata);
    return null;
  }

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        src={CDN_URL + resdata.info.cloudinaryImageId}
        alt="Restaurant Logo"
      />
      <h3>{resdata.info.name}</h3>
      <h4>{resdata.info.cuisines.join(", ")}</h4>
      <h4>{resdata.info.avgRating}</h4>
      <h4>{resdata.info.sla.deliveryTime} minutes</h4>
    </div>
  );
};

export default Restaurantcard;
