import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Opinions from "./components/Opinions.jsx";
import Home from "./components/pages/Home.jsx";
import About from "./components/pages/About.jsx";
import GalleryContainer from "./components/pages/galleries/with-dynamic-paths/GalleryContainer.jsx";
import Offer from "./components/pages/Offer.jsx";
import Contact from "./components/pages/Contact.jsx";
import GalleryWithModal from "./components/pages/galleries/with-modal/GalleryWithModal.jsx";

function App() {
    return (
        <Router>
            <div className="app-container">
                <Navbar />
                <div className="main-content">
                    <Routes>
                        <Route path={"/"} element={<Home />} />
                        <Route path={"/about"} element={<About />} />
                        {/*<Route path={"/gallery"} element={<GalleryContainer />} />*/}
                        <Route path={"/gallery"} element={<GalleryWithModal />} />
                        <Route path={"/offer"} element={<Offer />} />
                        <Route path={"/contact"} element={<Contact />} />
                    </Routes>
                </div>
                {/*<Opinions />*/}
                {/*<Sidebar />*/}
            </div>
        </Router>
    );
}

export default App;
