import React from "react"
import data from "data.json"
import HeaderTS from "components/ui-components/headerts"
import CountriesList from "components/pages/countriesPage/countriesList"
import axios from "axios"
import axiosInstance from "../../../asyncService/axiosCountries";
import Filters from "./filters"

interface IState {
    [key: string]: any
    countries: Array<any>
    selectedCountry: string,
    filters: { country: string, region: string }
}

export default class CountriesPage extends React.Component<any, any>{

    constructor(props: any) {
        super(props)
        this.state = { countries: [], selectedCountry: "", filters: { country: "", region: "" } }
    }

    onChangeInput = (e: any) => {
        const { name, value } = e.target
        const { filters } = this.state
        this.setState({ ...this.state, filters: { ...filters, [name]: value } })
    }



    async componentDidMount() {
        try {
            const { data } = await axiosInstance.get("/all")
            this.setState({ countries: data })
        } catch (ex) {
            this.setState({ countries: [] })
        }
    }
    selectCountry = (selectedCountry: string) => {
        this.setState({ selectedCountry })
    }

    filterCountries = () => {
        const { filters, countries } = this.state;
        const { country: countryFilter, region: regionFilter } = filters;
        if (!countryFilter && !regionFilter) return countries
        return countries.filter((country: any) => {
            const isCountryName = country.name.toLowerCase().includes(countryFilter.toLowerCase())
            const isRegionName = country.region.toLowerCase().includes(regionFilter.toLowerCase())
            return isCountryName && isRegionName;

        })
    }

    render() {
        const filteredCountries = this.filterCountries()
        return <div>
            <span> {this.state.filters.country} </span>
            <span> {this.state.filters.region} </span>
            <HeaderTS title={this.state.selectedCountry} color="white" />
            <Filters onChangeInput={this.onChangeInput} filters={this.state.filters} />
            <CountriesList selectCountry={this.selectCountry} countries={filteredCountries} />
        </div>
    }


}