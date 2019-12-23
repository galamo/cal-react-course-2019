import { axiosFlights } from "asyncService/axiosCountries"
import { GET_FLIGHTS_SUCCESS } from "./actions"
export const GET_FLIGHTS = () => {
    return async function (dispatch: any) {
        {
            // dispatch pending action
            try {
                const { data } = await axiosFlights.get("/flights");
                const { flights } = data;
                console.log(flights)
                dispatch(GET_FLIGHTS_SUCCESS({ flights }))
                // dispatch success action
            } catch (ex) {
                // dispatch error action
            }
        }
    }
}