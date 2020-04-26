import React, { Component } from "react";
import "./Dashboard.css";
import AddLeadModal from "./AddLeadModal";
import DeleteModal from "./DeleteModal";
import MarkModal from "./MarkModal";
import URL from "../URL";
export default class Dashboard extends Component {
  state = {
    markId: 0,
    list: [],
    add: true,
    deleteId: 0,
    communication: "",
  };
  componentDidMount() {
    this.updateList();
  }
  updateList = () => {
    fetch(`${URL}/api/leads/`)
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
                    <tr key={`${id}`}>
                      <td>{`${first_name} ${last_name}`}</td>
                      <td>{`${email}`}</td>
                      <td>{`${mobile}`}</td>
                      <td>{`${location_type}`}</td>
                      <td>{`${location_string}`}</td>
                      <td>
                        <button
                          className="btn black modal-trigger update_lead_modal_btn"
                          data-target="modal2"
                          data-id={`${id}`}
                          onClick={(e) => {
                            let id = e.target.getAttribute("data-id");
                            let communication = this.state.list.filter(
                              (lead) => lead.id == id
                            )[0].communication;

                            this.setState({
                              markId: id,
                              communication: communication,
                            });
                          }}
                        >
                          Mark Update
                        </button>
                        &nbsp;
                        <button
                          className="btn black modal-trigger delete_lead_modal_btn"
                          data-target="modal3"
                          data-id={`${id}`}
                          onClick={(e) => {
                            let id = e.target.getAttribute("data-id");
                            this.setState({ deleteId: id });
                          }}
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
        <MarkModal
          id={this.state.markId}
          communication={this.state.communication}
          updateList={this.updateList}
        />
        <DeleteModal id={this.state.deleteId} updateList={this.updateList} />
      </div>
    );
  }
}
