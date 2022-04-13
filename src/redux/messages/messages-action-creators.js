import axios from "axios";
import {CONSTANTS} from "../../constants/constants";
import {MESSAGES_ACTION_TYPES} from "./messages-action-types";

const createMessageRequest = () => {
    return {
        type: MESSAGES_ACTION_TYPES.CREATE_MESSAGE_REQUEST
    }
}

const createMessageSuccess = message => {
    return {
        type: MESSAGES_ACTION_TYPES.CREATE_MESSAGE_SUCCESS,
        payload: message
    }
}

const createMessageFailure = message => {
    return {
        type: MESSAGES_ACTION_TYPES.CREATE_MESSAGE_FAIL,
        payload: message
    }
}

const createMessage = (message) => {
    return async dispatch => {
        try {
            dispatch(createMessageRequest());
            const response = await axios({
                method: 'POST',
                url: `${CONSTANTS.SERVER_BASE_URL}/messages`,
                data: message
            });
            const {message: m} = response.data;
            dispatch(createMessageSuccess(m));
        }catch (e) {
            const {message} = e.response.data;
            dispatch(createMessageFailure(message));
        }
    }
}


export const MESSAGES_ACTION_CREATORS = {createMessage};
