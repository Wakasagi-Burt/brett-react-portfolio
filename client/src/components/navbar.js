import React from 'react';
import { Navbar, NavLink } from 'react-bootstrap';


export default function navbar (){
return (

    <div id="nb">
        <navbar  expand="lg" bg="light" sticky="top">
            <NavLink className='nav-link' to="/">
                <div>
                    <h1>Brett Shulmans' Portfolio</h1>
                </div>
            </NavLink>
            <ul class="navbar-nav ml-auto navitem-indent">
                <li class="nav-item">
                    <NavLink to="/aboutme">
                        <div >
                            <h2>About Me</h2>
                        </div>
                    </NavLink>
                </li>

                <li class="nav-item">
                    <NavLink to="/Contact">
                        <div >
                            <h2>Contact Me</h2>
                        </div>
                    </NavLink>
                </li>

                <li class="nav-item">
                    <NavLink to="/resume">
                        <div >
                            <h2>Resume</h2>
                        </div>
                    </NavLink>
                </li>
            </ul>


        </navbar>
    </div>

    

)

}
