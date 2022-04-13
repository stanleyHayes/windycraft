import {QUOTES_ACTION_TYPES} from "./quote-action-types";

const INITIAL_STATE = {
    quoteLoading: false,
    quoteError: null,
    message: null
};

const quoteReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case QUOTES_ACTION_TYPES.CREATE_QUOTE_REQUEST:
            return {
                ...state,
                quoteError: null,
                quoteLoading: true
            }

        case QUOTES_ACTION_TYPES.CREATE_QUOTE_SUCCESS:
            return {
                ...state,
                quoteError: null,
                quoteLoading: false,
                message: action.payload
            }

        case QUOTES_ACTION_TYPES.CREATE_QUOTE_FAIL:
            return {
                ...state,
                quoteLoading: false,
                quoteError: action.payload
            }
        default:
            return state;
    }
}

export const selectQuotes = state => state.quotes;

export default quoteReducer;
