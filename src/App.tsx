import React from 'react';
import logo from './logo.svg';
import './App.css';
import CalNavbar from './components/ui-components/navbar';
import { Switch, BrowserRouter } from "react-router-dom"
import AppRouter from "components/appRouter";

// import 1 - default 
// import explicitly HeaderApp
const App: React.FC = () => {
    return (
        <div className="container">
            <BrowserRouter>
                <CalNavbar />
                <Switch>
                    <AppRouter />
                </Switch>
            </BrowserRouter>

        </div>
    );
}

export default App;
