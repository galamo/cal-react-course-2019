import React from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderTS from './components/ui-components/headerts';

// import 1 - default 
// import explicitly HeaderApp
const App: React.FC = () => {
    return (
        <div className="App">

            <HeaderTS title={"This is app"} color="green" />
        </div>
    );
}

export default App;
