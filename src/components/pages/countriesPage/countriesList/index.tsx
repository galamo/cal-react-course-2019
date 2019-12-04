import React from "react"
import data from "data.json"
import CountryCard from "../countryCard"

interface IProps {
    countries: Array<any>,
    selectCountry: Function
}
export default class CountriesList extends React.Component<IProps, any>{

    render() {
        return <div className="row">
            {this.props.countries.map((country: any, index: number) => {
                return <CountryCard selectCountry={this.props.selectCountry} {...country} index={index} />
            })}
        </div>
    }


}