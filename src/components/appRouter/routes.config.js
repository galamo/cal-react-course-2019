import React from "react";

import HomePage from "components/pages/Home";
import CountriesPage from "components/pages/countriesPage";
import LoginPage from "components/pages/Login";
import RegisterPage from "components/pages/Register";
import CountryPage from "components/pages/CountryPage";
import FlightsPage from "components/pages/FlightsPage"
import CustomersPage from "components/pages/CustomersPage";
import { withAuth } from "components/hoc/withAuth";
export const routes = [
    {
        visible: true,
        title: "Home",
        exact: true,
        path: "/",
        component: HomePage
    },
    {
        visible: true,
        title: "Countries",
        exact: true,
        path: "/countries",
        component: CountriesPage
    },
    { visible: true, title: "Login", path: "/login", component: LoginPage },
    {
        visible: true,
        title: "Register",
        path: "/register",
        component: RegisterPage
    },
    {
        visible: false,
        title: "Register",
        path: "/country/:code",
        component: CountryPage
    },
    {
        visible: true,
        title: "Flights",
        path: "/flights",
        component: (props) => {
            const RouteWithAuth = withAuth(FlightsPage);
            return <RouteWithAuth {...props} />
        }
    },
    {
        visible: true,
        title: "Customers",
        path: "/customers",
        component: CustomersPage
    }
    // { visible: false, path: "*", component: () => <h1>Not Found</h1> }, enable this will cause component render
];
