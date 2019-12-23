import ACTIONS from "./actions.config"

export const SAVE_TOKEN = (payload: { token: string }) => {
    return {
        type: ACTIONS.SAVE_TOKEN,
        payload
    }
}

export const ADD_TO_FAVORITES = (payload: { country: any }) => {
    return {
        type: ACTIONS.ADD_TO_FAVORITES,
        payload
    }
}

export const GET_FLIGHTS_SUCCESS = (payload: { flights: Array<any> }) => {
    return {
        type: ACTIONS.GET_FLIGHTS_SUCCESS,
        payload
    }
}
