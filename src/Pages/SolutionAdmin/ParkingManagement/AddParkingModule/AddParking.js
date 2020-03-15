import React, { Component } from 'react';
import "./style.scss";

export default class AddParking extends Component {
    render() {
        return (
            <div>
                  <div className="modal">
                        <div className="modal__wrapper">
                            <div className="modal__wrapper_header">
                                <label className="modal__wrapper_header_heading">This is Modal Heading</label>
                            </div>
                            <div className="modal__wrapper_body">
                                <div className="modal__wrapper_body_section">
                                    This is Modal Body
                                </div>
                            </div>
                            <div className="modal__wrapper_footer">
                                <div className ="modal__wrapper_footer_section">
                                    This my is Modal footer
                                </div>
                            </div>
                        </div>
                    </div>
                
            </div>
        )
    }
}
