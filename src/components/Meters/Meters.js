import React, { Component } from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import Axios from 'axios';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { NavLink } from 'react-router-dom'
import Search from '../Search/Search';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStepBackward, faFastBackward, faStepForward, faFastForward } from '@fortawesome/free-solid-svg-icons';

class Meters extends Component {
    constructor(props) {
        super(props)
        this.state = {
            is_active: false,
            data: [],
            keyword: "",
            currentPage: 1,
            objectPerPage: 10,
        }
        this.getData = this.getData.bind(this)
        this.showStatus = this.showStatus.bind(this)
        this.sortBy = this.sortBy.bind(this);
    }

    getData() {
        let token = "Token " + localStorage.userData;
        this.setState({

            data: [],
            loading: true
        })
        Axios.get(`http://149.28.137.86:8000/api/v1/meters/meters/`, {
            headers: { 'Authorization': token }
        })
            .then(json => {
                console.log(json.data)
                this.setState({
                    data: json.data,
                    loading: false
                })
            })
            .catch(e => {
                console.error(e)
                this.setState({
                    data: [],
                    loading: false
                })
            })
        console.log(this.state.data)
    }

    showStatus = (status) => {
        if (status) return (<span className="btn btn-info">Active</span>)
        else return (<span className="btn btn-danger">Deactive</span>)
    }

    compareBy(key) {
        // if(this.state.sorted===true){
        return function (a, b) {
            if (a[key] < b[key]) return -1;
            if (a[key] > b[key]) return 1;
            return 0;
        }
    }

    sortBy(key) {
        let arrayCopy = this.state.data;
        arrayCopy.sort(this.compareBy(key));
        this.setState({ data: arrayCopy });
    }
    onSearch = (keyword) => {
        console.log(keyword)
        this.setState({
            keyword: keyword
        })
    }
    componentDidMount() {

        this.getData();
        console.log(this.state.data)
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


        if (keyword) {
            data = data.filter((data) => {
                return (data.pid_number.toLowerCase().indexOf(keyword) !== -1);
            })
        }

        const theData = currentObjects.map((d, index) => {

            return (

                <tr key={index}>
                    <td style={{ width: "20px" }}>{index + 1}</td>
                    <td>{d.id}</td>
                    <td><NavLink to={"/meter/" + d.pid_number + "/report"}> {d.pid_number}</NavLink></td>
                    <td>{d.date_added.slice(0, 10)}</td>
                    <td>{this.showStatus(d.is_active)}</td>
                    {/* <td>{d.customer}</td> */}
                    <td> <NavLink className="btn btn-success" to={"/meter/" + d.id + "/edit"}>Edit</NavLink>
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
                        <NavLink to="/meter/add" className="btn btn-info">Thêm</NavLink>
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header card-header-info">
                                    <h4 className="card-title">Danh sách công tơ</h4>
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
                                                <th>STT</th>
                                                <th onClick={() => this.sortBy('id')}>ID</th>
                                                <th onClick={() => this.sortBy('pid_number')}>Mã công tơ</th>
                                                <th>Ngày thêm</th>
                                                <th>Trạng thái</th>
                                                {/* <th onClick={() => this.sortBy('customer')}>Khách hàng</th> */}
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


export default Meters;