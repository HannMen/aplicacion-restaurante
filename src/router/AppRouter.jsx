import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import GeneralInfo from "../pages/GeneralInfo";
import Reservations from "../pages/Reservations";
import Blog from "../pages/Blog";
import ContactUs from "../pages/ContactUs";

const AppRouter = () => {
  return (
    <>
      <Router>
        <div className="container"></div>
        <Routes>
          <Route path="/" element={<GeneralInfo />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contactus" element={<ContactUs />} />

          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </>
  );
};

export default AppRouter;
