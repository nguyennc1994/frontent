import React, { Component } from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import Axios from 'axios';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
// import './Users/Customers/Customers.css';
import {NavLink} from 'react-router-dom'
class Bills extends Component {
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
        Axios.get(`http://149.28.137.86:8000//api/payments/bills/`,{
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
        Axios.delete(`http://149.28.137.86:8000//api/payments/bills/`+id+`/`,{
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
                          <td>{d.month}</td>
                          <td>{d.customer}</td>
                          <td>{d.meter}</td>
                          <td>{d.last_report}</td>
                          <td>{d.new_report}</td>
                          <td>{d.used_index}</td>
                          <td>{d.total_pay}</td>
                          <td>{this.showStatus(d.status)}</td>
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
                  </div>
   				<Footer></Footer>
   
  			</div>
		</div>


             


        );
    }
}


export default Bills;