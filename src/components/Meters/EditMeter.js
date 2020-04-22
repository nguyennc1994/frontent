import React, { Component } from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import Axios from 'axios';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { PutData } from '../../services/ApiCaller';
// import './Customers.css';

class EditMeter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data_customer:[],
            customer:"",
            pid_number : "",
            is_check : true,
        }
        this.editMeter = this.editMeter.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onChangeCustomer = this.onChangeCustomer.bind(this)
    }

    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type==="checkbox" ? target.checked : target.value;
        this.setState({
            [name] : value
        })
        console.log(this.state)
    }
    onChangeCustomer = (e) => {

        this.setState({
            customer: e.target.value
        })
        console.log(this.state.customer)
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
            })
            .catch(e => {
                console.error(e)
                this.setState({
                    data_customer: [],
                    loading: false,
                })
            })
    } 

    // checkedCheckbox = (e) =>{
    //     var status= e.target.value
    //     if(status==="on") console.log("AAAA")
    // }
    componentDidMount(){
        const meterId = this.props.match.params.id;   
        console.log(meterId)
        Axios.get(`http://149.28.137.86:8000/api/meters/`+meterId+`/`, {
            headers: { 'Authorization': "Token "+localStorage.userData }
        })
            .then(json => {
                var data=json.data;
                console.log(data)
                this.setState({
                    pid_number: data.pid_number,
                    customer: data.customer,
                    is_check: data.is_active,            
                })
                console.log(this.state)
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

    editMeter=(e) => {
        e.preventDefault();  
        const meterId = this.props.match.params.id;   
        if(this.state.pid_number){
            
                PutData(`http://149.28.137.86:8000/api/meters/`+meterId+`/`,
                    {
                        pid_number: this.state.pid_number,
                        customer: this.state.customer,
                        is_active: true,
                })
                .then(json => {
                    console.log(json)               

                    })  
                    .catch(e => {
                        console.error(e)

                    })
                }
            }

    render() {  
        var { data_customer, customer, pid_number } = this.state
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
            return(
                <div className="wrapper ">
  			<Sidebar></Sidebar> 
			
  			<div className="main-panel">
			  	<Header></Header>
                  <div className="content">
                        <ReactBootStrap.Form>
                            <ReactBootStrap.Form.Group controlId="">
                                <ReactBootStrap.Form.Label className="text">Mã công tơ</ReactBootStrap.Form.Label>
                                <ReactBootStrap.Form.Control type="text" name="pid_number" disabled value={pid_number} onChange={this.onChange} placeholder="Mã công tơ" />
                            </ReactBootStrap.Form.Group>
                            <ReactBootStrap.Form.Group controlId="exampleForm.ControlSelect1">
                                <ReactBootStrap.Form.Label>Mã khách hàng</ReactBootStrap.Form.Label>
                                {/* <ReactBootStrap.Form.Control type="text" name="pid_number" placeholder="tim kiem" /> */}
                                <ReactBootStrap.Form.Control className="selectpicker" name="customer" as="select" value={customer} onChange={this.onChangeCustomer} data-live-search="true">
                                    {theData}
                                </ReactBootStrap.Form.Control>
                            </ReactBootStrap.Form.Group>
                            <ReactBootStrap.Form.Group id="formGridCheckbox">
                                <ReactBootStrap.Form.Label className="text">Trạng thái</ReactBootStrap.Form.Label>
                                <ReactBootStrap.InputGroup.Checkbox name="is_active" onChange={this.checkedCheckbox} />

                            </ReactBootStrap.Form.Group>

                            <ReactBootStrap.Button variant="primary" type="submit" onClick={this.editMeter}>
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


export default EditMeter;     