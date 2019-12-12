import React from "react";
import data from "data.json";
import HeaderTS from "components/ui-components/headerts";
import CountriesList from "components/pages/countriesPage/countriesList";
import Filters from "./Filters";

export default class CountriesPage extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { countries: data, selectedCountry: "" };
  }

  selectCountry = (selectedCountry: string) => {
    this.setState({ selectedCountry });
  };

  render() {
    return (
      <div>
        <HeaderTS title={this.state.selectedCountry} color="white" />
        <Filters />
        <CountriesList
          selectCountry={this.selectCountry}
          countries={this.state.countries}
        />
      </div>
    );
  }
}
