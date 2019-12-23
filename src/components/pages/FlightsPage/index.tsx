import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { GET_FLIGHTS } from "redux/asyncActions"

export default function FlightsPage(props: any) {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(GET_FLIGHTS())
    }, [])
    const { flights } = useSelector((state: any) => state.flightsReducers)
    // console.log(flightsReducers)
    // const { flights } = flightsReducers
    if (!flights.length) return <h2>loading...</h2>
    return <div> <h1 className="jumbotron">Flights</h1>
        <div>
            {flights.map((flight: any) => <> <div style={{ border: "1px solid black", marginTop: "10px" }}><h2>{flight.from} </h2> <h2>{flight.to} </h2></div></>)}
        </div>
    </div>
} 