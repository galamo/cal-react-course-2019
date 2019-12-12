import React from "react";


import HomePage from "components/pages/Home"
import CountriesPage from "components/pages/countriesPage"
import LoginPage from "components/pages/Login";
import RegisterPage from "components/pages/Register";
import CountryPage from "components/pages/CountryPage";

export const routes = [
    { visible: true, title: "HomePage", exact: true, path: "/", component: HomePage },
    { visible: true, title: "CountriesPage", exact: true, path: "/countries", component: CountriesPage },
    { visible: true, title: "LoginPage", path: "/login", component: LoginPage },
    { visible: true, title: "RegisterPage", path: "/register", component: RegisterPage },
    { visible: false, title: "RegisterPage", path: "/country/:code", component: CountryPage },
    // { visible: false, path: "*", component: () => <h1>Not Found</h1> }, enable this will cause component render 

]