const INITIAL_STATE = {
    testimonials: [],
    testimonialError: null,
    testimonialLoading: false
};

const testimonialReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default testimonialReducer;
