import React, { Component } from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import Axios from 'axios';
import Sidebar from '../../Sidebar/Sidebar';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
// import './Customers.css';
import { NavLink } from 'react-router-dom'
class CustomerTypes extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userId: 1,
            data: [],
            loading: false,
        }
        this.getData = this.getData.bind(this)
        this.delete = this.deleteCustomerType.bind(this)
    }

    getData() {
        let token = "Token " + localStorage.userData;
        console.log(token);
        this.setState({

            data: [],
            loading: true
        })
        Axios.get(`http://127.0.0.1:8000/api/customer/customertype/`, {
            headers: { 'Authorization': token }
        })
            .then(json => {
                console.log(json.data)
                this.setState({
                    data: json.data,
                    loading: false,
                })
            })
            .catch(e => {
                console.error(e)
                this.setState({
                    data: [],
                    loading: false,
                })
            })
    }
    showStatus = (status) => {
        if (status) return (<span className="btn btn-info">Active</span>)
        else return (<span className="btn btn-danger">Deactive</span>)
    }
    deleteCustomerType() {
        // const { userId } = this.state
        console.log(localStorage.userData);
        let token = "Token " + localStorage.userData;
        Axios.get(`http://127.0.0.1:8000/api/accounts/customer/`, {
            headers: { 'Authorization': token }
        })
            .then(json => {
                console.log(json.data)

            })
    }

    componentDidMount() {
        this.getData()
    }

    render() {
        // const { users, page, totalPages } = this.state;
        // const startIndex = page * TOTAL_PER_PAGE;
        const theData = this.state.data.map((d) => {
            return (

                <tr key={d.id}>
                    <td>{d.id}</td>
                    <td>{d.name}</td>
                    <td>{d.pay_type}</td>
                    <td>{d.deadline_payment}</td>
                    <td> <NavLink className="btn btn-success" to={"/users/customertype/" + d.id + "/edit"}>Edit</NavLink>
                        <ReactBootStrap.Button className="btn" variant="danger" onClick={this.deleteCustomerType}>Delete</ReactBootStrap.Button>
                    </td>
                </tr>
            )
        })
        return (
            <div className="wrapper ">
                <Sidebar></Sidebar>

                <div className="main-panel">
                    <Header></Header>
                    <div className="content">

                        <NavLink to="/users/customer/add" className="btn btn-info">Them</NavLink>

                        <ReactBootStrap.Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Tên kiểu</th>
                                    <th>Kiểu thanh toán</th>
                                    <th>Kỳ hạn thanh toán</th>
                                    <th>Hành động</th>
                                </tr>
                            </thead>
                            <tbody>
                                {theData}
                            </tbody>
                        </ReactBootStrap.Table>
                    </div>
                    <Footer></Footer>

                </div>
            </div>





        );
    }
}


export default CustomerTypes;