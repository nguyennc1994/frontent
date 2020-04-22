import React, { Component } from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import Axios from 'axios';
import Sidebar from '../../Sidebar/Sidebar';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import './Customers.css';
import { NavLink } from 'react-router-dom'
import Search from '../../Search/Search';
class Customers extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            data_meter: [],
            keyword :"",
            sorted : true,
            
        }
        this.getData = this.getData.bind(this)
        this.delete = this.deleteCustomer.bind(this)
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
        Axios.get(`http://149.28.137.86:8000/api/accounts/customer/`, {
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

    getMeter = () => {
        let token = "Token " + localStorage.userData;
        this.setState({

            data_meter: [],
            loading: true
        })
        Axios.get(`http://149.28.137.86:8000/api/meters/`, {
            headers: { 'Authorization': token }
        })
            .then(json => {
                this.setState({
                    data_meter: json.data,
                    loading: false
                })
            })
            .catch(e => {
                console.error(e)
                this.setState({
                    data_meter: [],
                    loading: false
                })
            })
        console.log(this.state.data)
    }
    compareBy(key) {
        if(this.state.sorted){
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
        else{
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
        this.setState({data: arrayCopy});
      }
    showStatus = (status) => {
        if (status) return (<span className="btn btn-info">Active</span>)
        else return (<span className="btn btn-danger">Deactive</span>)
    }
    deleteCustomer = (id) => {
        if (confirm("Bạn chắc chắn muốn xóa không?")) {

            let token = "Token " + localStorage.userData;
            Axios.delete(`http://149.28.137.86:8000/api/accounts/customer/` + id + `/`, {
                headers: { 'Authorization': token }
            })
                .then(json => {
                    console.log(json)
                    // if (json.status === 200){
                    // alert("Xóa thành công")
                    //     this.setState({
                    //         data: json.data,
                    //     })
                    // }
                    // else alert("Xóa không thành công")

                })
            console.log(this.state.data)
        }
    }

    componentDidMount() {
       
        this.getData()
        this.getMeter()
    }
    onSearch = (keyword) => {
        console.log(keyword)
        this.setState({
            keyword :keyword
        })
    }
    
    render() {
        var {data, keyword,data_meter} = this.state
        if(keyword){
            data = data.filter((data)=>{
                return (data.username.toLowerCase().indexOf(keyword)  !== -1 || data.full_name.toLowerCase().indexOf(keyword)  !== -1);
            })
        }

        const theData = data.map((d) => {
            return (
                <tr key={d.username}>
                    <td>{d.id}</td>
                    <td><NavLink to={"/users/customer/" + d.id + "/view"}>{d.username}</NavLink></td>
                    <td>{d.customerprofile.customer_type}</td>
                    <td>{d.full_name}</td>
                    <td>{d.birthday}</td>
                    <td>{d.meter}</td>
                    <td>{this.showStatus(d.is_active)}</td>
                    <td>{d.date_joined.slice(0, 10)}</td>
                    <td>{d.last_login.slice(0, 10)}</td>
                    <td> <NavLink className="btn btn-success" to={"/users/customer/" + d.id + "/edit"}>Edit</NavLink>
                        <ReactBootStrap.Button className="btn" variant="danger" onClick={()=> this.deleteCustomer(d.id)}>Delete</ReactBootStrap.Button>
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

                        <NavLink to="/users/customer/add" className="btn btn-info">Thêm</NavLink>
                        <Search onSearch={this.onSearch}/>
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
                    </div>
                    <Footer></Footer>

                </div>
            </div>
        );
    }
}


export default Customers;