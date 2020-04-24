import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import './Sidebar.css';
class Sidebar extends Component {
    render() {
        if(localStorage.perm==="customer") 
            return(
                <div>
                <div className="sidebar" data-color="purple" data-background-color="white" data-image="../img/sidebar-1.jpg">

                    <div className="logo">
                        <NavLink className="simple-text logo-normal" to="/home">
                            StechIoT
                    </NavLink></div>
                    <div className="sidebar-wrapper">
                        <ul className="nav">
                            <li className="nav-item">
                                <NavLink activeStyle={{ backgroundColor: "#26c6da", color: "#ffffff" }} className="nav-link" to="/home">
                                    <i className="selected material-icons">dashboard</i>
                                    <p>Dashboard</p>
                                </NavLink>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item ">
                                        <NavLink className="nav-link" to="/dashboard1">
                                            <i className="selected material-icons">insert_chart</i>
                                            <p>Chart 1</p>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item ">
                                        <NavLink className="nav-link" to="/dashboard2">
                                            <i className="selected material-icons">pie_chart</i>
                                            <p>Chart 2</p>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item ">
                                        <NavLink className="nav-link" to="/dashboard3">
                                            <i className="selected material-icons">show_chart</i>
                                            <p>Chart 3</p>
                                        </NavLink>
                                    </li>
                                </ul>
                            </li>

                            <li className="nav-item ">
                                <NavLink activeStyle={{ backgroundColor: "#26c6da", color: "#ffffff" }} className="nav-link" to="/reports">
                                    <i className="selected material-icons">library_books</i>
                                    <p>Reports</p>
                                </NavLink>
                            </li>
                            <li className="nav-item ">
                                <NavLink activeStyle={{ backgroundColor: "#26c6da", color: "#ffffff" }} className="nav-link" to="/bills">
                                    <i className="selected material-icons">content_paste</i>
                                    <p>Bills</p>
                                </NavLink>
                            </li>

                        </ul>
                    </div>
                    <div className="sidebar-background" />
                </div>

            </div>
            
        )
        else if(localStorage.perm==="staff")
                return(
                    <div>
                        <div className="sidebar" data-color="purple" data-background-color="white" data-image="../img/sidebar-1.jpg">

                            <div className="logo">
                                <NavLink className="simple-text logo-normal" to="/home">
                                    StechIoT
                            </NavLink></div>
                            <div className="sidebar-wrapper">
                                <ul className="nav">
                                    <li className="nav-item">
                                        <NavLink activeStyle={{ backgroundColor: "#26c6da", color: "#ffffff" }} className="nav-link" to="/home">
                                            <i className="selected material-icons">dashboard</i>
                                            <p>Dashboard</p>
                                        </NavLink>
                                        <ul className="nav nav-treeview">
                                            <li className="nav-item ">
                                                <NavLink className="nav-link" to="/dashboard1">
                                                    <i className="selected material-icons">insert_chart</i>
                                                    <p>Chart 1</p>
                                                </NavLink>
                                            </li>
                                            <li className="nav-item ">
                                                <NavLink className="nav-link" to="/dashboard2">
                                                    <i className="selected material-icons">pie_chart</i>
                                                    <p>Chart 2</p>
                                                </NavLink>
                                            </li>
                                            <li className="nav-item ">
                                                <NavLink className="nav-link" to="/dashboard3">
                                                    <i className="selected material-icons">show_chart</i>
                                                    <p>Chart 3</p>
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </li>


                                    <li className="nav-item ">
                                        <NavLink activeStyle={{ backgroundColor: "#26c6da", color: "#ffffff" }} className="nav-link" to="/users">
                                            <i className="selected material-icons">person</i>
                                            <p>Users</p>
                                        </NavLink>
                                        <ul className="nav nav-treeview">
                                            {/* <li className="nav-item">
                                                <NavLink className="nav-link" to="/users/customertypes">
                                                    <i className="selected material-icons">insert_chart</i>
                                                    <p>Customer Types</p>
                                                </NavLink>
                                            </li> */}
                                            <li className="nav-item ">
                                                <NavLink className="nav-link" to="/users/customers">
                                                    <i className="selected material-icons">pie_chart</i>
                                                    <p>Customers</p>
                                                </NavLink>
                                            </li>                                     
                                        </ul>
                                    </li>


                                    <li className="nav-item ">
                                        <NavLink activeStyle={{ backgroundColor: "#26c6da", color: "#ffffff" }} className="nav-link" to="/meters">
                                            <i className="selected material-icons">content_paste</i>
                                            <p>Meters</p>
                                        </NavLink>
                                    </li>


                                    <li className="nav-item ">
                                        <NavLink activeStyle={{ backgroundColor: "#26c6da", color: "#ffffff" }} className="nav-link" to="/reports">
                                            <i className="selected material-icons">library_books</i>
                                            <p>Reports</p>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item ">
                                        <NavLink activeStyle={{ backgroundColor: "#26c6da", color: "#ffffff" }} className="nav-link" to="/bills">
                                            <i className="selected material-icons">content_paste</i>
                                            <p>Bills</p>
                                        </NavLink>
                                    </li>

                                </ul>
                            </div>
                            <div className="sidebar-background" />
                            </div>

                    </div>
                )
        else
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
                                <NavLink activeStyle={{ backgroundColor: "#26c6da", color: "#ffffff" }} className="nav-link" to="/home">
                                    <i className="selected material-icons">dashboard</i>
                                    <p>Dashboard</p>
                                </NavLink>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item ">
                                        <NavLink activeStyle={{ backgroundColor: "#26c6da", color: "#ffffff" }}className="nav-link" to="/dashboard1">
                                            <i className="selected material-icons">insert_chart</i>
                                            <p>Chart 1</p>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item ">
                                        <NavLink activeStyle={{ backgroundColor: "#26c6da", color: "#ffffff" }}className="nav-link" to="/dashboard2">
                                            <i className="selected material-icons">pie_chart</i>
                                            <p>Chart 2</p>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item ">
                                        <NavLink activeStyle={{ backgroundColor: "#26c6da", color: "#ffffff" }}className="nav-link" to="/dashboard3">
                                            <i className="selected material-icons">show_chart</i>
                                            <p>Chart 3</p>
                                        </NavLink>
                                    </li>
                                </ul>
                            </li>


                            <li className="nav-item ">
                                <NavLink activeStyle={{ backgroundColor: "#26c6da", color: "#ffffff" }} className="nav-link" to="/users">
                                    <i className="selected material-icons">person</i>
                                    <p>Users</p>
                                </NavLink>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <NavLink activeStyle={{ backgroundColor: "#26c6da", color: "#ffffff" }}className="nav-link" to="/users/customertypes">
                                            <i className="selected material-icons">insert_chart</i>
                                            <p>Customer Types</p>
                                        </NavLink>
                                    </li>
                                    <li className="selected nav-item ">
                                        <NavLink activeStyle={{ backgroundColor: "#26c6da", color: "#ffffff" }}className="nav-link" to="/users/customers">
                                            <i className="selected material-icons">pie_chart</i>
                                            <p>Customers</p>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item ">
                                        <NavLink activeStyle={{ backgroundColor: "#26c6da", color: "#ffffff" }} className="nav-link" to="/users/staffs">
                                            <i className="selected material-icons">show_chart</i>
                                            <p>Staffs</p>
                                        </NavLink>
                                    </li>
                                </ul>
                            </li>


                            <li className="nav-item ">
                                <NavLink activeStyle={{ backgroundColor: "#26c6da", color: "#ffffff" }} className="nav-link" to="/meters">
                                    <i className="selected material-icons">content_paste</i>
                                    <p>Meters</p>
                                </NavLink>
                            </li>


                            <li className="nav-item ">
                                <NavLink activeStyle={{ backgroundColor: "#26c6da", color: "#ffffff" }} className="nav-link" to="/reports">
                                    <i className="selected material-icons">library_books</i>
                                    <p>Reports</p>
                                </NavLink>
                            </li>
                            <li className="nav-item ">
                                <NavLink activeStyle={{ backgroundColor: "#26c6da", color: "#ffffff" }} className="nav-link" to="/bills">
                                    <i className="selected material-icons">content_paste</i>
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