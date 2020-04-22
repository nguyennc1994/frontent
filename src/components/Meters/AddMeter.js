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
            is_check: true,
            customer: "",

        }
        this.addCustomer = this.addMeter.bind(this);
        this.onChange = this.onChange.bind(this)
        this.onChangeCustomer = this.onChangeCustomer.bind(this)
    }

    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type === "checkbox" ? true : target.value;
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
    getData() {
        let token = "Token " + localStorage.userData;
        this.setState({

            data_customer: [],
            loading: true
        })
        Axios.get(`http://149.28.137.86:8000/api/accounts/customer/`, {
            headers: { 'Authorization': token }
        })
            .then(json => {
                this.setState({
                    data_customer: json.data,
                    loading: false,
                })
                console.log(json.data)
            })
            
            .catch(e => {
                console.error(e)
                this.setState({
                    data_customer: [],
                    loading: false,
                })
            })
    }


    addMeter = (e) => {
        e.preventDefault();
        console.log(this.state)

        PostData('http://149.28.137.86:8000/api/meters/',
            {
                pid_number: this.state.pid_number,
                customer: this.state.customer,
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
        var { data_customer, customer } = this.state
        // if(keyword){
        //     data = data.filter((data)=>{
        //         return (data.pid_number.toLowerCase().indexOf(keyword)  !== -1 );
        //     })
        // }

        const theData = data_customer.map((d) => {
            return (
                <option value={d.id} key={d.id}>    {d.id} --- {d.username} --- {d.full_name}   </option>
            )

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
                            <ReactBootStrap.Form.Group controlId="exampleForm.ControlSelect1">
                                <ReactBootStrap.Form.Label>Mã khách hàng</ReactBootStrap.Form.Label>
                                <ReactBootStrap.Form.Control name="customer" as="select" value={customer} onChange={this.onChangeCustomer}>
                                <option>Chọn mã khách hàng</option>
                                    {theData}
                                </ReactBootStrap.Form.Control>
                            </ReactBootStrap.Form.Group>
                            <ReactBootStrap.Form.Group id="formGridCheckbox">
                                <ReactBootStrap.Form.Label className="text">Trạng thái</ReactBootStrap.Form.Label>
                                <ReactBootStrap.InputGroup.Checkbox name="is_active"  />

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