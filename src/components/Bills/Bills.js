import React, { Component } from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import Axios from 'axios';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Search from '../Search/Search';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStepBackward, faFastBackward, faStepForward, faFastForward } from '@fortawesome/free-solid-svg-icons';
// import './Users/Customers/Customers.css';
import { Redirect } from 'react-router-dom'
class Bills extends Component {
    constructor(props) {
        super(props)
        this.state = {
            redirectToReferrer: false,
            is_active: false,
            data: [],
            currentPage: 1,
            objectPerPage: 10,
        }
        this.getData = this.getData.bind(this)
        this.showStatus = this.showStatus.bind(this)
    }

    getData() {
        let token = "Token " + localStorage.userData;
        console.log(token);
        this.setState({

            data: [],
        })
        Axios.get(`http://149.28.137.86:8000/api/v1/payments/bills/`, {
            headers: { 'Authorization': token }
        })
            .then(json => {

                this.setState({
                    data: json.data,
                })
            })

            .catch(e => {
                // console.error(e)
                this.setState({
                    data: [],
                })
            })
        console.log(this.state.data)
    }

    showStatus = (status) => {
        if (status) return (<span className="btn btn-info">Paid</span>)
        else return (<span className="btn btn-danger">Unpaid</span>)
    }


    // findIndex = (data, id) => {
    //         var result = -1;
    //         products.forEach
    // }
    componentDidMount() {
        // console.log(this.state)
        this.getData()
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
        var { data, currentPage, objectPerPage, keyword } = this.state
        const lastIndex = currentPage * objectPerPage;
        const firstIndex = lastIndex - objectPerPage;
        const currentObjects = data.slice(firstIndex, lastIndex);
        const totalPages = Math.ceil(data.length / objectPerPage);

        if (this.state.redirectToReferrer) {
            return (<Redirect to={'/login'} />)
        }
        const theData = currentObjects.map((d) => {

            return (
                <tr key={d.id}>
                    <td>{d.id}</td>
                    <td>{d.month}</td>
                    <td>{d.customer.username}</td>
                    <td>{d.meter.pid_number}</td>
                    <td>{d.last_report.total}</td>
                    <td>{d.new_report.total}</td>
                    <td>{d.used_index}</td>
                    <td>{d.total_pay}</td>
                    <td>{this.showStatus(d.status)}</td>
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
                                    <h4 className="card-title">Danh sách hóa đơn</h4>
                                    <p className="card-category"></p>
                                </div>
                                <div className="card-body">
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
                                                <th>ID</th>
                                                <th>Tháng</th>
                                                <th>Khách hàng</th>
                                                <th>Công tơ</th>
                                                <th>Báo cáo cũ</th>
                                                <th>Báo cáo mới</th>
                                                <th>Chỉ sô sử dụng</th>
                                                <th>Tổng tiền</th>
                                                <th>Trạng thái</th>
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


export default Bills;