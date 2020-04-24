import React, { Component } from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import Axios from 'axios';
import Sidebar from '../../Sidebar/Sidebar';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import '../Customers/Customers.css';
import { PutData } from '../../../services/ApiCaller';
import { Redirect } from 'react-router-dom'

class EditStaff extends Component {
    constructor(props) {
        super(props)
        this.state = {
            redirectToReferrer: false,
            username: "",
            password: "",
            re_password: "",
            full_name: "",
            birthday: "",
            is_active: false,
            is_admin: false,
            is_changePassword: false
        }
        this.addCustomer = this.editStaff.bind(this);
        this.changePassword = this.changePassword.bind(this);
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
    getCheckBox = () => {
        var adminCheckBox = document.getElementById("adminCheckBox");
        var statucCheckBox = document.getElementById("statusCheckBox");
        console.log("AAA")
        if (this.state.is_admin == true) {
            adminCheckBox.checked = true;
        } else {
            adminCheckBox.checked = false;
        }
        if (this.state.is_active == true) {
            statucCheckBox.checked = true;
        } else {
            statucCheckBox.checked = false;
        }
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
    componentDidMount() {
        const staffId = this.props.match.params.id;
        Axios.get(`http://149.28.137.86:8000/api/v1/accounts/staff/` + staffId + "/", {
            headers: { 'Authorization': "Token " + localStorage.userData }
        })
            .then(json => {
                var data = json.data;
                console.log(data)
                this.setState({
                    username: data.username,
                    password: data.password,

                    full_name: data.full_name,
                    birthday: data.birthday,
                    is_active: data.is_active,
                    is_admin: data.is_admin
                })
                console.log(this.state)
                this.getCheckBox()
            })
            .catch(e => {
                console.error(e)
                this.setState({
                    data: [],
                    loading: false,
                })
            })

    }
    changePassword = (e) => {
        e.preventDefault();
        const staffId = this.props.match.params.id;
            PutData(`http://149.28.137.86:8000/api/v1/accounts/staff/`+staffId+`/password_change`,{
                id : staffId,
                password: this.state.password,
                re_password: this.state.re_password,
               
            })
                .then(result => {
                    console.log(result.id)
                    if (result.id == staffId) alert("Sửa tài khoản Mật khẩu Customer thành công ")
                    else alert("Sửa tài khoản Mật khẩu Customer không thành công")
                })
                .catch(e => {
                    console.error(e)
                })
        }
    editStaff = (e) => {
        e.preventDefault();
        const staffId = this.props.match.params.id;
        PutData(`http://149.28.137.86:8000/api/v1/accounts/staff/` + staffId + '/',
            {
                username: this.state.username,
                full_name: this.state.full_name,
                birthday: this.state.birthday,
                is_admin: this.state.is_admin,
                is_active: this.state.is_active,
            }).then((result) => {
                if (result.username === this.state.username) alert("Sửa tài khoản Staff thành công ")
                else alert("Sửa tài khoản Staff không thành công")

            });


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
        var { username, full_name, birthday } = this.state
        return (
            <div className="wrapper ">
                <Sidebar></Sidebar>

                <div className="main-panel">
                    <Header></Header>
                    <div className="content">
                        <ReactBootStrap.Row>
                            <ReactBootStrap.Col md={6}>
                                <ReactBootStrap.Form onSubmit={this.onSave}>
                                    <ReactBootStrap.Form.Group controlId="">
                                        <ReactBootStrap.Form.Label className="text">Tên đăng nhập</ReactBootStrap.Form.Label>
                                        <ReactBootStrap.Form.Control type="text" value={username} disabled variant="danger" name="username" onChange={this.onChange} />
                                    </ReactBootStrap.Form.Group>
                                    <ReactBootStrap.Form.Group controlId="">
                                        <ReactBootStrap.Form.Label className="text">Họ tên người dùng</ReactBootStrap.Form.Label>
                                        <ReactBootStrap.Form.Control type="text" value={full_name} name="full_name" onChange={this.onChange} placeholder="Nguyễn Văn A" />
                                    </ReactBootStrap.Form.Group>
                                    <ReactBootStrap.Form.Group controlId="">
                                        <ReactBootStrap.Form.Label className="text">Ngày sinh</ReactBootStrap.Form.Label>
                                        <ReactBootStrap.Form.Control type="date" value={birthday} name="birthday" onChange={this.onChange} placeholder="MM-DD-YYYY" />
                                    </ReactBootStrap.Form.Group>
                                    <ReactBootStrap.Form.Group id="formGridCheckbox">
                                        <ReactBootStrap.Form.Label className="text">Quyền quản trị</ReactBootStrap.Form.Label>
                                        <ReactBootStrap.InputGroup.Checkbox name="is_active" id="adminCheckBox" onClick={this.adminCheckBox} />
                                    </ReactBootStrap.Form.Group>
                                    <ReactBootStrap.Form.Group id="formGridCheckbox">
                                        <ReactBootStrap.Form.Label className="text">Trạng thái hoạt động</ReactBootStrap.Form.Label>
                                        <ReactBootStrap.InputGroup.Checkbox name="is_active" id="statusCheckBox" onClick={this.statusCheckBox} />
                                    </ReactBootStrap.Form.Group>
                                    <ReactBootStrap.Button variant="primary" type="submit" onClick={this.editStaff}>Edit</ReactBootStrap.Button>
                                </ReactBootStrap.Form>
                            </ReactBootStrap.Col>
                            <ReactBootStrap.Col md={6}>
                                <ReactBootStrap.Form.Group controlId="">
                                    <ReactBootStrap.Form.Label className="text">Mật khẩu</ReactBootStrap.Form.Label>
                                    <ReactBootStrap.Form.Control type="password" name="password" disabled={this.state.disabled ? 'disabled' : null} onChange={this.onChange} placeholder="Mật khẩu" />
                                </ReactBootStrap.Form.Group>
                                <ReactBootStrap.Form.Group controlId="">
                                    <ReactBootStrap.Form.Label className="text">Nhập lại mật khẩu</ReactBootStrap.Form.Label>
                                    <ReactBootStrap.Form.Control type="password" name="re_password" onChange={this.onChange} placeholder="Mật khẩu" />
                                </ReactBootStrap.Form.Group>

                                <ReactBootStrap.Button variant="primary" type="submit" onClick={this.changePassword}>Đổi mật khẩu</ReactBootStrap.Button>
                            </ReactBootStrap.Col>
                        </ReactBootStrap.Row>
                    </div>
                    <Footer></Footer>

                </div>
            </div>
        );
    }
}


export default EditStaff;     