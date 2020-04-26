import React, { Component } from "react";
import URL from "../URL";
export default class MarkModal extends Component {
  // componentDidMount() {
  //   console.log("ID:", this.props.id);
  // }
  componentDidUpdate(prevProps) {
    if (prevProps.id != this.props.id) {
      this.setState({ value: this.props.communication });
    }
  }

  state = {
    value: "",
  };

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ value: this.props.communication });
    // this.setState({ value: "" });
  };

  handleMouseDown = (e) => {
    this.setState({ value: "" });
  };

  handleFormSave = (e) => {
    e.preventDefault();
    let body = {
      communication: this.state.value,
    };
    fetch(`${URL}/api/mark_lead/${this.props.id}`, {
      method: "put",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
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
      <div id="modal2" className="modal">
        <div className="modal-content">
          <div className="row">
            <div className="col s12">
              <h4 className="white-text black" style={{ padding: "1%" }}>
                Mark Communication
              </h4>
            </div>
          </div>
          <form className="update_lead_form">
            <div className="row right-align">
              <div className="col s12 input-field ">
                <h6 className="left-align">Communication</h6>
                {/* <input
                  type="text"
                  value={this.state.value || ""}
                  id="communication"
                  onChange={this.handleChange}
                /> */}
                <textarea
                  rows={5}
                  style={{ height: "100%" }}
                  onChange={this.handleChange}
                  value={this.state.value || ""}
                  name="communication"
                  onMouseDownCapture={this.handleMouseDown}
                ></textarea>

                <button
                  className="btn white black-text modal-close"
                  onClick={this.handleSubmit}
                >
                  Cancel
                </button>
                <button
                  className="btn black white-text modal-close update_lead_btn"
                  onClick={this.handleFormSave}
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
