import Navbar from "./Navbar";
import Footer from "./Footer";
export default function PageShell({ children }) { return <div className="app overflow-hidden"><Navbar />{children}<Footer /></div>; }
