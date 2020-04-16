import React, { Component } from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import Axios from 'axios';
import Sidebar from '../../Sidebar/Sidebar';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import { NavLink } from 'react-router-dom'
// const TOTAL_PER_PAGE = 10;

class Staffs extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
        }
        this.getData = this.getData.bind(this)
        this.btnClick = this.btnClick.bind(this)
    }

    getData() {
        console.log(localStorage.userData);
        let token = "Token " + localStorage.userData;
        this.setState({

            data: [],
            loading: true
        })
        Axios.get(`http://127.0.0.1:8000/api/accounts/staff/`, {
            headers: { 'Authorization': token }
        })
            .then(json => {
                console.log(json)
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
    getIndex = (data) => {
        var index = data.length;
        console.log(index)
    }
    showStatus = (status) => {
        if (status) return (<span className="btn btn-info">Active</span>)
        else return (<span className="btn btn-danger">Deactive</span>)
    }
    showIsAdmin = (status) => {
        if (status) return (<span className="btn btn-info">Admin</span>)
        else return (<span className="btn btn-danger">Only staff</span>)
    }
    btnClick(event) {
        const userId = event.target.value
        console.log(userId)
        this.setState({
            userId
        })

        this.getData()
    }

    componentDidMount() {
        this.getData()

    }

    render() {
        let userId = this.props.match.params.userId;
        console.log(userId)
        // const { users, page, totalPages } = this.state;
        // const startIndex = page * TOTAL_PER_PAGE;
        const theData = this.state.data.map((d) => {
            return (

                <tr key={d.username}>
                    <td>{d.id}</td>
                    <td>{d.username}</td>
                    <td>{d.full_name}</td>
                    <td>{d.birthday}</td>
                    <td>{this.showStatus(d.is_active)}{this.showIsAdmin(d.is_admin)}</td>
                    <td>{d.date_joined.slice(0, 19)}</td>
                    <td>{d.last_login.slice(0, 19)}</td>
                    <td> <NavLink className="btn btn-success" to={"/users/staff/" + d.id + "/edit"}>Edit</NavLink>
                        <button className="btn btn-danger" onClick={this.deleteCustomer}>Delete</button>
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
                        <NavLink to="/users/staff/add" className="btn btn-info">Them</NavLink>
                        <ReactBootStrap.Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Tên đăng nhập</th>
                                    <th>Họ và Tên</th>
                                    <th>Ngày sinh</th>
                                    <th>Trạng thái</th>
                                    <th>Ngày thêm</th>
                                    <th>Lần cuối đăng nhập</th>
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


export default Staffs;