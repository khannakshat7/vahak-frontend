import React, { Component } from 'react';
import ScriptTag from 'react-script-tag';
import { Loading } from './LoadingComponent';
import axios from "axios";
import { baseUrl } from '../baseUrl';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
function RenderAppointments(props){
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };
    if(props.appointments != null){
        if(props.appointments.length == 0){
            return(
                <div>No Appointments available for this user!</div>
            );
        }
        else{
            const appointments_list = props.appointments.map((appointment) => {
                return (
                        <div class="card" style={{margin: "20px"}}>
                            <div class="card-body">
                                <h5 class="card-text"> By : {appointment.userid}</h5>
                                <h5 class="card-text">From : {appointment.from}</h5>
                                <h5 class="card-text">To : {appointment.to}</h5>
                                <a href="http://meet.jit.si/xyz" style={{color: 'white',cursor:'pointer'}} class="btn btn-primary">Start Meeting</a>
                            </div>
                        </div>
                );
            });
            return(
                <Carousel responsive={responsive}>
                    {appointments_list}
                </Carousel>
            );
        }
    }
    else{
        return(
            <Loading />
        );
    }
}

class ViewAppointments extends Component{
    constructor(props){
        super(props);
        this.state = {
            appointments: null
        };
    }

    componentDidMount(){
        let base_url = baseUrl;
        axios.get(base_url+'/make_appointment', {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
        .then( response => {
            console.log(response);
            this.setState({
                appointments: response.data.data
            });
        }, 
        error => {
            alert("Session Expired");
            this.props.clickit('/logout');
        })
        .catch(error => {
            alert("Session Expired");
            this.props.clickit('/logout');
        });
    }

    render(){
        return(
            <div class="content-wrapper">
                <div class="content-header">
                    <div class="container-fluid">
                        <div class="row mb-2">
                            <div class="col-sm-6">
                                <h1 class="m-0 text-dark">Appointments ...</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <section class="content">
                    <div class="container-fluid">
                        <RenderAppointments appointments={this.state.appointments}></RenderAppointments>
                    </div>
                </section>
            </div>
        );
    }
}

export default ViewAppointments;