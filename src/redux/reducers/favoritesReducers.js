
import ACTIONS from "../actions.config"
import actionsConfig from "../actions.config";
const initialState = { favorites: [] }
// state = initialState || store state
export const reducer = favoritesReducers
 function favoritesReducers(state = initialState, action) {
    const { type } = action
    if (!type) return;
    switch (type) {

        case actionsConfig.ADD_TO_FAVORITES: {
            const { payload } = action
            return { ...state, favorites: [...state.favorites, { ...payload.country, buttons: true }] }
        }
        default: {
            return state;
        }
    }
}