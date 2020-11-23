import React, {Component} from "react";
import { Input, Label } from 'reactstrap';
import { Loading } from './LoadingComponent';
import axios from "axios";

import { baseUrl } from '../baseUrl';

class AddPrescription extends Component{
    constructor(props){
        super(props);
        this.state = {
            hidden: true,
            errmsg: ""
        };
        this.handleData = this.handleData.bind(this);
        this.data_type_change = this.data_type_change.bind(this);
    }
    data_type_change = (event) => {
        this.type = event.target.value;
    }
    handleData(event) {
        this.setState({
          hidden: false
        });

        const headers = {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
        const base_url = baseUrl;
        axios.post(base_url+'/prescription',{
            prescription: this.prescription.value,
            user: this.props.match
        },{
            headers: headers
        })
        .then( response => {
          console.log(response.data.message);
          this.setState({
            hidden: true,
            errmsg: response.data.message
          });
          this.prescription.value = '';
        }, 
        error => {
          this.setState({
            hidden: true,
            errmsg: error.response.data.message
          });
          alert("Session Expired");
          this.props.clickit('/logout');
        })
        .catch(error => {
            this.setState({
                hidden: true,
                errmsg: error.response.data.message
            });
            alert("Session Expired");
            this.props.clickit('/logout');
        });
        event.preventDefault();
    }

    render(){
        return(
            <div class="content-wrapper">
                <div class="content-header">
                    <div class="container-fluid">
                        <div class="row mb-2">
                            <div class="col-sm-6">
                                <h1 class="m-0 text-dark">Add Prescription</h1>
                                <h3>{this.state.errmsg}</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div  hidden={(this.state.hidden) ? "hidden" : ''}>
                    <Loading />
                </div>

                <section class="content">
                    <div class="container-fluid">
                        
                    <div class="card card-secondary">
                        <div class="card-header">
                            <h3 class="card-title">Add Prescription...</h3>
                        </div>                        
                        <form role="form" onSubmit={this.handleData}>
                            <div class="card-body">
                                <div class="form-group">
                                    <Label htmlFor="prescription">Prescription</Label>
                                    <Input required type="text" id="prescription" name="prescription" innerRef={(input) => this.prescription = input} />
                                </div>
                            </div>

                            <div class="card-footer">
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>

                    </div>
                </section>
            </div>
        );
    }
}

export default AddPrescription;