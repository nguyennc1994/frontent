import React, { Component } from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import Axios from 'axios';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
// import './Customers.css';

class AddCustomer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            "pid_number" : "",
            is_check : false,
        }
        this.addCustomer = this.addCustomer.bind(this);
        this.onChange = this.onChange.bind(this)
    }

    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type==="checkbox" ? target.checked : target.value;
        this.setState({
            [name] : value
        })
        console.log(this.state)
    }
    addCustomer=(e) => {
        e.preventDefault();  
        console.log(this.state)
        if(this.state.pid_number){
                // const { userId } = this.state
                // 
                let token = "Token "+localStorage.userData;
                console.log(token);
                Axios.put(`http://149.28.137.86:8000//api/meters/`,{
                    headers : {'Authorization' : token,
                    'Content-Type': 'application/json',
                    Accept: 'application/json',},
                    body : JSON.stringify({
                        "pid_number" : this.state.pid_number,
                        is_active : this.state.is_check,
                        
                    })
                })
                .then(json => {
                    console.log(json)               

                    })  
                    .catch(e => {
                        console.error(e)

                    })
                }
            }
    render() {  
            return(
                <div className="wrapper ">
  			<Sidebar></Sidebar> 
			
  			<div className="main-panel">
			  	<Header></Header>
                <div className="content">
                <ReactBootStrap.Form>
                    <ReactBootStrap.Form.Group controlId="">
                        <ReactBootStrap.Form.Label className="text">Mã công tơ</ReactBootStrap.Form.Label>
                        <ReactBootStrap.Form.Control type="text" name="pid_number"  onChange={this.onChange} placeholder="Tên đăng nhập" />
                    </ReactBootStrap.Form.Group>  
                    <ReactBootStrap.Form.Group id="formGridCheckbox">
                        <ReactBootStrap.Form.Check type="checkbox" label="Check me out" />
                    </ReactBootStrap.Form.Group>
                    <ReactBootStrap.Button variant="primary" type="submit"  onClick={this.addCustomer}>
                        Thêm
                    </ReactBootStrap.Button>
                </ReactBootStrap.Form>
                   
                  </div>
   				<Footer></Footer>
   
  			</div>
		</div>
        );
    }
}


export default AddCustomer;     