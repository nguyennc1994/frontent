import React, { Component } from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import Axios from 'axios';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
// import './Users/Customers/Customers.css';
import {Redirect} from 'react-router-dom'
class Bills extends Component {
    constructor(props) {
        super(props)
        this.state = {
            redirectToReferrer: false,
            is_active : false,

            data : [],
        }
        this.getData = this.getData.bind(this)
        this.showStatus = this.showStatus.bind(this)
    }

    getData(){    
        let token = "Token "+localStorage.userData;
        console.log(token);
        this.setState({

            data : [],
        })
        Axios.get(`http://149.28.137.86:8000/api/v1/payments/bills/`,{
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
        if(status) return(<span className="btn btn-info">Paid</span>)
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
        const theData = this.state.data.map((d) => {
           
          return( 
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
            return(
                <div className="wrapper ">
  			<Sidebar></Sidebar> 
			
  			<div className="main-panel">
			  	<Header></Header>
                <div className="content">
                  
               
                 
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