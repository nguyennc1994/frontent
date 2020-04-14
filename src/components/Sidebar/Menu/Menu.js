import React, { Component } from 'react';

class Menu extends Component {
    render() {
        return (
            <div>
                <li className="nav-item">
                        <a className="nav-link" href="./dashboard.html">
                            <i className="material-icons">dashboard</i>
                            <p>Dashboard</p>
                        </a>
                        </li>
            </div>
        );
    }
}

export default Menu;