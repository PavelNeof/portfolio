import './App.css';
import Header from "./Header/Header";
import Main from "./Main/Main";
import React from "react";
import Skills from "./Skills/Skills";
import Works from "./Works/Works";
import Distant from "./Distant/Distant";
import Contacts from './Contacts/Contacts'
import Footer from "./Footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Works />
           {/* <Distant />*/}
            <Contacts />
            <Footer/>
        </div>
    );
}

export default App;
