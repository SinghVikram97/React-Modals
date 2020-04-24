import React, { Component } from "react";

export default class Dashboard extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s12">
            <button class="waves-effect waves-light btn black add_lead_modal_btn">
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
                    <button className="btn black">Mark Update</button>&nbsp;
                    <button className="btn black">Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
