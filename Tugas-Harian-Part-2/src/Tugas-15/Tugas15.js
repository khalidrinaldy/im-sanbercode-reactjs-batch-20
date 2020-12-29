import Tugas9 from '../Tugas-9/Tugas9';
import Tugas10 from '../Tugas-10/Tugas10';
import Tugas11 from '../Tugas-11/Tugas11';
import Tugas12 from '../Tugas-12/Tugas12';
import Tugas13 from '../Tugas-13/Tugas13';
import Main from '../Tugas-14/Main';
import {ThemeContext} from './ThemeContext';
import React, {useState, useEffect, useContext} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

let dataHargaBuah = [
    {nama: "Semangka", harga: 10000, berat: 1000},
    {nama: "Anggur", harga: 40000, berat: 500},
    {nama: "Strawberry", harga: 30000, berat: 400},
    {nama: "Jeruk", harga: 30000, berat: 1000},
    {nama: "Mangga", harga: 30000, berat: 500},
];

const Tugas15 = () => {
    const [theme, setTheme] = useContext(ThemeContext);

    const handleTheme = () => {
        if (theme == "dark") {
            setTheme("light");
        } else {
            setTheme("dark");
        }
    }
    return (
        <Router>
            <div className="navbar" style={theme == "dark" ? {backgroundColor: "#616e87"} : {backgroundColor: "#c5e4fc"}}>
                <ul>
                    <li>
                        <Link to="/tugas9">Tugas-9</Link>
                    </li>
                    <li>
                        <Link to="/tugas10">Tugas-10</Link>
                    </li>
                    <li>
                        <Link to="/tugas11">Tugas-11</Link>
                    </li>
                    <li>
                        <Link to="/tugas12">Tugas-12</Link>
                    </li>
                    <li>
                        <Link to="/tugas13">Tugas-13</Link>
                    </li>
                    <li>
                        <Link to="/tugas14">Tugas-14</Link>
                    </li>
                </ul>
                <button className="change-theme" onClick={handleTheme}>Toggle Theme</button>
            </div>
            <Switch>
                <Route exact path="/tugas9">
                    <Tugas9 />
                </Route>
                <Route exact path="/tugas10">
                    <Tugas10 dataHargaBuah={dataHargaBuah}/>
                </Route>
                <Route exact path="/tugas11">
                    <Tugas11 />
                </Route>
                <Route exact path="/tugas12">
                    <Tugas12 />
                </Route>
                <Route exact path="/tugas13">
                    <Tugas13 />
                </Route>
                <Route exact path="/tugas14">
                    <Main />
                </Route>
            </Switch>
        </Router>
    )
}

export default Tugas15;