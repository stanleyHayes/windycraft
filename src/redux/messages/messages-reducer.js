import {MESSAGES_ACTION_TYPES} from "./messages-action-types";

const INITIAL_STATE = {
    messageLoading: false,
    messageError: null,
    message: null
};

const messagesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case MESSAGES_ACTION_TYPES.CREATE_MESSAGE_REQUEST:
            return {
                ...state,
                messageError: null,
                messageLoading: true
            }

        case MESSAGES_ACTION_TYPES.CREATE_MESSAGE_SUCCESS:
            return {
                ...state,
                messageError: null,
                messageLoading: false,
                message: action.payload
            }

        case MESSAGES_ACTION_TYPES.CREATE_MESSAGE_FAIL:
            return {
                ...state,
                messageLoading: false,
                messageError: action.payload
            }
        default:
            return state;
    }
}

export const selectMessages = state => state.messages;

export default messagesReducer;
