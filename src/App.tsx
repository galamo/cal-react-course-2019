import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/ui-components/header"
import HeaderTS from './components/ui-components/headerts';

// import 1 - default 
// import explicitly HeaderApp
const App: React.FC = () => {
    return (
        <div className="App">
            {/* <Header title="This is Header app" color="orange" />
            <Header /> */}
            <HeaderTS title={"This is app"} color="green" />
        </div>
    );
}

export default App;
