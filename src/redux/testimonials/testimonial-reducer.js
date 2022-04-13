import {testimonials} from "./testimonial-data";
import {TESTIMONIAL_ACTION_TYPES} from "./testimonial-action-types";

const INITIAL_STATE = {
    testimonials: [...testimonials],
    testimonialError: null,
    testimonialLoading: false,
    testimonialMessage: null
};

const testimonialReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TESTIMONIAL_ACTION_TYPES.CREATE_TESTIMONIAL_REQUEST:
            return {
                ...state,
                testimonialError: null,
                testimonialLoading: true
            }

        case TESTIMONIAL_ACTION_TYPES.CREATE_TESTIMONIAL_SUCCESS:
            return {
                ...state,
                testimonialError: null,
                testimonialLoading: false,
                testimonialMessage: action.payload
            }

        case TESTIMONIAL_ACTION_TYPES.CREATE_TESTIMONIAL_FAIL:
            return {
                ...state,
                testimonialError: action.payload,
                testimonialLoading: false,
                testimonialMessage: action.payload
            }


        case TESTIMONIAL_ACTION_TYPES.GET_TESTIMONIALS_REQUEST:
            return {
                ...state,
                testimonialError: null,
                testimonialLoading: true
            }

        case TESTIMONIAL_ACTION_TYPES.GET_TESTIMONIALS_SUCCESS:
            return {
                ...state,
                testimonialError: null,
                testimonialLoading: false,
                testimonials: action.payload,
            }

        case TESTIMONIAL_ACTION_TYPES.GET_TESTIMONIALS_FAIL:
            return {
                ...state,
                testimonialError: action.payload,
                testimonialLoading: false,
                testimonialMessage: action.payload
            }
        default:
            return state;
    }
}


export const selectTestimonials = state => state.testimonials;

export default testimonialReducer;
