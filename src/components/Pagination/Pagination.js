import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStepBackward, faFastBackward, faStepForward, faFastForward } from '@fortawesome/free-solid-svg-icons';
    
class Pagination extends Component {
    constructor(props) {
        super(props)
        this.state = {
            
            currentPage: 1,
            objectPerPage: 10,
        }
    }
    render() {
        return (
            <div style={{ "float": "right" }} className="row">
                                            {/* <nav aria-label="Page navigation example">
                                                <ul style={{ background: "#26c6da", }} className="pagination">
                                                    <li className="page-item"><button className="page-link" style={{ color: "#ffffff" }} disabled={currentPage === 1 ? true : false} onClick={this.firstPage}><FontAwesomeIcon icon={faFastBackward} /></button></li>
                                                    <li className="page-item"><button className="page-link" style={{ color: "#ffffff" }} disabled={currentPage === 1 ? true : false} onClick={this.prevPage}><FontAwesomeIcon icon={faStepBackward} /></button></li>
                                                    <li className="page-item"><button className="page-link" style={{ color: "#ffffff", fontWeight: "bold" }} name="currentPage" value={currentPage} onChange={this.changePage}>{currentPage}</button></li>
                                                    <li className="page-item"><button className="page-link" style={{ color: "#ffffff" }} disabled={currentPage === totalPages ? true : false} onClick={this.nextPage}><FontAwesomeIcon icon={faStepForward} /></button></li>
                                                    <li className="page-item"><button className="page-link" style={{ color: "#ffffff" }} disabled={currentPage === totalPages ? true : false} onClick={this.lastPage}><FontAwesomeIcon icon={faFastForward} /></button></li>
                                                </ul>
                                            </nav> */}
                                        </div>
        );
    }
}

export default Pagination;