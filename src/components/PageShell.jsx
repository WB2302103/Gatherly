import Navbar from "./Navbar";
import Footer from "./Footer";
export default function PageShell({ children }) { return <div className="app"><Navbar />{children}<Footer /></div>; }
