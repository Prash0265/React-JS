import { CDN_URL } from "../utils/constants";

const Restaurantcard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, areaName } =
    resData?.info;
  const { deliveryTime } = resData?.info?.sla;
  if (!resData || !resData.info) {
    console.error("Invalid resdata:", resData);
    return null;
  }

  return (
    <div
      className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-slate-200"

    >
      <img
        className="res-logo h-52 w-60 rounded-lg object-cover"
        src={CDN_URL + cloudinaryImageId}
        alt="Restaurant Logo"
      />
      <h3 className="font-bold  py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{deliveryTime} minutes</h4>
      <h4>{areaName}</h4>
    </div>
  );
};

export default Restaurantcard;
