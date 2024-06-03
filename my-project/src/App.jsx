import { useState } from "react";
import Header from "./components/Header";
import Meal from "./components/Meal";
import Hamburger from "./components/Hamburger";
import Search from "./components/Search";
import "leaflet/dist/leaflet.css";
import MapComponent from "./components/MapContent";
import About from "./components/About";
import Informations from "./components/Informations";
import Order from "./components/Orders";
import Location from "./components/Location";
import Notification from "./components/Notification";
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchIsOpen, setSearchIsOpen] = useState(false);
  const [mapIsOpen, setMapIsOpen] = useState(false);
  const [aboutIsOpen, setAboutIsOpen] = useState(false);
  const [info, setInfo] = useState(false);
  const [order, setOrder] = useState(false);
  const [location, setLocation] = useState(false);
  const [notification, setNotification] = useState(false);

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
      />
      <Hamburger
        setAboutIsOpen={setAboutIsOpen}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        setInfo={setInfo}
        setOrder={setOrder}
        setLocation={setLocation}
        setNotification={setNotification}
      />
      <Meal />
      <Search setSearchIsOpen={setSearchIsOpen} searchIsOpen={searchIsOpen} />
      <MapComponent mapIsOpen={mapIsOpen} setMapIsOpen={setMapIsOpen} />
      <About aboutIsOpen={aboutIsOpen} setAboutIsOpen={setAboutIsOpen} />
      <Informations info={info} setInfo={setInfo} />
      <Order order={order} setOrder={setOrder} />
      <Location
        location={location}
        setLocation={setLocation}
        setMapIsOpen={setMapIsOpen}
      />
      <Notification
        notification={notification}
        setNotification={setNotification}
      />
    </>
  );
}

export default App;
