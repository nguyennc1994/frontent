import React, { Component } from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import Axios from 'axios';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Search from '../Search/Search';
import Pagination from "react-js-pagination";
// require("bootstrap/less/bootstrap.less");
// import './Customers.css';
// import { NavLink } from 'react-router-dom'
class Reports extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            loading: false,
            keyword:"",
            activePage: 1
        }
        this.getData = this.getData.bind(this)
        this.compareBy = this.compareBy.bind(this);
        this.sortBy = this.sortBy.bind(this);
    }
    handlePageChange(pageNumber) {
        console.log(`active page is ${pageNumber}`);
        this.setState({activePage: pageNumber});
      }
    getData() {
        let token = "Token " + localStorage.userData;
        console.log(token);
        this.setState({

            data: [],
            loading: true
        })
        Axios.get(`http://149.28.137.86:8000/api/v1/meters/reports/`, {
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
    compareBy(key) {
        if(this.state.sorted===true){
        return function (a, b) {
          if (a[key] < b[key]) return -1;
          if (a[key] > b[key]) return 1;
          return 0;
            }
            // this.setState({
            //     sorted : false
            // })
            // console.log(this.state.sorted)
        }
        else{
            return function (a, b) {
                if (a[key] > b[key]) return -1;
                if (a[key] < b[key]) return 1;
                return 0;
              }
            }
        }
      
    
     
      sortBy(key) {
        let arrayCopy = this.state.data;
        arrayCopy.sort(this.compareBy(key));
        this.setState({data: arrayCopy});
      }

    componentDidMount() {
        this.getData()
    }
    onSearch = (keyword) => {
        console.log(keyword)
        this.setState({
            keyword :keyword
        })
    }

    render() {
        var {data, keyword} = this.state
       
        // if(keyword){
        //     data = data.filter((data)=>{
        //         return (data.id.toLowerCase().indexOf(keyword)  !== -1 || data.meter.toLowerCase().indexOf(keyword)  !== -1 || data.date_added.toLowerCase().indexOf(keyword)  !== -1);
        //     })
        // }
        var totalItemsCount=data.length;
        const theData = data.map((d) => {
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
                    <Search onSearch={this.onSearch}/>

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
                                {theData}
                            </tbody>
                        </ReactBootStrap.Table>
                        <div>
        <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={10}
          totalItemsCount={totalItemsCount}
          pageRangeDisplayed={5}
          onChange={this.handlePageChange.bind(this)}
        />
      </div>
                    </div>
                    <Footer></Footer>

                </div>
            </div>





        );
    }
}


export default Reports;