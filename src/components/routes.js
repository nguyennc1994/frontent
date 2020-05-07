import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import Home from './Home/Home';
import Login from './Login/Login';
import NotFound from './NotFound/NotFound';
import Staffs from './Users/Staffs/Staffs';
import Customers from './Users/Customers/Customers';
import AddCustomer from './Users/Customers/AddCustomer';
import EditCustomer from './Users/Customers/EditCustomer';
import CustomerTypes from './Users/CustomerTypes/CustomerTypes';
import AddStaff from './Users/Staffs/AddStaff';
import Meters from './Meters/Meters';
import AddMeter from './Meters/AddMeter';
import EditMeter from './Meters/EditMeter';
import ReportInMeter from './Meters/ReportInMeter';
import Reports from './Reports/Reports';
import Bills from './Bills/Bills';
import EditStaff from './Users/Staffs/EditStaff';
import AddCustomerType from './Users/CustomerTypes/AddCustomerType';
import CustomerInfomation from './Users/Customers/CustomerInfomation';
import Barchart from './Charts/Barcharts/Barchart';


const Routes = () => (
    <BrowserRouter >
        <Switch>
            {/* <Route exact path="/" component={Welcome}/> */}
            {/* <Route path="/" component={Home} /> */}
            <Route path="/home" component={Home} />
            <Route path="/login" component={Login} />

            <Route path="/users/customers" component={Customers} />
            <Route path="/users/customer/add" component={AddCustomer} />
            <Route path="/users/customer/:id/edit" component={EditCustomer} />
            <Route path="/users/customer/:id/view" component={CustomerInfomation} />

            <Route path="/users/customertypes" component={CustomerTypes} />
            <Route path="/users/customertype/add" component={AddCustomerType} />

            <Route path="/users/staff/add" component={AddStaff} history={history}/>
            <Route path="/users/staffs" component={Staffs} />
            <Route path="/users/staff/:id/edit" component={EditStaff} />

            <Route path="/meters"  history={history} component={Meters} />
            <Route path="/meter/add" component={AddMeter} />
            <Route path="/meter/:id/edit" component={EditMeter} />
            <Route path="/meter/:id/report" component={ReportInMeter} />

            <Route path="/reports" component={Reports} />

            <Route path="/bills" component={Bills} />

            <Route path="/dashboards/chart1" component={Barchart} />

            <Route component={Home} />

           
        </Switch>
    </BrowserRouter>
);

export default Routes;