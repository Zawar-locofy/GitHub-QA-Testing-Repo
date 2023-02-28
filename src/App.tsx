
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import AboutUs from "./Lcoc-pages/AboutUs";
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
      case "/service-responsive":
        title = "";
        metaDescription = "";
        break;
      case "/industries":
        title = "";
        metaDescription = "";
        break;
      case "/blogs":
        title = "";
        metaDescription = "";
        break;
      case "/application-development":
        title = "";
        metaDescription = "";
        break;
      case "/Loco-Home":
        title = "";
        metaDescription = "";
        break;
        /*This is a test Git Comment*/
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
    </Routes>
  );
}
export default App;
