import React from 'react';
import avatar from './images/avatar.png'

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-light bg-light py-4">
                    <div className="container d-flex flex-column flex-md-row ">
                        <div>
                            <a href="#"><i className="fa fa-home fa-lg mr-4"></i></a>
                            <a href="#"><i className="fa fa-search fa-lg mr-4"></i></a>
                            <a href="#"><i className="fa fa-bell fa-lg mr-4"></i></a>
                            <a href="#"><i className="fa fa-envelope fa-lg"></i></a>
                        </div>
                        <div className="input-group w-50 order-3 order-md-2">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
									<i class="fa fa-twitter" aria-hidden="true"></i>
								</span>
                            </div>
                            <input type="text" className="form-control tweet-btn" placeholder="What's happening?" />
                        </div>
                        <a className="navbar-brand order-2 order-md-3 mr-0 d-flex align-items-center text-primary" href="#">
                            <i className="fa fa-twitter fa-2x"></i>Ryan Nguyen
                        </a>
                    </div>
                </nav>

                <div className="container mt-3">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="card">
                                <div className="row no-gutters">
                                    <div className="col-2 d-flex align-items-center justify-content-center">
                                        <img src={avatar} alt="avatar" className="w-75 rounded-circle" />
                                    </div>
                                    <div className="col">
                                        <div className="card-body pl-0">
                                            <strong>Ryan Nguyen </strong>
                                            <span className="text-muted" >@hainht88</span>
                                            <p className="card-text">
                                                Some quick example text to build on the card title and make up the bulk of the card's content.
                                            </p>
                                            <i className="fa fa-comment-o text-muted mr-5" ></i>
                                            <i className="fa fa-retweet text-muted mr-5" ></i>
                                            <i className="fa fa-heart-o text-muted mr-5" ></i>
                                            <i className="fa fa-upload text-muted" ></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">Cras justo odio</li>
                                    <li className="list-group-item">Dapibus ac facilisis in</li>
                                    <li className="list-group-item">Vestibulum at eros</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </React.Fragment >
        )
    }
}

export default App;

