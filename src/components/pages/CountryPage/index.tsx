import React, { useEffect, useState } from "react"
import axiosCountries from "asyncService/axiosCountries"

export default function CountryPage(props: any) {
    const { params } = props.match

    const [country, setCountry] = useState({})
    const [counter, setCounter] = useState(0)
    const [code, setCode] = useState(params.code)
    // navigate to countries

    useEffect(() => {
        async function getCountry() {
            if (code) {
                try {
                    const { data } = await axiosCountries.get(`/alpha/${code}`);
                    setCountry(data)
                } catch (ex) {
                    setCountry({ message: ex.message })
                }

            }

        }
        getCountry();
    }, [code])

    return <div>
        <h1> Country page... </h1>
        <div> {JSON.stringify(country)} </div>
        alpha3code:  <input value={code} onChange={(e) => {
            setCode(e.target.value)
        }} />
        <h2> {counter} </h2>
        <button className="btn btn-primary" onClick={() => {
            setCounter(counter + 1)
        }} > test </button>
    </div>
}