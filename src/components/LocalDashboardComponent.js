import React, { Component } from 'react';
import ScriptTag from 'react-script-tag';

import imageUrl2 from "../images/map.jpg";
import imageUrl3 from "../images/alert.png";
import imageUrl8 from "../images/report1.jpg";
import imageUrl9 from "../images/prescription1.png";
import imageUrl10 from "../images/appointment.jpg";
import imageUrl1 from "../images/ambulance.jpg";

import { baseUrl } from '../baseUrl';

class LocalDashboard extends Component{
    render(){
        return(
            <div class="content-wrapper">
                <div class="content-header">
                    <div class="container-fluid">
                        <div class="row mb-2">
                            <div class="col-sm-6">
                                <h1 class="m-0 text-dark">Dashboard</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <section class="content">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-3 col-12">
                                <div class="card" >
                                <img class="card-img-top" src={imageUrl2} alt="Card image cap" />
                                <div class="card-body">
                                    <h5 class="card-title">Show Map</h5>
                                    <p class="card-text">View your added data points.</p>
                                    <a onClick={() => {this.props.clickit('/map')}} style={{color: 'white',cursor:'pointer'}} class="btn btn-primary">View Map</a>
                                </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-12">
                                <div class="card" >
                                <img class="card-img-top" src={imageUrl3} alt="Card image cap" />
                                <div class="card-body">
                                    <h5 class="card-title">Create Alert</h5>
                                    <p class="card-text">Create an alert!</p>
                                    <a onClick={() => {this.props.clickit('/create_alert')}} style={{color: 'white',cursor:'pointer'}} class="btn btn-primary">Create Alert</a>
                                </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-12">
                                <div class="card" >
                                <img class="card-img-top" src={imageUrl8} alt="Card image cap" />
                                <div class="card-body">
                                    <h5 class="card-title">Upload Report</h5>
                                    <p class="card-text">Upload all your Reports Here!</p>
                                    <a onClick={() => {this.props.clickit('/upload_report')}} style={{color: 'white',cursor:'pointer'}} class="btn btn-primary">Upload Report</a>
                                </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-12">
                                <div class="card" >
                                <img class="card-img-top" src={imageUrl9} alt="Card image cap" />
                                <div class="card-body">
                                    <h5 class="card-title">My Prescriptions</h5>
                                    <p class="card-text">View all your Prescriptions Here!</p>
                                    <a onClick={() => {this.props.clickit('/my_prescriptions')}} style={{color: 'white',cursor:'pointer'}} class="btn btn-primary">Prescriptions</a>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-3 col-12">
                                <div class="card" >
                                <img class="card-img-top" src={imageUrl1} alt="Card image cap" />
                                <div class="card-body">
                                    <h5 class="card-title">Book Ambulance</h5>
                                    <p class="card-text">Emergency Services!</p>
                                    <a onClick={() => {this.props.clickit('/book_ambulance')}} style={{color: 'white',cursor:'pointer'}} class="btn btn-primary">Book Here</a>
                                </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-12">
                                <div class="card" >
                                    <img class="card-img-top" src={imageUrl2} alt="Card image cap" />
                                    <div class="card-body">
                                        <h5 class="card-title">View Medical Stores near me</h5>
                                        <p class="card-text">View All Medical Stores near by</p>
                                        <a href="https://www.google.co.in/maps/search/medical+store+near+me" style={{color: 'white',cursor:'pointer'}} class="btn btn-primary" target="_blank">View Med Stores</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-12">
                                <div class="card" >
                                    <img class="card-img-top" src={imageUrl10} alt="Card image cap" />
                                    <div class="card-body">
                                        <h5 class="card-title">Make Appointment</h5>
                                        <p class="card-text">Meet your Doctor</p>
                                        <a onClick={() => {this.props.clickit('/make_appointment')}} style={{color: 'white',cursor:'pointer'}} class="btn btn-primary">Make it!</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default LocalDashboard;