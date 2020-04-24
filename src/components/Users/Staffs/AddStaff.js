import React, { Component } from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import Sidebar from '../../Sidebar/Sidebar';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import '../Customers/Customers.css';
import { PostData } from '../../../services/ApiCaller';

class AddStaff extends Component {
    constructor(props) {
        super(props)
        this.state = {
            "username": "",
            "password": "",
            "re_password": "",
            "full_name": "",
            "birthday": "",
            is_admin: false,
            is_active:false


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

    addStaff = (e) => {
        e.preventDefault();
        console.log(this.state)

        PostData('http://149.28.137.86:8000/api/v1/accounts/staff/create',
            {
                "username": this.state.username,
                "password": this.state.password,
                "re_password": this.state.re_password,
                "full_name": this.state.full_name,
                "birthday": this.state.birthday,
                is_admin: this.state.is_admin,
                is_active : this.state.is_active
            }).then((result) => {
                      if(result.username===this.state.username) alert("Tạo tài khoản Staff thành công ")
                    else alert("Tạo tài khoản Staff không thành công")

            });


    }
    adminCheckBox = () => {
        var checkBox = document.getElementById("adminCheckBox");
        this.setState({
            is_admin: checkBox.checked

        })
        console.log(checkBox.checked)
    }
    statusCheckBox = () => {
        var checkBox = document.getElementById("statusCheckBox");
        this.setState({
            is_active: checkBox.checked

        })
        console.log(checkBox.checked)
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
                                <ReactBootStrap.Form.Control type="password" name="re_password" onChange={this.onChange} placeholder="Mật khẩu" />
                            </ReactBootStrap.Form.Group>
                            <ReactBootStrap.Form.Group controlId="">
                                <ReactBootStrap.Form.Label className="text">Họ tên người dùng</ReactBootStrap.Form.Label>
                                <ReactBootStrap.Form.Control type="text" name="full_name" onChange={this.onChange} placeholder="Nguyễn Văn A" />
                            </ReactBootStrap.Form.Group>
                            <ReactBootStrap.Form.Group controlId="">
                                <ReactBootStrap.Form.Label className="text">Ngày sinh</ReactBootStrap.Form.Label>
                                <ReactBootStrap.Form.Control type="date" name="birthday" onChange={this.onChange} placeholder="MM-DD-YYYY" />
                            </ReactBootStrap.Form.Group>
                            <ReactBootStrap.Form.Group id="formGridCheckbox">
                                <ReactBootStrap.Form.Label className="text">Quyền quản trị</ReactBootStrap.Form.Label>
                                <ReactBootStrap.InputGroup.Checkbox name="is_active" id="adminCheckBox" onClick={this.adminCheckBox} />
                            </ReactBootStrap.Form.Group>
                            <ReactBootStrap.Form.Group id="formGridCheckbox">
                                <ReactBootStrap.Form.Label className="text">Trạng thái hoạt động</ReactBootStrap.Form.Label>
                                <ReactBootStrap.InputGroup.Checkbox name="is_active" id="statusCheckBox" onClick={this.statusCheckBox} />
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


export default AddStaff;     