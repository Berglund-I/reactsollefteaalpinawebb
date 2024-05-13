import React from "react";
import { Link } from 'react-router-dom';
import FacebookComponent from "../components/FacebookComponent";
import SidebarComponent from "../components/SidebarComponent";
import MainNavComponent from "../components/MainNavComponent";
import Grid from '@mui/material/Grid';

function HomePage(){
    return (
        <div className="App">

                        <h1>
                            Välkommen till Sollefteå alpina
                        </h1>

                        <div>
                            <FacebookComponent/>
                        </div>



        </div>
    )
}

export default HomePage;