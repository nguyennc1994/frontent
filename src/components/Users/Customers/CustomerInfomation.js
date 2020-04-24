import React, { Component } from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import Axios from 'axios';
import Sidebar from '../../Sidebar/Sidebar';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import { Redirect } from 'react-router-dom'
import Search from '../../Search/Search'
class CustomerInfomation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            redirectToReferrer: false,
            dataReports: [],
            username: "",
            password: "",
            password2: "",
            full_name: "",
            birthday: "",
            is_active: false,
            date_joined: "",
            last_login: "",
            address: "",
            person_num: "",
            customer_type: "",
            meter: ""
        }
        this.checkStatus = this.checkStatus.bind(this)
        this.getDataReports = this.getDataReports.bind(this)
    }

    componentDidMount() {

        let customerId = this.props.match.params.id;
        console.log(customerId)
        Axios.get(`http://149.28.137.86:8000/api/v1/accounts/customer/` + customerId + `/`, {
            headers: { 'Authorization': "Token " + localStorage.userData }
        })
            .then(json => {
                var data = json.data
                console.log(data)
                var address = ""
                var person_num = ""
                var customer_type = ""
                var meter = ""
                if (data.customerprofile == null) { address = "Chưa nhập", person_num = "Chưa nhập", customer_type = "Chưa nhập", meter = "Chưa nhập" }
                else {
                    address = data.customerprofile.address,
                        person_num = data.customerprofile.person_num, customer_type = data.customerprofile.customer_type, meter = data.customerprofile.meter
                }

                this.setState({
                    username: data.username,
                    full_name: data.full_name,
                    birthday: data.birthday,
                    is_active: data.is_active,
                    address: address,
                    person_num: person_num,
                    customer_type: customer_type,
                    meter: meter,
                    last_login: data.last_login,
                    date_joined: data.date_joined

                })
                console.log(this.state)
                this.checkStatus(this.state.is_active)
                this.getDataReports()
            })

            .catch(e => {
                console.error(e)
                this.setState({
                    data: [],
                    loading: false,
                })
            })


    }
    getDataReports() {
        let token = "Token " + localStorage.userData;

        const meterId = this.state.meter;
        console.log(meterId);
        this.setState({

            dataReports: [],
            loading: true
        })
        Axios.get(`http://149.28.137.86:8000/api/v1/meters/reports/meter/` + meterId + `/`, {
            headers: { 'Authorization': token }
        })
            .then(json => {
                console.log(json.data)
                this.setState({
                    dataReports: json.data,
                    loading: false,
                })
            })
            .catch(e => {
                console.error(e)
                this.setState({
                    dataReports: [],
                    loading: false,
                })
            })
    }
    componentWillMount() {
        // this.checkStatus()
        if (localStorage.getItem("userData")) {
        }

        else {
            this.setState({ redirectToReferrer: true });
        }
    }
    checkStatus = (e) => {
        if (e) return "Đang hoạt động"
        else return "Ngưng hoạt động"
    }

    onSearch = (keyword) => {
        console.log(keyword)
        this.setState({
            keyword: keyword
        })
    }
    render() {

        if (this.state.redirectToReferrer) {
            return (<Redirect to={'/login'} />)
        }

        var { dataReports, username, full_name, birthday, is_active, address, date_joined, last_login, meter } = this.state



        // if(keyword){
        //     data = data.filter((data)=>{
        //         return (data.id.toLowerCase().indexOf(keyword)  !== -1 || data.meter.toLowerCase().indexOf(keyword)  !== -1 || data.date_added.toLowerCase().indexOf(keyword)  !== -1);
        //     })
        // }
        const theDataReports = dataReports.map((d) => {
            return (

                <tr key={d.id}>
                    <td>{d.id}</td>
                    <td>{d.meter}</td>
                    <td>{d.date_added.slice(0, 10)}</td>
                    <td>{d.buy}</td>
                    <td>{d.use}</td>
                    <td>{d.credit}</td>
                    <td>{d.total}</td>
                    <td>{d.signal_strength}</td>
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
                                <div className="card-header card-header-primary">
                                    <h4 className="card-title">Thông tin khách hàng</h4>
                                    {/* <p className="card-category">Complete your profile</p> */}
                                </div>
                                <div className="card-body">
                                    <form>
                                        <div className="row">
                                            <div className="col-md-3">
                                                <div className="form-group bmd-form-group">
                                                    <label className="col-4 left bmd-label-floating" style={{ paddingLeft: 0 }}>Tên đăng nhập</label>
                                                    <input type="text" value={username} className="col-8 right form-control" disabled />
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="form-group bmd-form-group">
                                                    <label className="col-3 bmd-label-floating">Họ và tên</label>
                                                    <input type="text" defaultValue={full_name} disabled className="col-9 right form-control" />
                                                </div>
                                            </div>
                                            <div className="col-md-5">
                                                <div className="form-group bmd-form-group">
                                                    <label className=" text col-3 bmd-label-floating">Mã công tơ</label>
                                                    <input type="text" defaultValue={meter} className="col-9 right form-control" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-3">
                                                <div className="form-group bmd-form-group">
                                                    <label className="col-4 bmd-label-floating" style={{ paddingLeft: 0 }}>Ngày sinh</label>
                                                    <input type="text" defaultValue={birthday} className="col-8 right form-control" />
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="form-group bmd-form-group">
                                                    <label className="col-3 bmd-label-floating">Ngày tạo</label>
                                                    <input type="text" defaultValue={date_joined.slice(0, 19)} className="col-9 right form-control" />
                                                </div>
                                            </div>
                                            <div className="col-md-5">
                                                <div className=" form-group bmd-form-group">
                                                    <label className="col-3 bmd-label-floating">Lần đăng nhập cuối</label>
                                                    <input type="text" defaultValue={last_login.slice(0, 19)} className="col-9 right form-control" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-7">
                                                <div className="form-group bmd-form-group">
                                                    <label className="col-2 bmd-label-floating" style={{ paddingLeft: 0 }}>Địa chỉ</label>
                                                    <input type="text" defaultValue={address} className="col-10 right form-control" />
                                                </div>
                                            </div>
                                            <div className="col-md-5">
                                                <div className="form-group bmd-form-group">
                                                    <label className="col-3 bmd-label-floating">Trạng thái hoạt động</label>
                                                    <input type="text" defaultValue={this.checkStatus()} className="col-9 right form-control" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="clearfix" />
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 mt-50">
                            <div className="card">
                                <div className="card-header card-header-info">
                                    <h4 className="card-title">Danh sách reports</h4>
                                    <p className="card-category"></p>
                                </div>
                                <div className="card-body">
                                    <Search onSearch={this.onSearch} />

                                    <ReactBootStrap.Table striped bordered hover>
                                        <thead>
                                            <tr>
                                                <th>ID report</th>
                                                <th>Mã công tơ</th>
                                                <th>Ngày nhập</th>
                                                <th>Mua</th>
                                                <th>Sử dụng</th>
                                                <th>Còn lại</th>
                                                <th>Tổng lượng dùng</th>
                                                <th>Tín hiệu</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            {theDataReports}
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

export default CustomerInfomation;
