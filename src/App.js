import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import ApplicationDevelopment from "./pages/application-development";
import ServiceResponsive from "./pages/service-responsive";
import Industries from "./pages/industries";
import Blogs from "./pages/blogs";
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
      <Route path="/" element={<ApplicationDevelopment />} />

      <Route path="/service-responsive" element={<ServiceResponsive />} />

      <Route path="/industries" element={<Industries />} />

      <Route path="/blogs" element={<Blogs />} />
    </Routes>
  );
}
export default App;
