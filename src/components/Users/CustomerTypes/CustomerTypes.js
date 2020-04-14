import React, { Component } from 'react';
import * as ReactBootStrap from 'react-bootstrap';

class CustomerTypes extends Component {
	
    render() {
        return (
            <div className="content">
            	<ReactBootStrap.Table striped bordered hover>
				<thead>
					<tr>
						<th>#</th>
						<th>CustomerTypes Name</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>1</td>
						<td>Mark</td>
					</tr>				
				</tbody>
  				</ReactBootStrap.Table>
			</div>
    
        );
    }
}

export default CustomerTypes;