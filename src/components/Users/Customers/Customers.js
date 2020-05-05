import React, { Component } from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import Axios from 'axios';
import Sidebar from '../../Sidebar/Sidebar';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import './Customers.css';
import { NavLink, Redirect } from 'react-router-dom'
import Search from '../../Search/Search';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStepBackward, faFastBackward, faStepForward, faFastForward } from '@fortawesome/free-solid-svg-icons';

class Customers extends Component {
    constructor(props) {
        super(props)
        this.state = {
            redirectToReferrer: false,
            data: [],
            data_meter: [],
            keyword: "",
            sorted: true,
            currentPage: 1,
            objectPerPage: 10,

        }
        this.getData = this.getData.bind(this)
        this.compareBy = this.compareBy.bind(this);
        this.sortBy = this.sortBy.bind(this);
    }

    componentWillMount() {
        if (localStorage.getItem("userData")) {
        }

        else {
            this.setState({ redirectToReferrer: true });
        }
    }

    getData() {
        let token = "Token " + localStorage.userData;
        console.log(token);
        this.setState({

            data: [],
            loading: true
        })
        Axios.get(`http://149.28.137.86:8000/api/v1/accounts/customer/`, {
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

    compareBy(key) {
        if (this.state.sorted) {
            return function (a, b) {
                if (a[key] < b[key]) return -1;
                if (a[key] > b[key]) return 1;
                return 0;
            }
            // this.setState({
            //     sorted : false
            // })
            // console.log(this.state.sorted)
        }
        else {
            return function (a, b) {
                if (a[key] > b[key]) return -1;
                if (a[key] < b[key]) return 1;
                return 0;
            }
            //   this.setState({
            //     sorted : true
            // })
        }
    }

    getIndex = (data) => {
        var index = data.length;
        console.log(index)
    }

    sortBy(key) {
        let arrayCopy = this.state.data;
        arrayCopy.sort(this.compareBy(key));
        this.setState({ data: arrayCopy });
    }
    showStatus = (status) => {
        if (status) return (<span className="btn btn-info">Active</span>)
        else return (<span className="btn btn-danger">Deactive</span>)
    }

    componentDidMount() {

        this.getData()
        // this.getMeter()
    }
    onSearch = (keyword) => {
        console.log(keyword)
        this.setState({
            keyword: keyword
        })
    }

    componentWillMount() {
        if (localStorage.getItem("userData")) {
        }

        else {
            this.setState({ redirectToReferrer: true });
        }
    }

    //Pagination
    setobjectPerPage = (e) => {
        console.log(e.target.value)
        this.setState({
            objectPerPage: e.target.value
        })
    }
    changePage = (event) => {
        this.setState({
            [event.target.name]: parseInt(event.target.value)
        })
    }

    firstPage = () => {
        if (this.state.currentPage > 1) {
            this.setState({
                currentPage: 1
            })
        }
    }
    prevPage = () => {
        if (this.state.currentPage > 1) {
            this.setState({
                currentPage: this.state.currentPage - 1
            })
        }
    }
    nextPage = () => {
        if (this.state.currentPage < Math.ceil(this.state.data.length / this.state.objectPerPage)) {
            this.setState({
                currentPage: this.state.currentPage + 1
            })
        }
    }
    lastPage = () => {
        if (this.state.currentPage < Math.ceil(this.state.data.length / this.state.objectPerPage)) {
            this.setState({
                currentPage: Math.ceil(this.state.data.length / this.state.objectPerPage)
            })
        }
    }
    //End Pagination
    render() {

        if (this.state.redirectToReferrer) {
            return (<Redirect to={'/login'} />)
        }

        if (this.state.redirectToReferrer) {
            return (<Redirect to={'/login'} />)
        }

        var { data, currentPage, objectPerPage, keyword } = this.state
        const lastIndex = currentPage * objectPerPage;
        const firstIndex = lastIndex - objectPerPage;
        const currentObjects = data.slice(firstIndex, lastIndex);
        const totalPages = Math.ceil(data.length / objectPerPage);
        if (keyword) {
            data = data.filter((data) => {
                return (data.username.toLowerCase().indexOf(keyword) !== -1 || data.full_name.toLowerCase().indexOf(keyword) !== -1);
            })
        }

        const theData = currentObjects.map((d) => {
            return (
                <tr key={d.username}>
                    <td>{d.id}</td>
                    <td><NavLink to={"/users/customer/" + d.id + "/view"}>{d.username}</NavLink></td>
                    <td>{d.customerprofile.customer_type}</td>
                    <td>{d.full_name}</td>
                    <td>{d.birthday}</td>
                    <td>{d.customerprofile.meter}</td>
                    <td>{this.showStatus(d.is_active)}</td>
                    <td>{d.date_joined.slice(0, 10)}</td>
                    <td>{d.last_login.slice(0, 10)}</td>
                    <td> <NavLink className="btn btn-success" to={"/users/customer/" + d.id + "/edit"}>Edit</NavLink>
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
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header card-header-info">
                                    <h4 className="card-title">Danh sách khách hàng</h4>
                                    <p className="card-category"></p>
                                </div>
                                <div className="card-body">
                                    <NavLink to="/users/customer/add" className="btn btn-info">Thêm</NavLink>
                                    <div className="col-6">
                                        <select className="custom-select col-1" onChange={this.setobjectPerPage} >
                                            <option defaultValue="">5</option>
                                            <option selected defaultValue={10}>10</option>
                                            <option defaultValue="">20</option>
                                            <option defaultValue="">50</option>
                                        </select>
                                    </div>
                                    <Search onSearch={this.onSearch} />
                                    <ReactBootStrap.Table striped bordered hover>
                                        <thead>
                                            <tr>
                                                <th onClick={() => this.sortBy('id')}>ID</th>
                                                <th onClick={() => this.sortBy('username')}> Tên đăng nhập</th>
                                                <th>Kiểu KH</th>
                                                <th onClick={() => this.sortBy('full_name')}>Họ và Tên</th>
                                                <th onClick={() => this.sortBy('birthday')}>Ngày sinh</th>
                                                <th onClick={() => this.sortBy('meter')}>Mã công tơ</th>
                                                <th>Trạng thái</th>
                                                <th onClick={() => this.sortBy('date_joined')}>Ngày thêm</th>
                                                <th onClick={() => this.sortBy('last_login')}>Lần cuối đăng nhập</th>
                                                <th>Hành động</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {theData}
                                        </tbody>
                                    </ReactBootStrap.Table>
                                    <div style={{ "float": "left" }}>
                                        Show Pagination {currentPage} of {totalPages}
                                    </div>
                                    <div style={{ "float": "right" }} className="row">
                                        <nav aria-label="Page navigation example">
                                            <ul style={{ background: "#26c6da", }} className="pagination">
                                                <li className="page-item"><button className="page-link" style={{ color: "#ffffff" }} disabled={currentPage === 1 ? true : false} onClick={this.firstPage}><FontAwesomeIcon icon={faFastBackward} /></button></li>
                                                <li className="page-item"><button className="page-link" style={{ color: "#ffffff" }} disabled={currentPage === 1 ? true : false} onClick={this.prevPage}><FontAwesomeIcon icon={faStepBackward} /></button></li>
                                                <li className="page-item"><button className="page-link" style={{ color: "#ffffff", fontWeight: "bold" }} name="currentPage" value={currentPage} onChange={this.changePage}>{currentPage}</button></li>
                                                <li className="page-item"><button className="page-link" style={{ color: "#ffffff" }} disabled={currentPage === totalPages ? true : false} onClick={this.nextPage}><FontAwesomeIcon icon={faStepForward} /></button></li>
                                                <li className="page-item"><button className="page-link" style={{ color: "#ffffff" }} disabled={currentPage === totalPages ? true : false} onClick={this.lastPage}><FontAwesomeIcon icon={faFastForward} /></button></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                    <Footer></Footer>

                </div>
            </div>
        );
    }
}


export default Customers;