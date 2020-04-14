import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
            <div className="container-fluid">
              <nav className="float-left">
                <ul>
                  <li>
                    <a href="https://stechiot.com/">
                      StechIoT
                    </a>
                  </li>
                  <li>
                    <a href="https://stechiot.com/">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="https://stechiot.com/">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="https://stechiot.com/">
                      Licenses
                    </a>
                  </li>
                </ul>
              </nav>
              <div className="copyright float-right">
                ©
                2020, made with StechIoT
              </div>
            </div>
          </footer>
        );
    }
}

export default Footer;