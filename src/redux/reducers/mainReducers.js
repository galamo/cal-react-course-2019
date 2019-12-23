
import ACTIONS from "../actions.config"
const initialState = { token: null }
export const reducer = mainReducers
function mainReducers(state = initialState, action) {
    const { type } = action
    if (!type) return;
    switch (type) {

        case ACTIONS.SAVE_TOKEN: {
            const { payload } = action;

            return { ...state, token: payload.token };
        }

        default: {
            return state;
        }
    }
}