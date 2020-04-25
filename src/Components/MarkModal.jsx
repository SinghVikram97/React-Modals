import React, { Component } from "react";
export default class MarkModal extends Component {
  // componentDidMount() {
  //   console.log("ID:", this.props.id);
  // }
  componentDidUpdate(prevProps) {
    if (prevProps.communication != this.props.communication) {
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
    this.setState({ value: "" });
  };

  render() {
    return (
      <div id="modal2" class="modal">
        <div class="modal-content">
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
                <input
                  type="text"
                  value={this.state.value || ""}
                  id="communication"
                  onChange={this.handleChange}
                />

                <button
                  className="btn white black-text modal-close"
                  onClick={this.handleSubmit}
                >
                  Cancel
                </button>
                <button
                  className="btn black white-text modal-close"
                  onClick={this.handleSubmit}
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
