import React from 'react';
import {BrowserRouter, BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Main from './pages/Main';
// import Chart from './pages/Chart';
// import History from './pages/History';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
            <Navbar/>
            <Routes>
            <Route index element={<Main/>}/>
            <Route path="/main" element={<Main/>} />
            {/*<Route path="/chart" component={Chart} />*/}
            {/*<Route path="/history" component={History} />*/}
            </Routes>
            <Footer/>
            </BrowserRouter>
        </div>
    );
}

export default App;
