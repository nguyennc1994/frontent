import React, { Component } from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import Axios from 'axios';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
// import './Users/Customers/Customers.css';
import { NavLink } from 'react-router-dom'
import Search from '../Search/Search';
class Meters extends Component {
    constructor(props) {
        super(props)
        this.state = {
            is_active: false,
            data: [],
            keyword:""
        }
        this.getData = this.getData.bind(this)
        this.delete = this.deleteCustomer.bind(this)
        this.showStatus = this.showStatus.bind(this)
    }

    getData() {
        let token = "Token " + localStorage.userData;
        this.setState({

            data: [],
            loading: true
        })
        Axios.get(`http://149.28.137.86:8000//api/meters/`, {
            headers: { 'Authorization': token }
        })
            .then(json => {
                this.setState({
                    data: json.data,
                    loading : false
                })
            })
            .catch(e => {
                console.error(e)
                this.setState({
                    data: [],
                    loading : false
                })
            })
        console.log(this.state.data)
    }

    showStatus = (status) => {
        if (status) return (<span className="btn btn-info">Active</span>)
        else return (<span className="btn btn-danger">Deactive</span>)
    }

    deleteCustomer(id) {
        if (confirm("Bạn chắc chắn muốn xóa không?")) {

            let token = "Token " + localStorage.userData;
            let { data } = this.state;
            Axios.delete(`http://149.28.137.86:8000//api/meters/` + id + `/`, {
                headers: { 'Authorization': token }
            })
                .then(json => {

                    if (json.status === 200)
                        this.setState({
                            data: json.data,
                        })

                })
            console.log(this.state.data)
        }
    }

    onSearch = (keyword) => {
        console.log(keyword)
        this.setState({
            keyword :keyword
        })
    }
    componentDidMount() {

        this.getData();
        console.log(this.state.data)
    }

    render() {
        var {data, keyword} = this.state
       
        if(keyword){
            data = data.filter((data)=>{
                return (data.pid_number.toLowerCase().indexOf(keyword)  !== -1 );
            })
        }
 
        const theData = data.map((d) => {

            return (

                <tr key={d.id}>
                    <td>{d.id}</td>
                    <td>{d.pid_number}</td>
                    <td>{d.date_added.slice(0, 10)}</td>
                    <td>{this.showStatus(d.is_active)}</td>
                    <td>{d.customer}</td>
                    <td> <NavLink className="btn btn-success" to={"/meter/" + d.id + "/edit"}>Edit</NavLink>
                        <ReactBootStrap.Button className="btn" variant="danger" onClick={() => this.deleteCustomer(d.id)}>Delete</ReactBootStrap.Button>
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
                        <Search onSearch={this.onSearch}/>
                        <ReactBootStrap.Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Mã công tơ</th>
                                    <th>Ngày thêm</th>
                                    <th>Trạng thái</th>
                                    <th>Khách hàng</th>
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


export default Meters;