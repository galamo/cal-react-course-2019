import React, { useState, useEffect } from "react"
import { Redirect } from "react-router-dom"
import axios from "axios"
export const withAuth = (WrappedComponent: any) => {
    return function (props: any) {
        const [status, setStatus] = useState("loading")

        useEffect(() => {
            const verify = async () => {
                const result = await axios.get("http://localhost:3200/auth/verify", {
                    headers: { authorization: localStorage.getItem("token") }
                })
                const { data } = result;
                const { status } = data;
                setStatus(status)
            }
            verify()
        }, [])

        if (!status) return <Redirect to="/login" />
        if (status === "loading") return <div className="loader"></div>
        return <WrappedComponent {...props} />
    }
}