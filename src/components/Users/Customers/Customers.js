import React, { Component } from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import Axios from 'axios';
import Sidebar from '../../Sidebar/Sidebar';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import './Customers.css';
import {NavLink} from 'react-router-dom'
class Customers extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userId : 1,
            data : [],
            loading: false,
        }
        this.getData = this.getData.bind(this)
        this.delete = this.deleteCustomer.bind(this)
    }

    getData(){    
        let token = "Token "+localStorage.userData;
        console.log(token);
        this.setState({

            data : [],
            loading : true
        })
        Axios.get(`http://127.0.0.1:8000/api/accounts/customer/`,{
            headers : {'Authorization' : token}
        })
        .then(json => {
            console.log(json.data)
            this.setState({
                data : json.data,
                loading : false,
                })
            })  
            .catch(e => {
                console.error(e)
                this.setState({
                    data : [],
                    loading : false,
                    })
            })
    }
    showStatus = (status) => {
        if(status) return(<span className="btn btn-info">Active</span>)
        else return (<span className="btn btn-danger">Deactive</span>) 
      }
    deleteCustomer(){
        // const { userId } = this.state
        console.log(localStorage.userData);
        let token = "Token "+localStorage.userData;
        Axios.get(`http://127.0.0.1:8000/api/accounts/customer/`,{
            headers : {'Authorization' : token}
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
          return( 

                      <tr key={d.username}>
                          <td>{d.id}</td>
                          <td>{d.username}</td>
                          <td>{d.full_name}</td>
                          <td>{d.birthday}</td>
                          <td>{this.showStatus(d.is_active)}</td>
                          <td>{d.date_joined.slice(0,10)}</td>
                          <td>{d.last_login.slice(0,10)}</td>
                          <td> <NavLink className="btn btn-success" to={"/users/customer/"+d.id+"/edit"}>Edit</NavLink>
                          <ReactBootStrap.Button className="btn" variant="danger" onClick={this.deleteCustomer}>Delete</ReactBootStrap.Button> 
                              </td>
                      </tr>              
          ) 
          })
            return(
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


export default Customers;