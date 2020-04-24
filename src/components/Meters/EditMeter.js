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
            pid_number : "",
            is_check : true,
        }
        this.editMeter = this.editMeter.bind(this);
        this.onChange = this.onChange.bind(this);   
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

    getCheckBox = () => {
        var checkBox = document.getElementById("myCheck");
        console.log("AAA")
        if (this.state.is_check == true){
            checkBox.checked=true;
          } else {
              checkBox.checked=false;
          }
    }
    
    componentDidMount(){
        const meterId = this.props.match.params.id;   
        Axios.get(`http://149.28.137.86:8000/api/v1/meters/meters/`+meterId+`/`, {
            headers: { 'Authorization': "Token "+localStorage.userData }
        })
            .then(json => {
                var data=json.data;
                console.log(data)
                this.setState({
                    pid_number: data.pid_number,
                    is_check: data.is_active,            
                })
                console.log(this.state)
                this.getCheckBox()
            })
            .catch(e => {
                console.error(e)
                this.setState({
                    data: [],
                    loading: false,
                })
            })    
    }
    
    checkCheckBox = () => {
        var checkBox = document.getElementById("myCheck");
        this.setState({
            is_check : checkBox.checked
            
        })
        console.log(checkBox.checked)
      }

    editMeter=(e) => {
        e.preventDefault();  
        const meterId = this.props.match.params.id;   
        if(this.state.pid_number){
            
                PutData(`http://149.28.137.86:8000/api/v1/meters/meters/`+meterId+`/`,
                    {
                        pid_number: this.state.pid_number,
                        customer: this.state.customer,
                        is_active: this.state.is_check,
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
        var { data_customer, pid_number } = this.state

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
                         
                            <ReactBootStrap.Form.Group id="formGridCheckbox">
                                <ReactBootStrap.Form.Label className="text">Trạng thái</ReactBootStrap.Form.Label>
                                <ReactBootStrap.InputGroup.Checkbox name="is_active" id="myCheck" onChange={this.checkCheckBox} />

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