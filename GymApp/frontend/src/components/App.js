// App structure
import React, { Component } from "react";
import { Box } from '@mui/material';
import { Navbar } from "./Navbar";
import { HomePage } from "./HomePage";


export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Box width="100%">
                <Navbar />
                <HomePage />
            </Box>
        );
    }
}
