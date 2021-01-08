import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components'

// const NavBarStyle = styled.nav`

// `;


export default class NavBar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
                    <a className="navbar-brand col-sm-3 col-md-2 mr-0 align-items-center" href="#">PokeDex</a>
                </nav>
            </div>
        )
    }
}
