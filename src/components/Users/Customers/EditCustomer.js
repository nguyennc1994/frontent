import React, { Component } from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import Axios from 'axios';
import Sidebar from '../../Sidebar/Sidebar';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import './Customers.css';

class AddCustomer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            "username": "",
            "password": "",
            "password2": "",
            "full_name": "",
            "birthday": "",
            is_check: false,
        }
        this.addCustomer = this.editCustomer.bind(this);
        this.onChange = this.onChange.bind(this)
    }

    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type === "checkbok" ? target.checked : target.value;
        this.setState({
            [name]: value
        })
    }

    componentDidMount() {
    
        let customerId = this.props.match.params.id;   
        console.log(customerId)
        // Axios.get(`http://127.0.0.1:8000/api/accounts/staff/`+ customerId, {
        //     headers: { 'Authorization': "Token "+localStorage.userData }
        // })
        //     .then(json => {
        //         console.log(json.data)
        //         this.setState({
        //             data: json.data,
        //         })
        //     })
        //     .catch(e => {
        //         console.error(e)
        //         this.setState({
        //             data: [],
        //             loading: false,
        //         })
        //     })
    }
    

    editCustomer = (e) => {
        e.preventDefault();
        let token = "Token " + localStorage.userData;
        Axios.put(`http://127.0.0.1:8000/api/accounts/auth/customer/12/update/`, {
            headers: { 'Authorization': token },
            body: {

            }
        })
            .then(json => {
     

            })
            .catch(e => {
                console.error(e)

            })
    }           


    render() {
        return (
            <div className="wrapper ">
                <Sidebar></Sidebar>

                <div className="main-panel">
                    <Header></Header>
                    <div className="content">
                        <ReactBootStrap.Form onSubmit={this.onSave}>
                            <ReactBootStrap.Form.Group controlId="">
                                <ReactBootStrap.Form.Label className="text">Tên đăng nhập</ReactBootStrap.Form.Label>
                                <ReactBootStrap.Form.Control type="text" name="username" onChange={this.onChange} placeholder="Tên đăng nhập" />
                            </ReactBootStrap.Form.Group>
                            <ReactBootStrap.Form.Group controlId="">
                                <ReactBootStrap.Form.Label className="text">Mật khẩu</ReactBootStrap.Form.Label>
                                <ReactBootStrap.Form.Control type="password" name="password" onChange={this.onChange} placeholder="Mật khẩu" />
                            </ReactBootStrap.Form.Group>
                            <ReactBootStrap.Form.Group controlId="">
                                <ReactBootStrap.Form.Label className="text">Nhập lại mật khẩu</ReactBootStrap.Form.Label>
                                <ReactBootStrap.Form.Control type="password" name="repassword" onChange={this.onChange} placeholder="Mật khẩu" />
                            </ReactBootStrap.Form.Group>
                            <ReactBootStrap.Form.Group controlId="">
                                <ReactBootStrap.Form.Label className="text">Họ tên người dùng</ReactBootStrap.Form.Label>
                                <ReactBootStrap.Form.Control type="text" name="full_name" onChange={this.onChange} placeholder="Nguyễn Văn A" />
                            </ReactBootStrap.Form.Group>
                            <ReactBootStrap.Form.Group controlId="">
                                <ReactBootStrap.Form.Label className="text">Ngày sinh</ReactBootStrap.Form.Label>
                                <ReactBootStrap.Form.Control type="date" name="birthday" onChange={this.onChange} placeholder="DD-MM-YYYY" />
                            </ReactBootStrap.Form.Group>
                            <ReactBootStrap.Form.Group id="formGridCheckbox">
                                <ReactBootStrap.Form.Check type="checkbox" label="Check me out" />
                            </ReactBootStrap.Form.Group>
                            <ReactBootStrap.Button variant="primary" type="submit" onClick={this.editCustomer}>
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