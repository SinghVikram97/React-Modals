import React, { Component } from "react";
export default class DeleteModal extends Component {
  componentDidMount() {
    console.log(this.props.id);
  }
  componentDidUpdate() {
    // Make api request here
  }
  render() {
    return (
      <div id="modal3" class="modal">
        <div class="modal-content">
          <div className="row">
            <div className="col s12">
              <h4 className="white-text black" style={{ padding: "1%" }}>
                Do you wish to delete this lead?
              </h4>
            </div>
          </div>
          <div className="row center-align">
            <div className="col s12">
              <button className="btn red white-text">Delete</button>
              <button className="btn white black-text">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
