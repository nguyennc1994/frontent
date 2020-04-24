import React, { Component } from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import Sidebar from '../../Sidebar/Sidebar';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import '../Customers/Customers.css';
import { PostData } from '../../../services/ApiCaller';
import { Redirect } from 'react-router-dom'

class AddCustomerType extends Component {
    constructor(props) {
        super(props)
        this.state = {
            redirectToReferrer: false,
            "username": "",
            "password": "",
            "password2": "",
            "full_name": "",
            "birthday": "",
            is_check: false,

        }
        this.addCustomer = this.addStaff.bind(this);
        this.onChange = this.onChange.bind(this)
    }

    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type === "checkbok" ? target.checked : target.value;
        this.setState({
            [name]: value
        })
        console.log(this.state)
    }

    // addStaff = (e) => {
    //     e.preventDefault();
    //     console.log(this.state)

    //     PostData('http://149.28.137.86:8000/api/accounts/auth/staff/create/',
    //         {
    //             "username": this.state.username,
    //             "password": this.state.password,
    //             "password2": this.state.password2,
    //             "full_name": this.state.full_name,
    //             "birthday": this.state.birthday,
    //             is_admin: this.state.is_check,
    //         }).then((result) => {
    //                   if(result.username===this.state.username) alert("Tạo tài khoản Staff thành công ")
    //                 else alert("Tạo tài khoản Staff không thành công")

    //         });


    // }

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
        return (
            <div className="wrapper ">
                <Sidebar></Sidebar>

                <div className="main-panel">
                    <Header></Header>
                    <div className="content">
                        <ReactBootStrap.Form onSubmit={this.onSave}>
                            <ReactBootStrap.Form.Group controlId="">
                                <ReactBootStrap.Form.Label className="text">Tên kiểu</ReactBootStrap.Form.Label>
                                <ReactBootStrap.Form.Control type="text" name="username" onChange={this.onChange} placeholder="Chưa nghĩ ra giải pháp" />
                            </ReactBootStrap.Form.Group>
                            
                            <ReactBootStrap.Button variant="primary" type="submit" onClick={this.addStaff}>
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


export default AddCustomerType;     