import {combineReducers} from "redux";
import uiReducer from "./ui/ui-reducer";
import testimonialReducer from "./testimonials/testimonial-reducer";
import serviceReducer from "./services/service-reducer";
import teamReducer from "./team/team-reducer";
import valueReducer from "./values/value-reducer";
import processReducer from "./process/process-reducer";
import clientReducer from "./clients/client-reducer";
import portfolioReducer from "./portfolio/portfolio-reducer";
import faqReducer from "./faqs/faq-reducer";

const rootReducer = combineReducers({
    ui: uiReducer,
    testimonials: testimonialReducer,
    services: serviceReducer,
    teams: teamReducer,
    values: valueReducer,
    processes: processReducer,
    clients: clientReducer,
    portfolio: portfolioReducer,
    faqs: faqReducer
});

export default rootReducer;
