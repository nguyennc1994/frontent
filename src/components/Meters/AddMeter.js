import React, { Component } from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { PostData } from '../../services/ApiCaller';
import Axios from 'axios';
// import './Customers.css';

class AddMeter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data_customer: [],
            pid_number: "",
            is_check: false,
            customer: "",

        }
        this.addCustomer = this.addMeter.bind(this);
        this.onChange = this.onChange.bind(this)
        this.onChangeCustomer = this.onChangeCustomer.bind(this)
    }

    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        })
        console.log(this.state)
    }
    onChangeCustomer = (e) => {

        this.setState({
            customer: e.target.value
        })
        console.log(e.target.value)
    }

    addMeter = (e) => {
        e.preventDefault();
        console.log(this.state)

        PostData('http://149.28.137.86:8000/api/v1/meters/meters/',
            {
                pid_number: this.state.pid_number,
                customer: this.state.customer,
                is_active: this.state.is_check,
            }).then((result) => {
                if(result.username===this.state.username) alert("Tạo tài khoản Meter thành công ")
                    else alert("Tạo tài khoản Meter không thành công")
            });
    }

     checkedCheckBox = () => {
        var checkBox = document.getElementById("myCheck");
          this.setState({
              is_check : checkBox.checked
              
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
                        <ReactBootStrap.Form>
                            <ReactBootStrap.Form.Group controlId="">
                                <ReactBootStrap.Form.Label className="text">Mã công tơ</ReactBootStrap.Form.Label>
                                <ReactBootStrap.Form.Control type="text" name="pid_number" onChange={this.onChange} placeholder="Mã công tơ" />
                            </ReactBootStrap.Form.Group>
                            <ReactBootStrap.Form.Group id="formGridCheckbox">
                                <ReactBootStrap.Form.Label className="text">Trạng thái</ReactBootStrap.Form.Label>
                                <ReactBootStrap.InputGroup.Checkbox name="is_active" id="myCheck"  onClick={this.checkedCheckBox}  />
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


export default AddMeter;     