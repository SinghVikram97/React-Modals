import React, { Component } from "react";
export default class DeleteModal extends Component {
  // componentDidMount() {
  //   console.log(this.props.id);
  // }
  // componentDidUpdate() {
  //   console.log("ID:", this.props.id);
  // }
  handleDelete = () => {
    fetch(`http://3.219.31.158:4059/api/leads/${this.props.id}`, {
      method: "delete",
    })
      .then((data) => {
        console.log(data);
        this.props.updateList();
      })
      .catch((err) => {
        console.log(err);
      });
  };
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
            <div className="col s12 delete_lead_form">
              <button
                className="btn red white-text modal-close delete_lead_btn"
                onClick={this.handleDelete}
              >
                Delete
              </button>
              <button className="btn white black-text modal-close">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
