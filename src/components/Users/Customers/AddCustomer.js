import React, { Component } from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import Sidebar from '../../Sidebar/Sidebar';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import './Customers.css';
import { PostData } from '../../../services/ApiCaller';
import Axios from 'axios';
import { NavLink, Redirect } from 'react-router-dom'
class AddCustomer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            redirectToReferrer: false,
            data_customertype: [],
            data_meter: [],
            username: "",
            password: "",
            password2: "",
            full_name: "",
            birthday: "",
            is_check: false,
            address: "",
            person_num: "",
            customer_type: "",
            meter: ""

        }
        this.addCustomer = this.addCustomer.bind(this);
        this.onChange = this.onChange.bind(this)
        this.onChangeCustomerType = this.onChangeCustomerType.bind(this)

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

    getDataCustomerType() {
        let token = "Token " + localStorage.userData;
        this.setState({

            data_customertype: [],
            loading: true
        })
        Axios.get(`http://149.28.137.86:8000/api/v1/customer/customertype`, {
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

    getDataMeter() {
        let token = "Token " + localStorage.userData;
        this.setState({

            data_customertype: [],
            loading: true
        })
        Axios.get(`http://149.28.137.86:8000/api/v1/meters/meters/`, {
            headers: { 'Authorization': token }
        })
            .then(json => {
                this.setState({
                    data_meter: json.data,
                    loading: false,
                })
            })

            .catch(e => {
                console.error(e)
                this.setState({
                    data_meter: [],
                    loading: false,
                })
            })
    }

    componentDidMount() {
        this.getDataCustomerType()
        this.getDataMeter()
    }

    addCustomer = (e) => {
        e.preventDefault();
        // console.log(this.state)

        PostData('http://149.28.137.86:8000/api/v1/accounts/customer/create',
            {
                username: this.state.username,
                password: this.state.password,
                re_password: this.state.password2,
                full_name: this.state.full_name,
                birthday: this.state.birthday,
                is_active: this.state.is_check,
                customerprofile: {
                    address: this.state.address,
                    person_num: this.state.person_num,
                    customer_type: this.state.customer_type,
                    meter: this.state.meter
                },
                // meter: this.state.meter
            }).then((result) => {
                console.log(result)
                if (result.username === this.state.username) alert("Tạo tài khoản Customer thành công ")
                else alert("Tạo tài khoản Customer không thành công")

            });

    }
    onChangeCustomerType = (e) => {

        this.setState({
            customer_type: e.target.value
        })
        console.log(e.target.value)
    }
    onChangeMeter = (e) => {

        this.setState({
            meter: e.target.value
        })
        console.log(e.target.value)
    }
    showCustomerType = (cus_type) => {
        if (cus_type === 1) return "Hộ gia đình"
        else if (cus_type === 2) return "Doanh nghiệp"
        else return "Chưa chọn kiểu"
    }
    checkedCheckBox = () => {
        var checkBox = document.getElementById("myCheck");
        this.setState({
            is_check: checkBox.checked

        })
        console.log(checkBox.checked)
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
        var { data_customertype, customer_type, data_meter, meter } = this.state
        const theDataCustomerType = data_customertype.map((d) => {
            return (
                <option value={d.id} key={d.id}>    {d.id} --- {this.showCustomerType(d.cus_type)}  </option>
            )
        })
        const theDataMeter = data_meter.map((d) => {
            return (
                <option value={d.pid_number} key={d.id}> {d.pid_number}</option>
            )
        })
        // console.log(theData)
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
                                <ReactBootStrap.Form.Control type="text" name="address" onChange={this.onChange} placeholder="Địa chỉ" />
                            </ReactBootStrap.Form.Group>
                            <ReactBootStrap.Form.Group controlId="">
                                <ReactBootStrap.Form.Label className="text">Số lượng nhân khẩu</ReactBootStrap.Form.Label>
                                <ReactBootStrap.Form.Control type="text" name="person_num" onChange={this.onChange} placeholder="Số lượng nhân khẩu" />
                            </ReactBootStrap.Form.Group>
                            <ReactBootStrap.Form.Group controlId="exampleForm.ControlSelect1">
                                <ReactBootStrap.Form.Label>Kiểu khách hàng</ReactBootStrap.Form.Label>
                                <ReactBootStrap.Form.Control name="customer_type" as="select" value={customer_type} onChange={this.onChangeCustomerType}>
                                    <option>Chọn kiểu khách hàng</option>
                                    {theDataCustomerType}
                                </ReactBootStrap.Form.Control>
                            </ReactBootStrap.Form.Group>
                            <ReactBootStrap.Form.Group controlId="exampleForm.ControlSelect1">
                                <ReactBootStrap.Form.Label>Kiểu khách hàng</ReactBootStrap.Form.Label>
                                <ReactBootStrap.Form.Control name="customer_type" as="select" value={meter} onChange={this.onChangeMeter}>
                                    <option>Mã công tơ</option>
                                    {theDataMeter}
                                </ReactBootStrap.Form.Control>
                            </ReactBootStrap.Form.Group>
                            <ReactBootStrap.Form.Group id="formGridCheckbox">
                                <ReactBootStrap.Form.Label className="text">Trạng thái hoạt động</ReactBootStrap.Form.Label>
                                <ReactBootStrap.InputGroup.Checkbox name="is_active" id="myCheck" onClick={this.checkedCheckBox} />
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