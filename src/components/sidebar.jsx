import React from "react";
import sidebarLogo from "../images/delight_prompt_2.png";

const SideBar = () => {
  return (
    <div className="col-md-3">
      <div className="card my-4">
        <div className="card-body d-flex flex-column align-items-center">
          <img className="card-img-top" src={sidebarLogo} alt="Sidebar Logo" />
          <h5 className="card-title">Sneak a peek at the new Twitter</h5>
          <p className="card-text text-muted">
            Bookmarks, night mode, data saver, and more — see all the new
            features coming to the web.
          </p>
          <button className="btn btn-outline-primary w-75">
            <strong>Take a look</strong>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
