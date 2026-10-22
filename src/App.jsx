import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Events from "./pages/Events";
import EventDetails from "./pages/EventDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Auth from "./pages/Auth";

export default function App() {
  return <BrowserRouter><Routes>
    <Route path="/" element={<Home />} /><Route path="/events" element={<Events />} />
    <Route path="/events/:eventTitle" element={<EventDetails />} /><Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} /><Route path="/login" element={<Auth mode="login" />} />
    <Route path="/signup" element={<Auth mode="signup" />} /><Route path="*" element={<Home />} />
  </Routes></BrowserRouter>;
}
