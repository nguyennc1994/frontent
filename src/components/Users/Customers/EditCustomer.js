import React, { Component } from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import Axios from 'axios';
import Sidebar from '../../Sidebar/Sidebar';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import './Customers.css';
import { PutData } from '../../../services/ApiCaller';

class AddCustomer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data_customertype:[],
            username: "",
            password: "",
            password2: "",
            full_name: "",
            birthday: "",
            is_check: false,
        
            address: "",
            person_num: "",
            customer_type: "",
            meter:""
        }
        this.addCustomer = this.editCustomer.bind(this);
        this.onChange = this.onChange.bind(this)
        this.onChangeCustomerType = this.onChangeCustomerType.bind(this)
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
    onChangeCustomerType = (e) => {

        this.setState({
            customer_type: e.target.value
        })
        console.log(e.target.value)
    }
    showCustomerType = (cus_type) => {
        if (cus_type===1) return "Hộ gia đình"
        else if (cus_type===2) return "Doanh nghiệp"
        else return "Chưa chọn kiểu"
    }

    getData() {
        let token = "Token " + localStorage.userData;
        this.setState({

            data_customertype: [],
            loading: true
        })
        Axios.get(`http://149.28.137.86:8000/api/customer/customertype/`, {
            headers: { 'Authorization': token }
        })
            .then(json => {
                this.setState({
                    data_customertype: json.data,
                    loading: false,
                })
            })
            
            .catch(e => {
                console.error(e)
                this.setState({
                    data_customertype: [],
                    loading: false,
                })
            })
    }
    componentDidMount() {
    
        let customerId = this.props.match.params.id;   
        console.log(customerId)
        Axios.get(`http://149.28.137.86:8000/api/accounts/customer/`+ customerId+`/`, {
            headers: { 'Authorization': "Token "+localStorage.userData }
        })
            .then(json => {
                var data= json.data
                var address=""
                var person_num=""
                var customer_type=""
                if(data.customerprofile==null) {address="Chưa nhập",person_num="Chưa nhập", customer_type="Chưa nhập"}
                     else {address=data.customerprofile.address,
                        person_num=data.customerprofile.person_num,customer_type=data.customerprofile.customer_type}
            

                     console.log(address)
                this.setState({
                   
                    username: data.username,
                    
                    
                    full_name: data.full_name,
                    birthday: data.birthday,
                    is_check: data.is_active,
                    
                    address: address,
                    person_num: person_num,
                    customer_type: customer_type,
                    meter:data.meter
                })
                console.log(this.state)
                console.log(data)
            })

            .catch(e => {
                console.error(e)
                this.setState({
                    data: [],
                    loading: false,
                })
            })
            this.getData()
    }
    

    editCustomer = (e) => {
        e.preventDefault();
        const customerId = this.props.match.params.id;   
        PutData(`http://149.28.137.86:8000/api/accounts/customer/`+customerId+`/`, {
            username:this.state.username,
            // password:this.state.password,
            // password2: this.state.password2,
            full_name: this.state.full_name,
            birthday: this.state.birthday,
            is_active: true,
            customerprofile :{
                address: this.state.address,
                person_num: this.state.person_num,
                customer_type: this.state.customer_type
            },
        })
            .then(result => {
                if(result.username===this.state.username) alert("Sửa tài khoản Customer thành công ")
                    else alert("Sửa tài khoản Customer không thành công")
            })
            .catch(e => {
                console.error(e)
            })
    }           


    render() {
        var { username, full_name, birthday, is_check, address,  person_num, customer_type, data_customertype } = this.state
        const theData = data_customertype.map((d) => {
            return (
                <option value={d.id} key={d.id}>    {d.id} --- {this.showCustomerType(d.cus_type)}  </option>
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
                                <ReactBootStrap.Form.Label className="text">Tên đăng nhập</ReactBootStrap.Form.Label>
                                <ReactBootStrap.Form.Control type="text" name="username" value={username} disabled onChange={this.onChange} placeholder="Tên đăng nhập" />
                            </ReactBootStrap.Form.Group>
                            {/* <ReactBootStrap.Form.Group controlId="">
                                <ReactBootStrap.Form.Label className="text">Mật khẩu</ReactBootStrap.Form.Label>
                                <ReactBootStrap.Form.Control type="password" name="password"  onChange={this.onChange} placeholder="Mật khẩu" />
                            </ReactBootStrap.Form.Group>
                            <ReactBootStrap.Form.Group controlId="">
                                <ReactBootStrap.Form.Label className="text">Nhập lại mật khẩu</ReactBootStrap.Form.Label>
                                <ReactBootStrap.Form.Control type="password" name="password2"  onChange={this.onChange} placeholder="Mật khẩu" />
                            </ReactBootStrap.Form.Group> */}
                            <ReactBootStrap.Form.Group controlId="">
                                <ReactBootStrap.Form.Label className="text">Họ tên người dùng</ReactBootStrap.Form.Label>
                                <ReactBootStrap.Form.Control type="text" name="full_name" value={full_name} onChange={this.onChange} placeholder="Nguyễn Văn A" />
                            </ReactBootStrap.Form.Group>
                            <ReactBootStrap.Form.Group controlId="">
                                <ReactBootStrap.Form.Label className="text">Ngày sinh</ReactBootStrap.Form.Label>
                                <ReactBootStrap.Form.Control type="date" name="birthday" value={birthday} onChange={this.onChange} placeholder="DD-MM-YYYY" />
                            </ReactBootStrap.Form.Group>
                            
                            <ReactBootStrap.Form.Group controlId="">
                                <ReactBootStrap.Form.Label className="text">Địa chỉ</ReactBootStrap.Form.Label>
                                <ReactBootStrap.Form.Control type="text" name="address" value={address} onChange={this.onChange} placeholder="Địa chỉ" />
                            </ReactBootStrap.Form.Group>
                            <ReactBootStrap.Form.Group controlId="">
                                <ReactBootStrap.Form.Label className="text">Số lượng nhân khẩu</ReactBootStrap.Form.Label>
                                <ReactBootStrap.Form.Control type="text" name="person_num" value={person_num} onChange={this.onChange} placeholder="Số lượng nhân khẩu" />
                            </ReactBootStrap.Form.Group>
                            <ReactBootStrap.Form.Group controlId="exampleForm.ControlSelect1">
                                <ReactBootStrap.Form.Label>Kiểu khách hàng</ReactBootStrap.Form.Label>
                            <ReactBootStrap.Form.Control name="customer_type" as="select" value={customer_type} onChange={this.onChangeCustomerType}>
                            
                                    {theData}
                                </ReactBootStrap.Form.Control>
                                </ReactBootStrap.Form.Group>
                            {/* <ReactBootStrap.Form.Group controlId="">
                                <ReactBootStrap.Form.Label className="text">Mã công tơ</ReactBootStrap.Form.Label>
                                <ReactBootStrap.Form.Control type="text" name="meter" value={meter} onChange={this.onChange} placeholder="Mã công tơ" />
                            </ReactBootStrap.Form.Group> */}
                            <ReactBootStrap.Form.Group id="formGridCheckbox">
                                <ReactBootStrap.Form.Check type="checkbox" value={is_check}label="Check me out" />
                            </ReactBootStrap.Form.Group>
                            <ReactBootStrap.Button variant="primary" type="submit" onClick={this.editCustomer}>
                                Sửa
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