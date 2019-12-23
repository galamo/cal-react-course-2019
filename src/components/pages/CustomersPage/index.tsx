import React from "react"

import { connect } from "react-redux"
import { GET_FLIGHTS } from "redux/asyncActions"

import store from "redux/store"


class CustomersPage extends React.Component<any, any>{
    componentDidMount() {
        store.dispatch(GET_FLIGHTS())
    }
    render() {
        const { flights = [] } = this.props;
        if (!flights.length) return null;
        return <div>
            <h1> Customers</h1>
            <table className="table">
                <thead>
                    <tr>
                        {getTrs(flights)}
                    </tr>
                </thead>
                <tbody>
                    {getTbody(flights)}
                </tbody>
            </table>
        </div>
    }
}
function getTrs(flights: Array<any>) {

    const [first] = flights;
    return Object.keys(first).map(key => <td>{key}</td>)
}

function getTbody(flights: Array<any>) {

    return flights.map(flight => <tr>{Object.values(flight).map((f: any) => <td>{JSON.stringify(f)}</td>)}</tr>)

}
function mapStateToProps(state: any) {
    return { flights: state.flightsReducers.flights }
}
function mapDispatchToProps(dispatch: any) {
    return {
        getFlights: dispatch(GET_FLIGHTS())
    }
}



export default connect(mapStateToProps, null)(CustomersPage)