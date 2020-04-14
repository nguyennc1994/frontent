import React, { Component } from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import Axios from 'axios';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
// import './Users/Customers/Customers.css';
import {NavLink} from 'react-router-dom'
class Meters extends Component {
    constructor(props) {
        super(props)
        this.state = {

            is_active : false,

            data : [],
        }
        this.getData = this.getData.bind(this)
        this.delete = this.deleteCustomer.bind(this)
        this.showStatus = this.showStatus.bind(this)
    }

    getData(){    
        let token = "Token "+localStorage.userData;
        console.log(token);
        this.setState({

            data : [],
        })
        Axios.get(`http://127.0.0.1:8000/api/meters/`,{
            headers : {'Authorization' : token}
        })
        .then(json => {
            
            this.setState({
                data : json.data,
                })
            })  
            
            .catch(e => {
                // console.error(e)
                this.setState({
                    data : [],
                    })
            })
            console.log(this.state.data)
    }
    
    showStatus = (status) => {
        if(status) return(<span className="btn btn-info">Active</span>)
        else return (<span className="btn btn-danger">Deactive</span>) 
      }

    deleteCustomer(id){
        if(confirm("Bạn chắc chắn muốn xóa không?")) {

        let token = "Token "+localStorage.userData;
        let {data} = this.state;
        Axios.delete(`http://127.0.0.1:8000/api/meters/`+id+`/`,{
            headers : {'Authorization' : token}
        })
        .then(json => {
            
            if(json.status===200) 
            this.setState({
                    data : json.data,
                    })  

            })
        console.log(this.state.data)
    }}
    
    // findIndex = (data, id) => {
    //         var result = -1;
    //         products.forEach
    // }
    componentDidMount() {
        // console.log(this.state)
        this.getData()
    }
    
    render() {
        // const { users, page, totalPages } = this.state;
        // const startIndex = page * TOTAL_PER_PAGE;
        const theData = this.state.data.map((d) => {
           
          return( 

                      <tr key={d.id}>
                          <td>{d.id}</td>
                          <td>{d.pid_number}</td>
                          <td>{d.date_added.slice(0,10)}</td>
                          <td>{this.showStatus(d.is_active)}</td>
                          <td>{d.customer}</td>
                          <td> <NavLink className="btn btn-success" to={"/meter/"+d.id+"/edit"}>Edit</NavLink>
                          <ReactBootStrap.Button className="btn" variant="danger" onClick={() => this.deleteCustomer(d.id)}>Delete</ReactBootStrap.Button> 
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
                  
                <NavLink to="/meter/add" className="btn btn-info">Thêm</NavLink>
                 
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