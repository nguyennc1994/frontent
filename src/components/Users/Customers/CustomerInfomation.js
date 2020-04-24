import React, { Component } from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import Axios from 'axios';
import Sidebar from '../../Sidebar/Sidebar';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import { Redirect } from 'react-router-dom'
class CustomerInfomation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            redirectToReferrer: false,
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
        // this.addCustomer = this.editCustomer.bind(this);
        // this.onChange = this.onChange.bind(this)
        // this.onChangeCustomerType = this.onChangeCustomerType.bind(this)
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
                // console.log(this.state)
                // console.log(data)
            })

            .catch(e => {
                console.error(e)
                this.setState({
                    data: [],
                    loading: false,
                })
            })
            
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
        var { username, full_name, birthday, is_check, address,  person_num, customer_type, data_customertype } = this.state
        console.log(username)
        return (
            <div className="wrapper ">
                <Sidebar></Sidebar>

                <div className="main-panel">
                    <Header></Header>
                    <div className="content">
                    <ReactBootStrap.Form>
                            <ReactBootStrap.Form.Group controlId="">
                                <ReactBootStrap.Form.Label className="text">Tên đăng nhập</ReactBootStrap.Form.Label>
                                <ReactBootStrap.Form.Label className="text margin-left" value={username}>{username}</ReactBootStrap.Form.Label>
                            </ReactBootStrap.Form.Group>
                    </ReactBootStrap.Form>
                    </div>
                    <Footer></Footer>

                </div>
            </div>
        );
    }
}

export default CustomerInfomation;
