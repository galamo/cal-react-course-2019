import React from "react"
import { useSelector } from "react-redux"
import CountriesList from "../countriesPage/countriesList"
// const reduxState = useSelector((state: { token: string }) => state.token)

export default function HomePage() {
    const { favorites } = useSelector((state: any) => {
        return state.favoritesReducers
    })
    return <div className="container">
        <h1>
            Home component
            </h1>
        <span>
            <CountriesList countries={favorites} />
        </span>
    </div>

}