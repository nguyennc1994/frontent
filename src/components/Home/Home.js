import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'; 
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Home.css';
import Content from './Content/Content';
class Home extends Component {

	constructor(props) {
		super(props);
	
		this.state = {
		  data:[],
		  userFeed: '',
		  redirectToReferrer: false,
		  name:'',
		};
		
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
		  
        return (
            <div className="wrapper ">
  			<Sidebar></Sidebar>
			
  			<div className="main-panel">
			  	<Header></Header>
                <Content></Content>
				{/* <RouterURL></RouterURL> */}
   				<Footer></Footer>
   
  			</div>
		</div>
        );
    }
}

export default Home;