import React, { Component } from "react";
import "./Dashboard.css";
import AddModal from "./AddModal";
export default class Dashboard extends Component {
  state = {
    activeId: 0,
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s12">
            <button
              className="waves-effect waves-light btn black modal-trigger add_lead_modal_btn"
              data-target="modal1"
            >
              <i className="material-icons left">add</i>Add Lead
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            <table className="highlight responsive-table leads_table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Mobile No</th>
                  <th>Location Type</th>
                  <th>Location String</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Nilesh Aggarwal</td>
                  <td>abc@gmail.com</td>
                  <td>9871028111</td>
                  <td>City</td>
                  <td>India</td>
                  <td>
                    <button
                      className="btn black modal-trigger"
                      data-target="modal2"
                      data-id="1"
                      onClick={(e) => {
                        let id = e.target.getAttribute("data-id");
                        this.setState({ activeId: id });
                      }}
                    >
                      Mark Update
                    </button>
                    &nbsp;
                    <button className="btn black">Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Modals */}
        <div id="modal1" className="modal">
          <div className="modal-content">
            <h4 className="white-text black" style={{ padding: "1%" }}>
              Add Lead
            </h4>
            <div className="row" style={{ marginTop: "5%" }}>
              <form method="get" action="/form" className="col s12">
                <div className="row">
                  <div className="input-field col s6">
                    <input
                      id="first_name"
                      type="text"
                      className="validate"
                      required
                      name="first_name"
                    />
                    <label htmlFor="first_name">First Name</label>
                  </div>
                  <div className="input-field col s6">
                    <input
                      id="last_name"
                      type="text"
                      name="last_name"
                      className="validate"
                      required
                    />
                    <label htmlFor="last_name">Last Name</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s6">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="validate"
                      required
                    />
                    <label htmlFor="email">Email</label>
                  </div>
                  <div className="input-field col s6">
                    <input
                      name="mobile"
                      id="mobile"
                      type="tel"
                      className="validate"
                      required
                    />
                    <label htmlFor="mobile">Mobile</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s6">
                    <select
                      // className="browser-default"
                      id="location_type"
                      className="validate"
                      required
                      name="location_type"
                    >
                      <option value="" disabled selected id="default_option">
                        Location Type
                      </option>
                      <option value="1" className="black">
                        Country
                      </option>
                      <option value="2">State</option>
                      <option value="3">City</option>
                    </select>
                  </div>
                  <div className="input-field col s6">
                    <input
                      name="location_string"
                      id="location_string"
                      type="text"
                      className="validate"
                      required
                    />
                    <label htmlFor="location_string">Location String</label>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    onClick={() => console.log("hi")}
                    className="modal-close waves-effect waves-green btn-flat"
                  >
                    ADD
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <AddModal id={this.state.activeId} />
      </div>
    );
  }
}
