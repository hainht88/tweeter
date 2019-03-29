import React, { Component } from "react";

class NavBar extends Component {
  state = {
    text: ""
  };

  onClick = () => {
    this.props.onClick(this.state.text);
    this.setState({ text: "" });
  };

  onChange = event => {
    this.setState({ text: event.target.value });
  };

  render() {
    return (
      <nav className="navbar navbar-light bg-light py-4">
        <div className="container d-flex flex-column flex-md-row ">
          <div>
            <a href="#">
              <i className="fa fa-home fa-lg mr-4" />
            </a>
            <a href="#">
              <i className="fa fa-search fa-lg mr-4" />
            </a>
            <a href="#">
              <i className="fa fa-bell fa-lg mr-4" />
            </a>
            <a href="#">
              <i className="fa fa-envelope fa-lg" />
            </a>
          </div>
          <div className="input-group w-50 order-3 order-md-2">
            <div className="input-group-prepend">
              <button className="input-group-text" onClick={this.onClick}>
                <i
                  className="fa fa-twitter twitter-symbol"
                  aria-hidden="true"
                />
              </button>
            </div>
            <input
              type="text"
              className="form-control tweet-btn"
              placeholder="What's happening?"
              onChange={this.onChange}
              value={this.state.text}
            />
          </div>
          <a
            className="navbar-brand order-2 order-md-3 mr-0 d-flex align-items-center text-primary"
            href="#"
          >
            <i className="fa fa-twitter fa-2x" />
            Ryan Nguyen
          </a>
        </div>
      </nav>
    );
  }
}

export default NavBar;
