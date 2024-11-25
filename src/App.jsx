import { lazy, Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/common/Header.jsx";

// Lazy load components
const AboutUs = lazy(() => import("./pages/AboutUs.jsx"));
const Home = lazy(() => import("./components/home/Home.jsx"));
const PageNotFound = lazy(() => import("./pages/PageNotFound.jsx"));
const BookingPages = lazy(() => import("./pages/BookingPages.jsx"));
const TeamPage = lazy(() => import("./pages/TeamPage.jsx"));
const Testimonial = lazy(() => import("./pages/Testimonial.jsx"));
const ContactPages = lazy(() => import("./pages/ContactPages.jsx"));
const RoomPage = lazy(() => import("./pages/RoomPage.jsx"));
const ServicePage = lazy(() => import("./pages/ServicePage.jsx"));

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        {/* Suspense provides a fallback UI */}
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/*" element={<PageNotFound />} />
            <Route path="/booking" element={<BookingPages />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/testimonial" element={<Testimonial />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactPages />} />
            <Route path="/room" element={<RoomPage />} />
            <Route path="/services" element={<ServicePage />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
};

export default App;
