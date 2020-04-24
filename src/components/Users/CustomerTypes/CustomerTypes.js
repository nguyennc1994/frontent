import React, { Component } from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import Axios from 'axios';
import Sidebar from '../../Sidebar/Sidebar';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
// import './Customers.css';
import { Redirect, NavLink } from 'react-router-dom'
class CustomerTypes extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userId: 1,
            data: [],
            loading: false,
        }
        this.getData = this.getData.bind(this)
        this.showPayType = this.showPayType.bind(this)
        this.showCustomerType = this.showCustomerType.bind(this)
    }

    getData() {
        let token = "Token " + localStorage.userData;
        console.log(token);
        this.setState({

            data: [],
            loading: true
        })
        Axios.get(`http://149.28.137.86:8000/api/v1/customer/customertype`, {
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
    showCustomerType = (cus_type) => {
        if (cus_type === 1) return (<span > Hộ gia đình</span>)
        else if (cus_type === 2) return (<span>Doanh nghiệp</span>)
        else return (<span>Chưa chọn kiểu</span>)
    }
    showPayType = (pay_type) => {
        if (pay_type === 1) return (<span >Trả trước</span>)
        else if (pay_type === 2) return (<span>Trả sau</span>)
        else return (<span>Chưa chọn kiểu</span>)
    }

    componentDidMount() {
        this.getData()
    }


    componentWillMount() {
        if (localStorage.getItem("userData")) {
        }

        else {
            this.setState({ redirectToReferrer: true });
        }
    }

    render() {

        if (this.state.redirectToReferrer) {
            return (<Redirect to={'/login'} />)
        }
        const theData = this.state.data.map((d) => {
            return (

                <tr key={d.id}>
                    <td>{d.id}</td>
                    <td>{d.name}</td>
                    <td>{this.showCustomerType(d.cus_type)}</td>
                    <td>{this.showPayType(d.pay_type)}</td>
                    <td>Ngày {d.deadline_payment} hàng tháng </td>
                    <td> <NavLink className="btn btn-success disabled " to={"/users/customertype/" + d.id + "/edit"}>Edit</NavLink>
                    </td>
                </tr>
            )
        })
        return (
            <div className="wrapper ">
                <Sidebar></Sidebar>

                <div className="main-panel">
                    <Header></Header>
                    <div className="content">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header card-header-info">
                                    <h4 className="card-title">Danh sách Kiểu khách hàng</h4>
                                    <p className="card-category"></p>
                                </div>
                                <div className="card-body">
                                    <NavLink to="/users/customertype/add"  className="btn btn-info disabled">Thêm</NavLink>

                                    <ReactBootStrap.Table striped bordered hover>
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Tên kiểu</th>
                                                <th>Kiểu khách hàng</th>
                                                <th>Kiểu thanh toán</th>
                                                <th>Kỳ hạn thanh toán</th>
                                                <th>Hành động</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {theData}
                                        </tbody>
                                    </ReactBootStrap.Table>
                                </div>
                            </div>
                        </div>


                    </div>
                    <Footer></Footer>

                </div>
            </div>





        );
    }
}


export default CustomerTypes;