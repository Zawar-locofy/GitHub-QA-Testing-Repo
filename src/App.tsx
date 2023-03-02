

import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import AboutUs from "./Lcoc-pages/AboutMeLocofy";
import ResponsiveContactUs from "./Lcoc-pages/HelloContatUS";
import LocoHome from "./Lcoc-pages/LocoHome";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/responsive-contact-us":
        title = "";
        metaDescription = "";
        break;
      case "/locohome":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<AboutUs />} />
      <Route path="/responsive-contact-us" element={<ResponsiveContactUs />} />
      <Route path="/locohome" element={<LocoHome />} />
    </Routes>
  );
}
export default App;