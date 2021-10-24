import './App.css';
import {Route, Switch, useRouteMatch} from "react-router-dom";
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
import ScrollToTop from "./components/shared/scroll-to-top";

function App() {

    const dispatch = useDispatch();
    const {path} = useRouteMatch();

    useEffect(() => {
        if (path)
            dispatch(UI_ACTION_CREATORS.changeActivePath(path))
    }, [dispatch, path]);

    return (
        <ScrollToTop>
            <Switch>
                <Route path="/" exact={true} component={HomePage}/>
                <Route path="/services" exact={true} component={ServicesPage}/>
                <Route path="/about" exact={true} component={AboutPage}/>
                <Route path="/contact" exact={true} component={ContactPage}/>
                <Route path="/portfolio" exact={true} component={PortfolioPage}/>
                <Route path="/testimonials" exact={true} component={TestimonialsPage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </ScrollToTop>
    );
}

export default App;
