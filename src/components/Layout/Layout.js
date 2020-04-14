import React, { Component } from 'react';

class Layout extends Component {
    render() {
        return (
            <div className="wrapper ">
            <Sidebar></Sidebar>
          
            <div className="main-panel">
                <Header></Header>
              <Content></Content>
                 <Footer></Footer>
 
            </div>
            </div>
        );
    }
}

export default Layout;