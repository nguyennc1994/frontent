import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import './Sidebar.css';
class Sidebar extends Component {
    render() {
        return (
            <div>
                <div className="sidebar" data-color="purple" data-background-color="white" data-image="../img/sidebar-1.jpg">

                    <div className="logo">
                        <NavLink className="simple-text logo-normal" to="/home">
                            StechIoT
                    </NavLink></div>
                    <div className="sidebar-wrapper">
                        <ul className="nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">
                                    <i className="material-icons">dashboard</i>
                                    <p>Dashboard</p>
                                </NavLink>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item ">
                                        <NavLink className="nav-link" to="/dashboard1">
                                            <i className="material-icons">insert_chart</i>
                                            <p>Chart 1</p>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item ">
                                        <NavLink className="nav-link" to="/dashboard2">
                                            <i className="material-icons">pie_chart</i>
                                            <p>Chart 2</p>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item ">
                                        <NavLink className="nav-link" to="/dashboard3">
                                            <i className="material-icons">show_chart</i>
                                            <p>Chart 3</p>
                                        </NavLink>
                                    </li>
                                </ul>
                            </li>


                            <li className="nav-item ">
                                <NavLink activeStyle={{ backgroundColor: "#9C27B0", color: "#ffffff" }} className="nav-link" to="/users">
                                    <i className="material-icons">person</i>
                                    <p>Users</p>
                                </NavLink>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/users/customertypes">
                                            <i className="material-icons">insert_chart</i>
                                            <p>Customer Types</p>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item ">
                                        <NavLink className="nav-link" to="/users/customers">
                                            <i className="material-icons">pie_chart</i>
                                            <p>Customers</p>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item ">
                                        <NavLink className="nav-link" to="/users/staffs">
                                            <i className="material-icons">show_chart</i>
                                            <p>Staffs</p>
                                        </NavLink>
                                    </li>
                                </ul>
                            </li>


                            <li className="nav-item ">
                                <NavLink activeStyle={{ backgroundColor: "#9C27B0", color: "#ffffff" }} className="nav-link" to="/meters">
                                    <i className="material-icons">content_paste</i>
                                    <p>Meters</p>
                                </NavLink>
                            </li>


                            <li className="nav-item ">
                                <NavLink activeStyle={{ backgroundColor: "#9C27B0", color: "#ffffff" }} className="nav-link" to="/reports">
                                    <i className="material-icons">library_books</i>
                                    <p>Reports</p>
                                </NavLink>
                            </li>
                            <li className="nav-item ">
                                <NavLink activeStyle={{ backgroundColor: "#9C27B0", color: "#ffffff" }} className="nav-link" to="/bills">
                                    <i className="material-icons">content_paste</i>
                                    <p>Bills</p>
                                </NavLink>
                            </li>

                        </ul>
                    </div>
                    <div className="sidebar-background" />
                </div>

            </div>
        );
    }
}

export default Sidebar;