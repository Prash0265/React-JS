
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  //const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   const data = await fetch(MENU_URL + resId);
  //   const json = await data.json();
  //   console.log("PK JSON", json);
  //   setResInfo(json.data);
  // };
  if (resInfo === null) return <Shimmer />;
 // console.log("resInfo:", resInfo);
  const { name, cuisines, areaName } = resInfo?.cards[0]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{areaName}</h4>
      <h1>Menu</h1>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - {"Rs"} {item.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
