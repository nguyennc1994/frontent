import React, { Component } from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import Axios from 'axios';
import Sidebar from '../../Sidebar/Sidebar';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import '../Customers/Customers.css';
import { PutData } from '../../../services/ApiCaller';

class EditStaff extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",

            full_name: "",
            birthday: "",
            is_check: false,

        }
        this.addCustomer = this.editStaff.bind(this);
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

    componentDidMount(){
        const customerId = this.props.match.params.id;   
        console.log(customerId)
        Axios.get(`http://149.28.137.86:8000//api/accounts/staff/`+customerId+"/", {
            headers: { 'Authorization': "Token "+localStorage.userData }
        })
            .then(json => {
                var data=json.data;
                console.log(data)
                this.setState({
                    username: data.username,
                    password: data.password,
            
                    full_name: data.full_name,
                    birthday: data.birthday,
                    is_check: data.is_active,
                })
                console.log(this.state)
            })
            .catch(e => {
                console.error(e)
                this.setState({
                    data: [],
                    loading: false,
                })
            })

    }
    editStaff = (e) => {
        e.preventDefault();
        const customerId = this.props.match.params.id;   
        PutData(`http://149.28.137.86:8000//api/accounts/staff/`+customerId+'/',
            {
                "username": this.state.username,
                // "password": this.state.password,
                // "password2": this.state.password2,
                "full_name": this.state.full_name,
                "birthday": this.state.birthday,
                is_admin: this.state.is_check,
            }).then((result) => {
            });


    }

    render() {
        var { username, password, full_name, birthday, is_check  } = this.state
        return (
            <div className="wrapper ">
                <Sidebar></Sidebar>

                <div className="main-panel">
                    <Header></Header>
                    <div className="content">
                        <ReactBootStrap.Form onSubmit={this.onSave}>
                            <ReactBootStrap.Form.Group controlId="">
                                <ReactBootStrap.Form.Label className="text">Tên đăng nhập</ReactBootStrap.Form.Label>
                                <ReactBootStrap.Form.Control type="text" value={username} disabled variant="danger" name="username" onChange={this.onChange}/>
                            </ReactBootStrap.Form.Group>
                            {/* <ReactBootStrap.Form.Group controlId="">
                                <ReactBootStrap.Form.Label className="text">Mật khẩu</ReactBootStrap.Form.Label>
                                <ReactBootStrap.Form.Control type="password" value={password} name="password" onChange={this.onChange} placeholder="Mật khẩu" />
                            </ReactBootStrap.Form.Group> */}
                            {/* <ReactBootStrap.Form.Group controlId="">
                                <ReactBootStrap.Form.Label className="text">Nhập lại mật khẩu</ReactBootStrap.Form.Label>
                                <ReactBootStrap.Form.Control type="password" name="password2" onChange={this.onChange} placeholder="Mật khẩu" />
                            </ReactBootStrap.Form.Group> */}
                            <ReactBootStrap.Form.Group controlId="">
                                <ReactBootStrap.Form.Label className="text">Họ tên người dùng</ReactBootStrap.Form.Label>
                                <ReactBootStrap.Form.Control type="text" value={full_name} name="full_name" onChange={this.onChange} placeholder="Nguyễn Văn A" />
                            </ReactBootStrap.Form.Group>
                            <ReactBootStrap.Form.Group controlId="">
                                <ReactBootStrap.Form.Label className="text">Ngày sinh</ReactBootStrap.Form.Label>
                                <ReactBootStrap.Form.Control type="date" value={birthday} name="birthday" onChange={this.onChange} placeholder="MM-DD-YYYY" />
                            </ReactBootStrap.Form.Group>
                            <ReactBootStrap.Form.Group id="formGridCheckbox">
                                <ReactBootStrap.Form.Check type="checkbox" value={is_check} label="Check me out" />
                            </ReactBootStrap.Form.Group>
                            <ReactBootStrap.Button variant="primary" type="submit" onClick={this.editStaff}>Edit
                                
                    </ReactBootStrap.Button>
                        </ReactBootStrap.Form>

                    </div>
                    <Footer></Footer>

                </div>
            </div>
        );
    }
}


export default EditStaff;     