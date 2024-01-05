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

const resObj = [
  {
    info: {
      id: "107827",
      name: "Asoka Restaurant",
      cloudinaryImageId: "fegei0e2nqd7svcdpwa0",
      locality: "Osmangunj",
      areaName: "Abids & Koti",
      costForTwo: "₹450 for two",
      cuisines: [
        "North Indian",
        "Chinese",
        "Hyderabadi",
        "Fast Food",
        "Tandoor",
        "Seafood",
        "Snacks",
      ],
      avgRating: 4,
      parentId: "19704",
      avgRatingString: "4.0",
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 34,
        lastMileTravel: 4,
        serviceability: "SERVICEABLE",
        slaString: "34 mins",
        lastMileTravelString: "4.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-11 00:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹100",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-807f6d9b-388f-412d-b7e6-76a691529c71",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/asoka-restaurant-osmangunj-abids-and-koti-hyderabad-107827",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "23596",
      name: "Angaara 5",
      cloudinaryImageId: "npu9n2pkxsawegspji1h",
      locality: "Dargah Road, Nampally",
      areaName: "Nampally",
      costForTwo: "₹400 for two",
      cuisines: ["Tandoor", "Biryani", "Chinese"],
      avgRating: 4.2,
      parentId: "5039",
      avgRatingString: "4.2",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 3.5,
        serviceability: "SERVICEABLE",
        slaString: "30 mins",
        lastMileTravelString: "3.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-04 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {},
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-807f6d9b-388f-412d-b7e6-76a691529c71",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/angaara-5-dargah-road-nampally-hyderabad-23596",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "74646",
      name: "Riyan Hotel",
      cloudinaryImageId: "wmnrzs0vet0nxnatecy2",
      locality: "Vijaya Nagar Colony",
      areaName: "Masab Tank",
      costForTwo: "₹300 for two",
      cuisines: ["Hyderabadi", "Mughlai", "Biryani", "Indian", "Chinese"],
      avgRating: 4,
      parentId: "19805",
      avgRatingString: "4.0",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 28,
        lastMileTravel: 4.4,
        serviceability: "SERVICEABLE",
        slaString: "28 mins",
        lastMileTravelString: "4.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-11 00:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹100",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-807f6d9b-388f-412d-b7e6-76a691529c71",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/riyan-hotel-vijaya-nagar-colony-masab-tank-hyderabad-74646",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "43958",
      name: "Hotel Sohail Waves",
      cloudinaryImageId: "rye3innblprtcjmxsn45",
      locality: "Officers Colony",
      areaName: "Chanchalguda",
      costForTwo: "₹500 for two",
      cuisines: ["Arabian", "Tandoor", "Mughlai", "Biryani", "North Indian"],
      avgRating: 4.3,
      parentId: "18995",
      avgRatingString: "4.3",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 36,
        lastMileTravel: 5.8,
        serviceability: "SERVICEABLE",
        slaString: "36 mins",
        lastMileTravelString: "5.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-05 00:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹100",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-807f6d9b-388f-412d-b7e6-76a691529c71",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/hotel-sohail-waves-officers-colony-chanchalguda-hyderabad-43958",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "416258",
      name: "Arabian shawarma Burger",
      cloudinaryImageId: "dd504e757ecdcc4c025ee2b03325c371",
      locality: "Somajiguda & Khairtabad",
      areaName: "Nampally",
      costForTwo: "₹150 for two",
      cuisines: ["Arabian", "Lebanese"],
      avgRating: 4.3,
      parentId: "231580",
      avgRatingString: "4.3",
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 39,
        lastMileTravel: 3.9,
        serviceability: "SERVICEABLE",
        slaString: "39 mins",
        lastMileTravelString: "3.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-04 06:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {},
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-807f6d9b-388f-412d-b7e6-76a691529c71",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/arabian-shawarma-burger-somajiguda-and-khairtabad-nampally-hyderabad-416258",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "10251",
      name: "Amay Tiffin Corner (Amul)",
      cloudinaryImageId: "y4nkk1dilwvytyzu2tte",
      locality: "Tilak Road",
      areaName: "King Koti",
      costForTwo: "₹100 for two",
      cuisines: ["South Indian"],
      avgRating: 4.2,
      veg: true,
      parentId: "31052",
      avgRatingString: "4.2",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 52,
        lastMileTravel: 2.7,
        serviceability: "SERVICEABLE",
        slaString: "52 mins",
        lastMileTravelString: "2.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-04 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-807f6d9b-388f-412d-b7e6-76a691529c71",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/amay-tiffin-corner-amul-tilak-road-king-koti-hyderabad-10251",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "28990",
      name: "Krupa Mess & tiffins",
      cloudinaryImageId: "tzyqy2ovy09e9y7hjyqq",
      locality: "JN road",
      areaName: "Koti",
      costForTwo: "₹200 for two",
      cuisines: ["South Indian"],
      avgRating: 3.7,
      veg: true,
      parentId: "4086",
      avgRatingString: "3.7",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 69,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "69 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-04 23:59:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-807f6d9b-388f-412d-b7e6-76a691529c71",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/krupa-mess-and-tiffins-jn-road-koti-hyderabad-28990",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "16158",
      name: "Royal Tiffin Centre",
      cloudinaryImageId: "xxvnkzmpgmbojcakxws4",
      locality: "Hanuman Tekdi",
      areaName: "Koti",
      costForTwo: "₹150 for two",
      cuisines: ["South Indian"],
      avgRating: 4,
      veg: true,
      parentId: "4621",
      avgRatingString: "4.0",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 57,
        lastMileTravel: 2.7,
        serviceability: "SERVICEABLE",
        slaString: "57 mins",
        lastMileTravelString: "2.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-04 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹100",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-807f6d9b-388f-412d-b7e6-76a691529c71",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/royal-tiffin-centre-hanuman-tekdi-koti-hyderabad-16158",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "661672",
      name: "Hotel City Diamond",
      cloudinaryImageId: "b328134beb7b0f5fe017b0cbf3515595",
      locality: "Jagadamba Nagar",
      areaName: "Asif Nagar",
      costForTwo: "₹250 for two",
      cuisines: ["Indian", "Biryani"],
      avgRating: 4.2,
      parentId: "462857",
      avgRatingString: "4.2",
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 58,
        lastMileTravel: 6.1,
        serviceability: "SERVICEABLE",
        slaString: "58 mins",
        lastMileTravelString: "6.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-05 04:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-807f6d9b-388f-412d-b7e6-76a691529c71",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/hotel-city-diamond-jagadamba-nagar-asif-nagar-hyderabad-661672",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
];

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
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          resdata.info.cloudinaryImageId
        }
        alt="Restaurant Logo"
      />
      <h3>{resdata.info.name}</h3>
      <h4>{resdata.info.cuisines.join(", ")}</h4>
      <h4>{resdata.info.avgRating}</h4>
      <h4>{resdata.info.sla.deliveryTime} minutes</h4>
    </div>
  );
};

const Body = () => {
  console.log("resObj", resObj); // Log resObj to check its structure
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resObj.map((restaurant) => (
          <Restaurantcard key={restaurant.info.id} resdata={restaurant} />
        ))}
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
