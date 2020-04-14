import React, { Component } from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import Axios from 'axios';
import Sidebar from '../../Sidebar/Sidebar';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import './Customers.css';
import {PostData} from '../../../services/ApiCaller';
class AddCustomer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            "username" : "",
            "password" : "",
            "password2" : "",
            "full_name" : "",
            "birthday" : "",
            is_check : false,
        }
        this.addCustomer = this.addCustomer.bind(this);
        this.onChange = this.onChange.bind(this)
    }

    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type==="checkbok" ? target.checked : target.value;
        this.setState({
            [name] : value
        })
        console.log(this.state)
    }
    addCustomer=(e) => {
        e.preventDefault();  
        console.log(this.state)
        
                PostData('',
                    {"username" : this.state.username,
                    "password" : this.state.password,
                    "password2" : this.state.password2,
                    "full_name" : this.state.full_name,
                    "birthday" : this.state.birthday,
                    is_active : this.state.is_check,
                }).then((result) => {
                    console.log(result)  
                 let responseJson = result;
                 console.log(responseJson)
                });
                
            }
    onSave = (e) => {
        e.preventDefault();
        console.log(this.state)
    }
    
    
    render() {  
            return(
                <div className="wrapper ">
  			<Sidebar></Sidebar> 
			
  			<div className="main-panel">
			  	<Header></Header>
                <div className="content">
                <ReactBootStrap.Form onSubmit={this.onSave}>
                    <ReactBootStrap.Form.Group controlId="">
                        <ReactBootStrap.Form.Label className="text">Tên đăng nhập</ReactBootStrap.Form.Label>
                        <ReactBootStrap.Form.Control type="text" name="username"  onChange={this.onChange} placeholder="Tên đăng nhập" />
                    </ReactBootStrap.Form.Group>
                    <ReactBootStrap.Form.Group controlId="">
                        <ReactBootStrap.Form.Label  className="text">Mật khẩu</ReactBootStrap.Form.Label>
                        <ReactBootStrap.Form.Control type="password" name="password"  onChange={this.onChange} placeholder="Mật khẩu" />
                    </ReactBootStrap.Form.Group>
                    <ReactBootStrap.Form.Group controlId="">
                        <ReactBootStrap.Form.Label  className="text">Nhập lại mật khẩu</ReactBootStrap.Form.Label>
                        <ReactBootStrap.Form.Control type="password" name="password2"  onChange={this.onChange} placeholder="Mật khẩu" />
                    </ReactBootStrap.Form.Group>
                    <ReactBootStrap.Form.Group controlId="">
                        <ReactBootStrap.Form.Label  className="text">Họ tên người dùng</ReactBootStrap.Form.Label>
                        <ReactBootStrap.Form.Control type="text" name="full_name"  onChange={this.onChange} placeholder="Nguyễn Văn A" />
                    </ReactBootStrap.Form.Group>
                    <ReactBootStrap.Form.Group controlId="">
                        <ReactBootStrap.Form.Label  className="text">Ngày sinh</ReactBootStrap.Form.Label>
                        <ReactBootStrap.Form.Control type="date" name="birthday" onChange={this.onChange} placeholder="DD-MM-YYYY" />
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