import React, { Component } from 'react'
import { baseUrl } from '../baseUrl';

import imageUrl1 from "../images/useradd.png";
import imageUrl2 from "../images/custom_map.jpg";


class ViewPatientsPrescription extends Component {
   async componentDidMount()
    {
        let token = await localStorage.getItem('token');
        await fetch(`${baseUrl}/users/get_patients`, {
            method: 'get',
            headers: {
                Accept: 'application/json',
                Authorization: `Bearer ${token}`,
            },
        })
        .then(async (data1) => {
                let data = await data1.json();
                //console.log(data);
                if (data.error) {
                    this.setState(() => ({ }));
                  
                    return;
                }
                else {
                    console.log(data);
                    this.setState(() => ({users:[...data.Patients]}));
                    
                }
            })
            .catch(err => this.setState({ error: 'some error occured,Try Again', loading: false, name: '' }))

    }
    state={
        users:[]
    }

    render() {
        return (
            <div class="content-wrapper">
            <div class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <h1 class="m-0 text-dark">Choose Patient...</h1>
                        </div>
                    </div>
                </div>
            </div>

            <section class="content">
                
                <div class="container-fluid">
                    <div class="row">
                     {this.state.users && this.state.users.map((user)=>(
                     <div class="col-lg-3 col-12">
                            <div class="card" >
                            <img class="card-img-top" src={imageUrl1} alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">{user.name}</h5>
                                <p class="card-text">{user.name}</p>
                                
                                <a onClick={() => {this.props.clickit(`/prescription/${user._id}`)}} style={{color: 'white',cursor:'pointer'}} class="btn btn-primary">View User</a>
                            </div>
                            </div>
                         </div>))}
                    </div>
                </div>
            </section>
        </div>
        )
    }
}
export default ViewPatientsPrescription;