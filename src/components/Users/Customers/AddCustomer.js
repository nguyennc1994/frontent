import React, { Component } from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import Axios from 'axios';
import Sidebar from '../../Sidebar/Sidebar';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import './Customers.css';
import { PostData } from '../../../services/ApiCaller';
class AddCustomer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
            password: "",
            full_name: "",
            birthday: "",
            is_check: false,
            // customerprofile :{
                address:"",
                person_num:"",
                customer_type:""
            // }
        }
        this.addCustomer = this.addCustomer.bind(this);
        this.onChange = this.onChange.bind(this)
    }

    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type === "checkbok" ? target.checked : target.value;
        this.setState({
            [name]: value
            // username: "",
            // password: "",
            // password: "",
            // full_name: "",
            // birthday: "",
            // is_check: false,
            // customerprofile :{
            //     address:"",
            //     person_num:"",
            //     customer_type:""}
        })
        console.log(this.state)
    }

    // componentDidMount(){
    //     var {match} = this.props;
    //     console.log(match)
    //     if(match) {
    //         var id = match.params.id;
    //         console.log(id)
    //     }
    // }
    addCustomer = (e) => {
        e.preventDefault();
        console.log(this.state)

        PostData('http://149.28.137.86:8000/api/accounts/auth/customer/create/',
            {
                username: this.state.username,
                password: this.state.password,
                password2: this.state.password2,
                full_name: this.state.full_name,
                birthday: this.state.birthday,
                is_active: this.state.is_check,
                customerprofile :{
                    address:this.state.address,
                    person_num:parseInt(this.state.person_num),
                    customer_type:this.state.customer_type
                }
            }).then((result) => {
                console.log(result)
                let responseJson = result;
                console.log(responseJson)
            });

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
                                <ReactBootStrap.Form.Control type="password" name="password2" onChange={this.onChange} placeholder="Mật khẩu" />
                            </ReactBootStrap.Form.Group>
                            <ReactBootStrap.Form.Group controlId="">
                                <ReactBootStrap.Form.Label className="text">Họ tên người dùng</ReactBootStrap.Form.Label>
                                <ReactBootStrap.Form.Control type="text" name="full_name" onChange={this.onChange} placeholder="Nguyễn Văn A" />
                            </ReactBootStrap.Form.Group>
                            <ReactBootStrap.Form.Group controlId="">
                                <ReactBootStrap.Form.Label className="text">Ngày sinh</ReactBootStrap.Form.Label>
                                <ReactBootStrap.Form.Control type="date" name="birthday" onChange={this.onChange} placeholder="DD-MM-YYYY" />
                            </ReactBootStrap.Form.Group>
                            
                            <ReactBootStrap.Form.Group controlId="">
                                <ReactBootStrap.Form.Label className="text">Địa chỉ</ReactBootStrap.Form.Label>
                                <ReactBootStrap.Form.Control type="password" name="address" onChange={this.onChange} placeholder="Địa chỉ" />
                            </ReactBootStrap.Form.Group>
                            <ReactBootStrap.Form.Group controlId="">
                                <ReactBootStrap.Form.Label className="text">Số lượng nhân khẩu</ReactBootStrap.Form.Label>
                                <ReactBootStrap.Form.Control type="text" name="person_num" onChange={this.onChange} placeholder="Số lượng nhân khẩu" />
                            </ReactBootStrap.Form.Group>
                            <ReactBootStrap.Form.Group controlId="">
                                <ReactBootStrap.Form.Label className="text">Kiểu khách hàng</ReactBootStrap.Form.Label>
                                <ReactBootStrap.Form.Control type="text" name="customer_type" onChange={this.onChange} placeholder="Kiểu khách hàng" />
                            </ReactBootStrap.Form.Group>
                            <ReactBootStrap.Form.Group controlId="">
                                <ReactBootStrap.Form.Label className="text">Mã công tơ</ReactBootStrap.Form.Label>
                                <ReactBootStrap.Form.Control type="text" name="meter" onChange={this.onChange} placeholder="Mã công tơ" />
                            </ReactBootStrap.Form.Group>
                            <ReactBootStrap.Form.Group id="formGridCheckbox">
                                <ReactBootStrap.Form.Check type="checkbox" label="Check me out" />
                            </ReactBootStrap.Form.Group>
                            <ReactBootStrap.Button variant="primary" type="submit" onClick={this.addCustomer}>
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