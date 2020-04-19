import React, { Component } from 'react';
import * as ReactBootStrap from 'react-bootstrap';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            keyword : ""
        })
        
    }
    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value; 
        console.log(value)
        this.setState({
            [name] : value
        })

        this.props.onSearch(value)
    }
    render() {
        var {keyword} = this.state
        return (
            <ReactBootStrap.Form className="col-4 right">
                                {/* <ReactBootStrap.Form.Label className="left text-search-field col-md-3">Tìm kiếm:</ReactBootStrap.Form.Label> */}
                                <ReactBootStrap.Form.Control className="right col-md-9" type="text" value={keyword} variant="danger" name="keyword" placeholder="Tìm kiếm" onChange={this.onChange   }/>
            </ReactBootStrap.Form>
        );
    }
}

export default Search;