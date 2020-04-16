import React, { Component } from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { PostData } from '../../services/ApiCaller';
// import './Customers.css';

class AddCustomer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            "pid_number": "",
            is_check: false,
        }
        this.addCustomer = this.addMeter.bind(this);
        this.onChange = this.onChange.bind(this)
    }

    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type === "checkbox" ? target.checked : target.value;
        this.setState({
            [name]: value
        })
        console.log(this.state)
    }
    addMeter = (e) => {
        e.preventDefault();
        console.log(this.state)

        PostData('http://127.0.0.1:8000/api/meters/',
            {
                "pid_number": this.state.pid_number,
                is_active: this.state.is_check,
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
                        <ReactBootStrap.Form>
                            <ReactBootStrap.Form.Group controlId="">
                                <ReactBootStrap.Form.Label className="text">Mã công tơ</ReactBootStrap.Form.Label>
                                <ReactBootStrap.Form.Control type="text" name="pid_number" onChange={this.onChange} placeholder="Tên đăng nhập" />
                            </ReactBootStrap.Form.Group>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                            </div>
                            <ReactBootStrap.Form.Group id="formGridCheckbox">
                                <ReactBootStrap.Form.Check type="checkbox" label="Check me out" />
                            </ReactBootStrap.Form.Group>
                            <ReactBootStrap.Button variant="primary" type="submit" onClick={this.addMeter}>
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