
import ACTIONS from "../actions.config"
const initialState = { userName: "Gal" }

export const reducer = userReducers
function userReducers(state = initialState, action) {
    const { type } = action
    if (!type) return;
    switch (type) {

        default: {
            return state;
        }
    }
}