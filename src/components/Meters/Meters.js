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
            keyword: ""
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
            // this.setState({
            //     sorted : false
            // })
            // console.log(this.state.sorted)
        }
        // else{
        //     return function (a, b) {
        //         if (a[key] > b[key]) return -1;
        //         if (a[key] < b[key]) return 1;
        //         return 0;
        //       }
        //     //   this.setState({
        //     //     sorted : true
        //     // })
        // // }
        // }
      
    
     
      sortBy(key) {
        let arrayCopy = this.state.data;
        arrayCopy.sort(this.compareBy(key));
        this.setState({data: arrayCopy});
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

    render() {
        var { data, keyword } = this.state

        if (keyword) {
            data = data.filter((data) => {
                return (data.pid_number.toLowerCase().indexOf(keyword) !== -1);
            })
        }

        const theData = data.map((d) => {

            return (

                <tr key={d.id}>
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
                        <Search onSearch={this.onSearch} />
                        <ReactBootStrap.Table striped bordered hover>
                            <thead>
                                <tr>
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
                    </div>
                    <Footer></Footer>

                </div>
            </div>





        );
    }
}


export default Meters;