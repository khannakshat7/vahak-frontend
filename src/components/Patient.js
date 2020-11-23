import React, { Component } from 'react'
import { baseUrl } from '../baseUrl';
import {withRouter} from 'react-router'



class Patient extends Component {
    state={
        User:{}
    }
    async componentDidMount()
    {
        let token = await localStorage.getItem('token');
        console.log(this.props.match);
        await fetch(`${baseUrl}/users/user_info/${this.props.match}`, {
            method: 'get',
            headers: {
                Accept: 'application/json',
                Authorization: `Bearer ${token}`,
            },
        })
        .then(async (data1) => {
                let data = await data1.json();
                console.log(data);
                if (data.error) {
                    this.setState(() => ({ }));
                  
                    return;
                }
                else {
                    console.log("here"+data);
                    await this.setState(() => ({User:{...data}}));
                    
                }
            })
            .catch(err => this.setState({ error: 'some error occured,Try Again', loading: false, name: '' }))
    }
   
    render() {
        return (
            (
                <div class="content-wrapper">
                <div class="content-header">
                    <div class="container-fluid">
                        <div class="row mb-2">
                            <div class="col-sm-6">
                                <h1 class="m-0 text-dark">Patient Name:{this.state.User.name}</h1>
                            </div>
                        </div>
                    </div>
                </div>
    
                <section class="content">
                    
                    <div class="container-fluid">
                        <div class="row">
                         {this.state.User.reports && this.state.User.reports.map((user)=>(
                         <div class="col-lg-3 col-12">
                                <div class="card" >
                                <img class="card-img-top" src={baseUrl + user.path} alt="Card image cap" />
                                <div class="card-body">
                                    <h5 class="card-title">{user.name}</h5>
                                    <p class="card-text">{user.name}</p>
                                    <a onClick={() => {this.props.clickit('/global_map')}} style={{color: 'white',cursor:'pointer'}} class="btn btn-primary">View Report</a>
                                </div>
                                </div>
                             </div>))}
                        </div>
                    </div>
                </section>
            </div>
            )
        )
    }
}
export default Patient;