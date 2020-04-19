import React, { Component } from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { PostData } from '../../services/ApiCaller';
import Axios from 'axios';
// import './Customers.css';

class Meter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data :[],
            "pid_number": "",
            is_check: false,
            "customer":"",
            keyword : ""
        }
        this.addCustomer = this.addMeter.bind(this);
        this.onChange = this.onChange.bind(this)
    }

    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type === "checkbox" ? true : target.value;
        this.setState({
            [name]: value
        })
        console.log(this.state.is_check)
    }
    getData() {
        let token = "Token " + localStorage.userData;
        console.log(token);
        this.setState({

            data: [],
            loading: true
        })
        Axios.get(`http://149.28.137.86:8000//api/accounts/customer/`, {
            headers: { 'Authorization': token }
        })
            .then(json => {
                console.log(json.data)
                this.setState({
                    data: json.data,
                    loading: false,
                })
            })
            .catch(e => {
                console.error(e)
                this.setState({
                    data: [],
                    loading: false,
                })
            })
    }


    addMeter = (e) => {
        e.preventDefault();
        console.log(this.state)

        PostData('http://149.28.137.86:8000//api/meters/',
            {
                "pid_number": this.state.pid_number,
                "customer" : this.state.customer,
                is_active: this.state.is_check,
            }).then((result) => {
                console.log(result)
                let responseJson = result;
                console.log(responseJson)


            });
    }
    componentDidMount() {

        this.getData();
        console.log(this.state.data)
    }
    render() {
        var {data, customer} = this.state
        // if(keyword){
        //     data = data.filter((data)=>{
        //         return (data.pid_number.toLowerCase().indexOf(keyword)  !== -1 );
        //     })
        // }

        const theData = data.map((d) => {
            <ReactBootStrap.Dropdown.Item>{d.username}</ReactBootStrap.Dropdown.Item>
            // console.log(d.username)
        })
       
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
                            <ReactBootStrap.Dropdown>
                                <ReactBootStrap.Form.Label className="text">Mã khách hàng</ReactBootStrap.Form.Label>
                                <ReactBootStrap.Dropdown.Toggle variant="success" id="dropdown-basic">
                                    Dropdown Button
                                </ReactBootStrap.Dropdown.Toggle>

                                <ReactBootStrap.Dropdown.Menu>
                                    <ReactBootStrap.Form.Control type="text" name="customer" value={customer} onChange={this.onChange} placeholder="Mã khách hàng" />
                                    {theData}
                                    
                                </ReactBootStrap.Dropdown.Menu>
                                </ReactBootStrap.Dropdown>
                            <ReactBootStrap.Form.Group id="formGridCheckbox">
                            <ReactBootStrap.Form.Label className="text">Trạng thái</ReactBootStrap.Form.Label>
                            <ReactBootStrap.InputGroup.Checkbox name="is_active" onChange={this.onChange}  />
                            
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


export default Meter;     