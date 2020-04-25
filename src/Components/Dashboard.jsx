import React, { Component } from "react";
import "./Dashboard.css";
import AddModal from "./AddModal";
import AddLeadModal from "./AddLeadModal";
import DeleteModal from "./DeleteModal";
export default class Dashboard extends Component {
  state = {
    activeId: 0,
    list: [],
    add: true,
  };
  componentDidMount() {
    this.updateList();
  }
  updateList = () => {
    fetch("http://18.209.209.196:4059/api/leads/")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({ list: data });
      });
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
                {this.state.list.map((lead) => {
                  const {
                    first_name,
                    last_name,
                    mobile,
                    email,
                    location_type,
                    location_string,
                    id,
                  } = lead;
                  return (
                    <tr>
                      <td>{`${first_name} ${last_name}`}</td>
                      <td>{`${email}`}</td>
                      <td>{`${mobile}`}</td>
                      <td>{`${location_type}`}</td>
                      <td>{`${location_string}`}</td>
                      <td>
                        <button
                          className="btn black modal-trigger"
                          data-target="modal2"
                          data-id={`${id}`}
                          onClick={(e) => {
                            let id = e.target.getAttribute("data-id");
                            this.setState({ activeId: id });
                          }}
                        >
                          Mark Update
                        </button>
                        &nbsp;
                        <button
                          className="btn black modal-trigger"
                          data-target="modal3"
                          data-id={`${id}`}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Modals */}
        <AddLeadModal updateList={this.updateList} />
        <AddModal id={this.state.activeId} />
        <DeleteModal />
      </div>
    );
  }
}
