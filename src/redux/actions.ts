import ACTIONS from "./actions.config"

export const SAVE_TOKEN = (payload: { token: string }) => {
    return {
        type: ACTIONS.SAVE_TOKEN,
        payload
    }
}