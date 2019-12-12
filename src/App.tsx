import React from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderTS from './components/ui-components/headerts';
import CalNavbar from './components/ui-components/navbar';
import CountriesPage from 'components/pages/countriesPage';

// import 1 - default 
// import explicitly HeaderApp
const App: React.FC = () => {
    return (
        <div className="container">
            <CalNavbar />
            {/* <HeaderTS title={"Header"} color="yellow" /> */}
            <CountriesPage />
        </div>
    );
}

export default App;
