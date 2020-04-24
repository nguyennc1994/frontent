import React, { Component } from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import Axios from 'axios';
import Sidebar from '../../Sidebar/Sidebar';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import { NavLink, Redirect } from 'react-router-dom'
import Search from '../../Search/Search';
// import Pagination from '../../Pagination/Pagination';


class Staffs extends Component {
    constructor(props) {
        super(props)
        this.state = {
            redirectToReferrer: false,
            data: [],
            keyword: "",
            sorted: true
        }
        this.getData = this.getData.bind(this)
        // this.btnClick = this.btnClick.bind(this)
        this.compareBy = this.compareBy.bind(this);
        this.sortBy = this.sortBy.bind(this);
    }

    getData() {
        let token = "Token " + localStorage.userData;
        this.setState({

            data: [],
            loading: true
        })
        Axios.get(`http://149.28.137.86:8000/api/v1/accounts/staff/`, {
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
        console.log(this.state.data);
    }
    compareBy(key) {
        if (this.state.sorted === true) {
            return function (a, b) {
                if (a[key] < b[key]) return -1;
                if (a[key] > b[key]) return 1;
                return 0;
            }
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
		if(localStorage.getItem("userData")){		
		}	
	   
		else{
		 this.setState({redirectToReferrer: true});
		}	
	   }

    render() {

		if (this.state.redirectToReferrer) {
            return (<Redirect to={'/login'}/>)
		  } 

        var { data, keyword } = this.state

        if (keyword) {
            data = data.filter((data) => {
                return (data.username.toLowerCase().indexOf(keyword) !== -1 || data.full_name.toLowerCase().indexOf(keyword) !== -1);
            })
        }

        const theData = data.map((d) => {
            // for(var i = 1; i<=data.length; i++){
                
            return (

                <tr key={d.username}>
                    {/* <td>{i}</td> */}
                    <td>{d.id}</td>
                    <td>{d.username}</td>
                    <td>{d.full_name}</td>
                    <td>{d.birthday}</td>
                    <td>{this.showStatus(d.is_active)}</td>
                    <td>{this.showIsAdmin(d.is_admin)}</td>
                    <td>{d.date_joined.slice(0, 19)}</td>
                    <td>{d.last_login.slice(0, 19)}</td>
                    <td> <NavLink className="btn btn-success" to={"/users/staff/" + d.id + "/edit"}>Edit</NavLink>

                    </td>
                </tr>
            )
            // }
        })

        console.log(theData)
        return (
            <div className="wrapper ">
                <Sidebar></Sidebar>

                <div className="main-panel">
                    <Header></Header>
                    <div className="content">
                        <NavLink to="/users/staff/add" className="btn btn-info">Thêm</NavLink>
                        <Search onSearch={this.onSearch} />
                        <ReactBootStrap.Table striped bordered hover>
                            <thead>
                                <tr>
                                    {/* <th onClick={() => this.sortBy('id')}>STT</th> */}
                                    <th onClick={() => this.sortBy('id')}>ID</th>
                                    <th onClick={() => this.sortBy('username')}>Tên đăng nhập</th>
                                    <th onClick={() => this.sortBy('full_name')}>Họ và Tên</th>
                                    <th onClick={() => this.sortBy('birthday')}>Ngày sinh</th>
                                    <th onClick={() => this.sortBy('is_active')}>Trạng thái</th>
                                    <th onClick={() => this.sortBy('is_admin')}>Quyền quản trị</th>
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


export default Staffs;