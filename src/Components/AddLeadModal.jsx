import React, { Component } from "react";

import URL from "../URL";
export default class AddLeadModal extends Component {
  state = {
    first_name: "",
    last_name: "",
    email: "",
    mobile: "",
    location_type: "Country",
    location_string: "",
    disabled: true,
  };

  handleOnChange = (e) => {
    this.setState({ [e.target.name]: e.target.value }, () => {
      const {
        first_name,
        last_name,
        email,
        mobile,
        location_string,
        location_type,
      } = this.state;
      this.setState(
        {
          first_name,
          last_name,
          email,
          mobile,
          location_string,
          location_type,
        },
        () => {
          if (
            first_name &&
            last_name &&
            email &&
            mobile &&
            location_string &&
            location_type
          ) {
            this.setState({ disabled: false });
          } else {
            this.setState({ disabled: true });
          }
        }
      );
    });
  };

  handleSubmit = () => {
    const {
      first_name,
      last_name,
      email,
      mobile,
      location_string,
      location_type,
    } = this.state;
    console.log("State", this.state);
    let body = {
      first_name: first_name,
      last_name: last_name,
      email: email,
      mobile: mobile,
      location_string: location_string,
      location_type: location_type,
    };
    fetch(`${URL}/api/leads/`, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        this.setState(
          {
            first_name: "",
            last_name: "",
            email: "",
            mobile: "",
            location_string: "",
            disabled: true,
          },
          () => {
            this.props.updateList();
          }
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <div id="modal1" className="modal">
        <div className="modal-content">
          <h4 className="white-text black" style={{ padding: "1%" }}>
            Add Lead
          </h4>
          <div className="row" style={{ marginTop: "5%" }}>
            <form className="col s12 add_lead_form">
              <div className="row">
                <div className="input-field col s6">
                  <input
                    id="first_name"
                    type="text"
                    required
                    name="first_name"
                    value={this.state.first_name}
                    onChange={this.handleOnChange}
                  />
                  <label htmlFor="first_name">First Name</label>
                </div>
                <div className="input-field col s6">
                  <input
                    id="last_name"
                    type="text"
                    name="last_name"
                    required
                    value={this.state.last_name}
                    onChange={this.handleOnChange}
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
                    required
                    onChange={this.handleOnChange}
                    value={this.state.email}
                  />
                  <label htmlFor="email">Email</label>
                </div>
                <div className="input-field col s6">
                  <input
                    name="mobile"
                    id="mobile"
                    type="text"
                    required
                    onChange={this.handleOnChange}
                    value={this.state.mobile}
                  />
                  <label htmlFor="mobile">Mobile</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s6">
                  <select
                    // className="browser-default"
                    id="location_type"
                    name="location_type"
                    onChange={this.handleOnChange}
                  >
                    <option value="Country">Country</option>

                    <option value="City">City</option>
                  </select>
                </div>
                <div className="input-field col s6">
                  <input
                    name="location_string"
                    id="location_string"
                    type="text"
                    required
                    onChange={this.handleOnChange}
                    value={this.state.location_string}
                  />
                  <label htmlFor="location_string">Location String</label>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    this.handleSubmit();
                  }}
                  disabled={this.state.disabled}
                  className="modal-close waves-effect btn-flat add_lead_btn"
                >
                  ADD
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
