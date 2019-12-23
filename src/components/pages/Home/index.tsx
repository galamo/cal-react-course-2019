import React from "react"
import { useSelector } from "react-redux"
// const reduxState = useSelector((state: { token: string }) => state.token)

export default function HomePage() {
    const token = useSelector((state: { token: string }) => state.token)


    return <div className="container">
        <h1>
            Home component

            </h1>
        <span>
            {token}
        </span>
    </div>

}