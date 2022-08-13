

import React,{Component} from 'react';
import '../stylesheets/Home.css'
import logo from "../images/logo.png"
class Home extends React.Component{
    render(){
        return(
            <div>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous"></link>
                <div class="navbar">
                    <img class="logo" src={logo}></img>
                    <a>Rooms</a>
                    <a>Book a room</a>
                    <a>Contact us</a>
                </div>
                <div class="content">
                    <p>Some stuff</p>
                </div>
            </div>
        )
    }
}

export default Home;