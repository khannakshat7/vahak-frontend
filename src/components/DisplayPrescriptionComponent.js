import React, { Component } from 'react';
import ScriptTag from 'react-script-tag';
import { Loading } from './LoadingComponent';
import axios from "axios";
import { baseUrl } from '../baseUrl';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
function RenderPrescriptions(props){
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
    if(props.prescriptions != null){
        if(props.prescriptions.length == 0){
            return(
                <div>No Prescriptions available for this user!</div>
            );
        }
        else{
            const prescriptions_list = props.prescriptions.map((prescription) => {
                return (
                        <div class="card" style={{margin: "20px"}}>
                            <div class="card-body">
                                <h5 class="card-text">{prescription.prescription}</h5>
                            </div>
                        </div>
                );
            });
            return(
                <Carousel responsive={responsive}>
                    {prescriptions_list}
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

class ViewPrescriptions extends Component{
    constructor(props){
        super(props);
        this.state = {
            prescriptions: null
        };
    }

    componentDidMount(){
        let base_url = baseUrl;
        axios.get(base_url+'/prescription', {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
        .then( response => {
            console.log(response);
            this.setState({
                prescriptions: response.data.data
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
                                <h1 class="m-0 text-dark">Prescriptions ...</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <section class="content">
                    <div class="container-fluid">
                        <RenderPrescriptions prescriptions={this.state.prescriptions}></RenderPrescriptions>
                    </div>
                </section>
            </div>
        );
    }
}

export default ViewPrescriptions;