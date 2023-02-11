import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <>


            <div className="container-fluid nav-bg">
                <div className="row" >

                    <div className="col-12 max-auto">

                        <nav className="navbar navbar-expand-lg  navbar-light   bg-light fixed-top">
                            <div className="container-fluid text-uppercase p-1 ">
                                <NavLink className="navbar-brand" to="/">CocoBe</NavLink>

                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>

                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ml-auto text-uppercase">

                                        <li className="nav-item active">
                                            <NavLink className="nav-link" to="/">Home </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/service">Service</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/about">About Us</NavLink>
                                        </li>

                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
                                        </li>



                                    </ul>

                                </div>
                            </div>
                        </nav>

                    </div>
                </div>
            </div>

        </>


    );

};

export default Navbar;