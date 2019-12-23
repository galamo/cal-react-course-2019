
import ACTIONS from "../actions.config"
import actionsConfig from "../actions.config";
const initialState = { flights: [] }

export const reducer = flightsReducers
function flightsReducers(state = initialState, action) {
    const { type } = action
    if (!type) return;
    switch (type) {

        default: {
            return state;
        }
    }
}