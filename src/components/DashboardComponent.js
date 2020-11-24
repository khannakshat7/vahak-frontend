import React, { Component } from 'react';
import ScriptTag from 'react-script-tag';

import imageUrl1 from "../images/add_data.jpg";
import imageUrl2 from "../images/map.jpg";
import imageUrl3 from "../images/alert.png";
import imageUrl4 from "../images/location.png";
import imageUrl5 from "../images/sensor.jpg";
import imageUrl6 from "../images/sensoradd.png";
import imageUrl7 from "../images/useradd.png";
import imageUrl8 from "../images/report1.jpg";
import imageUrl9 from "../images/prescription1.png";
import imageUrl10 from "../images/appointment.jpg";

import { baseUrl } from '../baseUrl';

class Dashboard extends Component{
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
                                <img class="card-img-top" src={imageUrl1} alt="Card image cap" />
                                <div class="card-body">
                                    <h5 class="card-title">View Code</h5>
                                    <p class="card-text">View Code for every location.</p>
                                    <a onClick={() => {this.props.clickit('/view_code')}} style={{color: 'white',cursor:'pointer'}} class="btn btn-primary">View Code</a>
                                </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-12">
                                <div class="card" >
                                <img class="card-img-top" src={imageUrl2} alt="Card image cap" />
                                <div class="card-body">
                                    <h5 class="card-title">Show Patients</h5>
                                    <p class="card-text">View your added data points.</p>
                                    <a onClick={() => {this.props.clickit('/map')}} style={{color: 'white',cursor:'pointer'}} class="btn btn-primary">View Patients</a>
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
                                <img class="card-img-top" src={imageUrl4} alt="Card image cap" />
                                <div class="card-body">
                                    <h5 class="card-title">Add Patient</h5>
                                    <p class="card-text">Add new data patient.</p>
                                    <a onClick={() => {this.props.clickit('/add_location')}} style={{color: 'white',cursor:'pointer'}} class="btn btn-primary">Add Patients</a>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            
                            <div class="col-lg-3 col-12">
                                <div class="card" >
                                <img class="card-img-top" src={imageUrl5} alt="Card image cap" />
                                <div class="card-body">
                                    <h5 class="card-title">Create Sensor</h5>
                                    <p class="card-text">View your added data points.</p>
                                    <a onClick={() => {this.props.clickit('/create_sensor')}} style={{color: 'white',cursor:'pointer'}} class="btn btn-primary">Create Sensor</a>
                                </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-12">
                                <div class="card" >
                                <img class="card-img-top" src={imageUrl6} alt="Card image cap" />
                                <div class="card-body">
                                    <h5 class="card-title">Add Sensor</h5>
                                    <p class="card-text">Create an alert!</p>
                                    <a onClick={() => {this.props.clickit('/add_sensor')}} style={{color: 'white',cursor:'pointer'}} class="btn btn-primary">Add Sensor</a>
                                </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-12">
                                <div class="card" >
                                <img class="card-img-top" src={imageUrl7} alt="Card image cap" />
                                <div class="card-body">
                                    <h5 class="card-title">Add User</h5>
                                    <p class="card-text">Add new data point.</p>
                                    <a onClick={() => {this.props.clickit('/add_user')}} style={{color: 'white',cursor:'pointer'}} class="btn btn-primary">Add User</a>
                                </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-12">
                                <div class="card" >
                                <img class="card-img-top" src={imageUrl2} alt="Card image cap" />
                                <div class="card-body">
                                    <h5 class="card-title">Add Custom Map</h5>
                                    <p class="card-text">Add new custom map.</p>
                                    <a onClick={() => {this.props.clickit('/add_custommap')}} style={{color: 'white',cursor:'pointer'}} class="btn btn-primary">Add Custom Map</a>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-3 col-12">
                                <div class="card" >
                                <img class="card-img-top" src={imageUrl8} alt="Card image cap" />
                                <div class="card-body">
                                    <h5 class="card-title">View Reports</h5>
                                    <p class="card-text">View All Patient's Reports Here</p>
                                    <a onClick={() => {this.props.clickit('/view_patients')}} style={{color: 'white',cursor:'pointer'}} class="btn btn-primary">View Reports</a>
                                </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-12">
                                <div class="card" >
                                <img class="card-img-top" src={imageUrl9} alt="Card image cap" />
                                <div class="card-body">
                                    <h5 class="card-title">Add prescription</h5>
                                    <p class="card-text">Give prescription for a patient</p>
                                    <a onClick={() => {this.props.clickit('/view_patients_prescription')}} style={{color: 'white',cursor:'pointer'}} class="btn btn-primary">Prescribe</a>
                                </div>
                                </div>
                            </div> 
                            <div class="col-lg-3 col-12">
                                <div class="card" >
                                    <img class="card-img-top" src={imageUrl10} alt="Card image cap" />
                                    <div class="card-body">
                                        <h5 class="card-title">View Appointments</h5>
                                        <p class="card-text">View all pending appointments</p>
                                        <a onClick={() => {this.props.clickit('/view_appointment')}} style={{color: 'white',cursor:'pointer'}} class="btn btn-primary">View</a>
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

export default Dashboard;