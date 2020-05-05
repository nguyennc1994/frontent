import React, { Component } from 'react';
import { Table, InputGroup, FormControl, Button, Card } from 'react-bootstrap';
import Axios from 'axios';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Search from '../Search/Search';
import { Redirect } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStepBackward, faFastBackward, faStepForward, faFastForward } from '@fortawesome/free-solid-svg-icons';
class Reports extends Component {
    constructor(props) {
        super(props)
        this.state = {
            redirectToReferrer: false,
            data: [],
            loading: false,
            keyword: "",
            currentPage: 1,
            objectPerPage: 10,
        }
        this.getData = this.getData.bind(this)
        this.compareBy = this.compareBy.bind(this);
        this.sortBy = this.sortBy.bind(this);
    }

    getData() {
        let token = "Token " + localStorage.userData;
        console.log(token);
        this.setState({

            data: [],
            loading: true
        })
        Axios.get(`http://149.28.137.86:8000/api/v1/meters/reports/`, {
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

    setobjectPerPage = (e) => {
        console.log(e.target.value)
        this.setState({
            objectPerPage: e.target.value
        })
    }
    compareBy(key) {
        if (this.state.sorted === true) {
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
        }
    }



    sortBy(key) {
        let arrayCopy = this.state.data;
        arrayCopy.sort(this.compareBy(key));
        this.setState({ data: arrayCopy });
    }

    componentDidMount() {
        this.getData()
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
    render() {

        if (this.state.redirectToReferrer) {
            return (<Redirect to={'/login'} />)
        }
        var { data, currentPage, objectPerPage, keyword } = this.state
        const lastIndex = currentPage * objectPerPage;
        const firstIndex = lastIndex - objectPerPage;
        const currentObjects = data.slice(firstIndex, lastIndex);
        const totalPages = Math.ceil(data.length / objectPerPage);

        if (keyword) {
            console.log(keyword)
            data = data.filter((data) => {
                return (data.date_added.toLowerCase().indexOf(keyword) !== -1);
            })
            console.log(data)
        }


        const theData = currentObjects.map((d, index) => {
            return (

                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{d.id}</td>
                    <td>{d.meter}</td>
                    <td>{d.date_added.slice(0, 10)}</td>
                    <td>{d.buy}</td>
                    <td>{d.use}</td>
                    <td>{d.credit}</td>
                    <td>{d.total}</td>
                    <td>{d.signal_strength}</td>
                </tr>
            )
        })

        const perNum_Css = {
            width: "45px",
            border: "1px solid #17A2B8",
            color: "#17A3B8",
            textAlign: "center",
            fontWeight: "bold"
        }
        return (
            <div className="wrapper ">
                <Sidebar></Sidebar>

                <div className="main-panel">
                    <Header></Header>
                    <div className="content">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header card-header-info">
                                    <h4 className="card-title">Danh sách Report</h4>
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

                                    <Table striped bordered hover>
                                        <thead>
                                            <tr>
                                                <th>STT</th>
                                                <th>ID report</th>
                                                <th>Mã công tơ</th>
                                                <th>Ngày nhập</th>
                                                <th>Mua</th>
                                                <th>Sử dụng</th>
                                                <th>Còn lại</th>
                                                <th>Tổng lượng dùng</th>
                                                <th>Tín hiệu</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            {theData}
                                        </tbody>
                                    </Table>
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

                        <div>
                        </div>
                    </div>
                    <Footer></Footer>

                </div>
            </div>





        );
    }
}


export default Reports;