import './App.css';
import {Route, useParams} from "react-router-dom";
import HomePage from "./pages/home/home-page";
import NotFoundPage from "./pages/404/404-page";
import TestimonialsPage from "./pages/testimonials/testimonials-page";
import PortfolioPage from "./pages/portfilio/portfolio-page";
import ContactPage from "./pages/contact/contact-page";
import AboutPage from "./pages/about/about-page";
import ServicesPage from "./pages/services/services-page";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {UI_ACTION_CREATORS} from "./redux/ui/ui-action-creators";
import {Routes} from "react-router";

function App() {

    const dispatch = useDispatch();
    const {path} = useParams();

    useEffect(() => {
        if (path)
            dispatch(UI_ACTION_CREATORS.changeActivePath(path))
    }, [dispatch, path]);

    return (
        <Routes>
            <Route path="/" exact={true} element={<HomePage/>}/>
            <Route path="/services" exact={true} element={<ServicesPage/>}/>
            <Route path="/about" exact={true} element={<AboutPage/>}/>
            <Route path="/contact" exact={true} element={<ContactPage/>}/>
            <Route path="/portfolio" exact={true} element={<PortfolioPage/>}/>
            <Route path="/testimonials" exact={true} element={<TestimonialsPage/>}/>
            <Route element={<NotFoundPage/>}/>
        </Routes>
    );
}

export default App;
