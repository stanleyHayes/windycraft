import {TESTIMONIAL_ACTION_TYPES} from "./testimonial-action-types";
import axios from "axios";
import {CONSTANTS} from "../../constants/constants";

const createTestimonialRequest = () => {
    return {
        type: TESTIMONIAL_ACTION_TYPES.CREATE_TESTIMONIAL_REQUEST
    }
}

const createTestimonialSuccess = message => {
    return {
        type: TESTIMONIAL_ACTION_TYPES.CREATE_TESTIMONIAL_SUCCESS,
        payload: message
    }
}

const createTestimonialFailure = message => {
    return {
        type: TESTIMONIAL_ACTION_TYPES.CREATE_TESTIMONIAL_FAIL,
        payload: message
    }
}

const createTestimonial = (testimonial, handleClose) => {
    return async dispatch => {
        try {
            dispatch(createTestimonialRequest());
            const response = await axios({
                method: 'POST',
                url: `${CONSTANTS.SERVER_BASE_URL}/testimonials`,
                data: testimonial
            });
            const {message} = response.data;
            dispatch(createTestimonialSuccess(message));
            handleClose();
        }catch (e) {
            const {message} = e.response.data;
            dispatch(createTestimonialFailure(message));
        }
    }
}


const getTestimonialsRequest = () => {
    return {
        type: TESTIMONIAL_ACTION_TYPES.GET_TESTIMONIALS_REQUEST
    }
}

const getTestimonialsSuccess = testimonials => {
    return {
        type: TESTIMONIAL_ACTION_TYPES.GET_TESTIMONIALS_SUCCESS,
        payload: testimonials
    }
}

const getTestimonialsFailure = message => {
    return {
        type: TESTIMONIAL_ACTION_TYPES.GET_TESTIMONIALS_FAIL,
        payload: message
    }
}

const getTestimonials = () => {
    return async dispatch => {
        try {
            dispatch(getTestimonialsRequest());
            const response = await axios({
                method: 'GET',
                url: `${CONSTANTS.SERVER_BASE_URL}/testimonials`
            });
            const {message} = response.data;
            dispatch(getTestimonialsSuccess(message));
        }catch (e) {
            const {message} = e.response.data;
            dispatch(getTestimonialsFailure(message));
        }
    }
}


export const TESTIMONIAL_ACTION_CREATORS = {createTestimonial, getTestimonials};
