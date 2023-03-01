import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import LocoHome from "./pages/Lcoc-pages/LocoHome";
import AboutUs from "./pages/Lcoc-pages/AboutLocoFY";
import ResponsiveContactUs from "./pages/Lcoc-pages/ResponsiveContactUs";
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
      case "/about-us":
        title = "";
        metaDescription = "";
        break;
      case "/responsive-contact-us":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<LocoHome />} />

      <Route path="/about-us" element={<AboutUs />} />

      <Route path="/responsive-contact-us" element={<ResponsiveContactUs />} />
    </Routes>
  );
}
export default App;
