import React, { Component } from "react";
import { Box } from '@mui/material';
import { render } from "react-dom";
import { Navbar } from "./Navbar";
import { HomePage } from "./HomePage";
import { Footer } from "./Footer";

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Box width="400px">
                <HomePage />
                <Footer />
            </Box>
        );
    }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);
