import React from "react";


import HomePage from "../pages/Home"
import CountriesPage from "../pages/countriesPage"
import LoginPage from "components/pages/Login";

export const routes = [
    { visible: true, title: "HomePage", exact: true, path: "/", component: HomePage },
    { visible: true, title: "CountriesPage", exact: true, path: "/countries", component: CountriesPage },
    { visible: true, title: "LoginPage", path: "/login", component: LoginPage },
    // { visible: false, path: "*", component: () => <h1>Not Found</h1> }, enable this will cause component render 

]