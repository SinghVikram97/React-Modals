import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
export default class AddModal extends Component {
  componentDidMount() {
    console.log(this.props.id);
  }
  componentDidUpdate() {
    // Make api request here
    console.log(this.props.id);
  }
  render() {
    return (
      <div id="modal2" class="modal">
        <div class="modal-content">
          <h4>Modal Header</h4>
          <p>A bunch of text</p>
        </div>
        <div class="modal-footer">
          <a href="#!" class="modal-close waves-effect waves-green btn-flat">
            Agree
          </a>
        </div>
      </div>
    );
  }
}
