import React, { Component } from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import { PostData } from '../../services/PostData';
import './login.css'
class Login extends Component {

    //constructor dùng định dạng param 
    constructor(props) {
        super(props);
        this.state = {
            "username": "",
            "password": "",
            redirectToReferrer: false,
            "token": "",
        }
        this.login = this.login.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    login = (e) => {
        e.preventDefault();
        console.log(this.state)
        if (this.state.username && this.state.password) {
            PostData('token', this.state).then((result) => {
                console.log(result)
                let responseJson = result;

                if (responseJson.status === "1") {
                    sessionStorage.setItem('userData', JSON.stringify(responseJson));
                    localStorage.setItem('userData', responseJson.token);
                    localStorage.setItem('perm',responseJson.perm)
                    this.setState({ redirectToReferrer: true });
                }
                else {
                    console.log({ Error })
                    alert("Tai khoan hoac mat khau khong dung  ")
                }

            });
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,

        })
    }
    render() {
        if (this.state.redirectToReferrer) {
            return (<Redirect to={'/home'} />)
        }
        if (sessionStorage.getItem('userData')) {
            return (<Redirect to={'/home'} />)
        }

        return (


            <div id="login-form" className="content">
                <ReactBootStrap.Form>
                    <ReactBootStrap.Form.Group controlId="formBasicEmail">
                        <ReactBootStrap.Form.Label>Tên đăng nhập</ReactBootStrap.Form.Label>
                        <ReactBootStrap.Form.Control name="username" placeholder="Username" onChange={this.onChange} />
                        <ReactBootStrap.Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </ReactBootStrap.Form.Text>
                    </ReactBootStrap.Form.Group>

                    <ReactBootStrap.Form.Group controlId="formBasicPassword">
                        <ReactBootStrap.Form.Label>Mật khẩu </ReactBootStrap.Form.Label>
                        <ReactBootStrap.Form.Control name="password" type="password" placeholder="Password" onChange={this.onChange} />
                    </ReactBootStrap.Form.Group>

                    <ReactBootStrap.Button variant="primary" type="submit" onClick={this.login}>
                        Login

                    </ReactBootStrap.Button>
                </ReactBootStrap.Form>
            </div>
        );
    }
}

export default Login;