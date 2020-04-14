import React from 'react';
import {BrowserRouter,  Route,  Switch} from 'react-router-dom';

import Customers from './Users/Customers/Customers';
import Home from './Home/Home';
import Login from './Login/Login';
import NotFound from './NotFound/NotFound';
import Staffs from './Users/Staffs/Staffs';
import AddCustomer from './Users/Customers/AddCustomer';
import EditCustomer from './Users/Customers/EditCustomer';
import AddStaff from './Users/Staffs/AddStaff';
import Meters from './Meters/Meters';
import AddMeter from './Meters/AddMeter';
import EditMeter from './Meters/EditMeter';
import Reports from './Reports/Reports';


const Routes = () => (
            <BrowserRouter >
                <Switch>
                    {/* <Route exact path="/" component={Welcome}/> */}
                    
                    <Route path="/home" component={Home}/>
                    <Route path="/login" component={Login}/>

                    <Route path="/users/customers" component={Customers}/>
                    <Route path="/users/customer/add" component={AddCustomer}/>
                    <Route path="/users/customer/:id/edit" component={EditCustomer}/>

                    <Route path="/users/staff/add" component={AddStaff }/>
                    <Route path="/users/staffs" component={Staffs}/>

                    <Route path="/meters" component={Meters}/>
                    <Route path="/meter/add" component={AddMeter }/>
                    <Route path="/meter/:id/edit" component={EditMeter} />

                    <Route path="/reports" component={Reports}/>

                    <Route component={NotFound}/>
                </Switch>
            </BrowserRouter>
);  
      
export default Routes;