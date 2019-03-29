import React from "react";
import SideBar from "./sidebar";
import avatar from "../images/avatar.png";

const Content = props => {
  const cards = props.messages.map(m => {
    return (
      <div className="card mb-2" key={m}>
        <div className="row no-gutters">
          <div className="col-2 d-flex align-items-center justify-content-center">
            <img src={avatar} alt="avatar" className="w-75 rounded-circle" />
          </div>
          <div className="col">
            <div className="card-body pl-0">
              <strong>Ryan Nguyen </strong>
              <span className="text-muted">@hainht88</span>
              <p className="card-text">{m}</p>
              <i className="fa fa-comment-o text-muted mr-5" />
              <i className="fa fa-retweet text-muted mr-5" />
              <i className="fa fa-heart-o text-muted mr-5" />
              <i className="fa fa-upload text-muted" />
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-9">
          {props.messages.length === 0 ? (
            <p className="lead">Hey, Howdy?</p>
          ) : (
            cards
          )}
        </div>
        <SideBar />
      </div>
    </div>
  );
};

export default Content;
