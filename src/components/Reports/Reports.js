import React, { Component } from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import Axios from 'axios';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
// import './Customers.css';
import {NavLink} from 'react-router-dom'
class Reports extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userId : 1,
            data : [],
            loading: false,
        }
        this.getData = this.getData.bind(this)
   
    }

    getData(){    
        let token = "Token "+localStorage.userData;
        console.log(token);
        this.setState({

            data : [],
            loading : true
        })
        Axios.get(`http://127.0.0.1:8000/api/reports/`,{
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

    
    componentDidMount() {
        this.getData()
    }
    
    render() {
        // const { users, page, totalPages } = this.state;
        // const startIndex = page * TOTAL_PER_PAGE;
        const theData = this.state.data.map((d) => {
          return( 

                      <tr key={d.id}>
                          <td>{d.id}</td>
                          <td>{d.date_added.slice(0,10)}</td>
                          <td>{d.buy}</td>
                          <td>{d.use}</td>
                          <td>{d.credit}</td>
                          <td>{d.total}</td>
                          <td>{d.signal_strength}</td>
                          <td>{d.meter}</td>
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
                              <th>ID report</th>
                              <th>Ngày nhập</th>
                              <th>Mua</th>
                              <th>Sử dụng</th>
                              <th>Còn lại</th>
                              <th>Tổng lượng dùng</th>
                              <th>Tín hiệu</th>
                              <th>Mã công tơ</th>
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


export default Reports;