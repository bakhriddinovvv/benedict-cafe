import { useState } from "react";
import Header from "./components/Header";
import Meal from "./components/Meal";
import Hamburger from "./components/Hamburger";
import Search from "./components/Search";
import "leaflet/dist/leaflet.css";
import MapComponent from "./components/MapContent";
import Order from "./components/Orders";
import Phone from "./components/Phone";
import MealItem from "./components/MealItems";
import MealInfo from "./components/MealInfo";
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchIsOpen, setSearchIsOpen] = useState(false);
  const [mapIsOpen, setMapIsOpen] = useState(false);
  const [order, setOrder] = useState(false);
  const [mealItem, setMealItem] = useState(false);
  const [phone, setPhone] = useState(false);
  const [mealInfo, setMealInfo] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const toggleSearch = () => {
    setSearchIsOpen(!searchIsOpen);
  };
  return (
    <>
      <Header
        setMapIsOpen={setMapIsOpen}
        mapIsOpen={mapIsOpen}
        toggleMenu={toggleMenu}
        toggleSearch={toggleSearch}
        setPhone={setPhone}
        setMealItem={setMealItem}
        mealItem={mealItem}
      />
      <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} setOrder={setOrder} />
      <Meal setMealInfo={setMealInfo} />
      <Search setSearchIsOpen={setSearchIsOpen} searchIsOpen={searchIsOpen} />
      <MapComponent mapIsOpen={mapIsOpen} setMapIsOpen={setMapIsOpen} />

      <Order order={order} setOrder={setOrder} />

      <Phone phone={phone} setPhone={setPhone} />
      <MealItem mealItem={mealItem} setMealItem={setMealItem} />
      <MealInfo mealInfo={mealInfo} setMealInfo={setMealInfo} />
    </>
  );
}

export default App;
