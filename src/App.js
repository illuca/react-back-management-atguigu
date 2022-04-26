import React, {Component} from 'react';
import {Button, message} from "antd";
import "./App.less"
import {NavLink, Route, Routes} from "react-router-dom";
import Login from "./pages/Login";

function App(props) {
    function handleClick() {
        message.success("被点击了")
    }

    return (
        <div>
            <NavLink to={"/login"}>login</NavLink>
            <Routes>
                <Route path={"/login"} element={<Login/>}></Route>
            </Routes>
        </div>
    );
}

export default App;