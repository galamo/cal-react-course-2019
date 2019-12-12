import React from "react"
import data from "data.json"
import HeaderTS from "components/ui-components/headerts"
import CountriesList from "components/pages/countriesPage/countriesList"
import axios from "axios"
import axiosInstance from "asyncService/axiosCountries";
import Filters from "./filters"
import { withLoading } from "components/hoc/withLoading"

interface IState {
    [key: string]: any
    countries: Array<any>
    selectedCountry: string,
    filters: { country: string, region: string, hasBorders: boolean }
}

export default class CountriesPage extends React.Component<any, IState>{

    constructor(props: any) {
        super(props)
        this.state = {
            countries: [], selectedCountry: "",
            filters: { country: "", region: "", hasBorders: false }
        }
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
        const CountriesListWithLoading = withLoading(filteredCountries.length)(CountriesList)
        // if (!filteredCountries.length) return <div className="loader"></div>
        return <div>

            <HeaderTS title={this.state.selectedCountry} color="white" />
            <Filters onChangeInput={this.onChangeInput} filters={this.state.filters} />

            <CountriesListWithLoading selectCountry={this.selectCountry} countries={filteredCountries} />
        </div>
    }


}