import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';

// for logged in user
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Logout from './LogoutComponent';

import Dashboard from './DashboardComponent';
import ViewCode from './ViewCodeComponent';
import GlobalMap from './GlobalMapComponent';
import ViewMap from './ViewMapComponent';
import ViewCustomMaps from './ViewCustomMapsComponent';
import ViewCustomMapWithId from './ViewCustomMapWithIdComponent';
import CreateAlert from './CreateAlertComponent';
import AddLocationGlobal from './AddLocationComponentGlobal';
import AddLocationMid from './AddLocationMid';
import LocationCustomMapWithId from './LocationCustomMapWithIdComponent';
import CreateSensor from './CreateSensorComponent';
import AddSensor from './AddSensorComponent';
import AddUser from './AddUserComponent';
import DisplayCustomMaps from './DisplayCustomMapsComponent';
import ViewAppointment from './ViewAppointmentComponent'

// for local user :
import LocalHeader from './LocalHeaderComponent';
import LocalDashboard from './LocalDashboardComponent';
import UploadReports from './UploadReports'
import MakeAppointment from './MakeAppointmentComponent'

// for non-login user
import Welcome from './WelcomeComponent';
import Signup from './SignupComponent';
import Login from './LoginComponent';
import ErrorHandle from './ErrorComponent';
import ForgotPassword from './ForgotPasswordComponent';
import ResetPassword from './ResetPasswordComponent';
import MyPrescriptions from './DisplayPrescriptionComponent';
import { fillstore, emptystore } from '../redux/ActionCreators';

// extra stuff
import axios from "axios";
import { baseUrl } from '../baseUrl';
import { Loading } from './LoadingComponent';
import Demo from './DemoComponent';
import AddCustomMap from './AddCustomMap';
import ViewPatients from './ViewPatients';
import Patient from './Patient';
import ViewPatientsPrescription from './ViewPatientsPrescriptionComponent';
import Prescription from './Prescription';
import { PageItem } from 'react-bootstrap';
import BookAmbulance from './BookAmbulance';

const mapStateToProps = (state,{history}) => {
    return{
       store: state
    }
}

const mapDispatchToProps = (dispatch) => ({
    fillstore : (token, message, name, companyname,usertype, typeofdatabase, userpic, companylogo, parentid) => dispatch(fillstore(token, message, name, companyname,usertype, typeofdatabase, userpic, companylogo, parentid)),
    emptystore : () => dispatch(emptystore())
  });

class Main extends Component{

    constructor(props){
        super(props);
        this.state = {
            hidden: true
        };
        this.pusher = this.pusher.bind(this);
    }

    pusher(loc){
        this.props.history.push(loc);
    }

    componentWillMount(){
    
        if(localStorage.getItem('token') && this.props.store.name==''){
            this.setState({
                hidden: false
            });
            let base_url = baseUrl;
            axios.get(base_url+'/users/detail', {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }
            })
            .then( response => {
                this.props.fillstore(response.data.token, response.data.message, response.data.name, response.data.companyname, response.data.usertype, response.data.typeofdatabase, response.data.userpic, response.data.companylogo, response.data.parentid);
                this.setState({
                    hidden: true
                });
            }, 
            error => {
                console.log("error of componentdidMount");
                localStorage.removeItem('token');
                this.props.emptystore();
                this.setState({
                    hidden: true
                });
            })
            .catch(error => {
                localStorage.removeItem('token');
                this.props.emptystore();
                this.setState({
                    hidden: true
                });
            });
        }
    }

    render(){
        
        if(this.state.hidden == false){
            return(
                <Loading />
            );
        }
            

        if(localStorage.getItem('token')){
            if(this.props.store.usertype == 'admin'){
                const ViewCustomMapWithIdMid = (props)=>{
                    return(
                        <ViewCustomMapWithId match={props.match.params.mapid} clickit={(loc) => this.pusher(loc)} />
                    );
                }
                const LocationCustomMapWithIdMid = (props)=>{
                    return(
                        <LocationCustomMapWithId match={props.match.params.mapid} clickit={(loc) => this.pusher(loc)} />
                    );
                }
                const PatientWithId=(props)=>{
                    return (<Patient match={props.match.params.id} clickit={(loc) => this.pusher(loc)}></Patient>)
                }
                const PrescriptionWithId=(props)=>{
                    return (<Prescription match={props.match.params.id} clickit={(loc) => this.pusher(loc)}></Prescription>)
                }
                return(
                    <div className="hold-transition sidebar-mini layout-fixed">
                        <div class="wrapper">
                            <Header clickit={(loc) => this.pusher(loc)} companyname={this.props.store.companyname} name={this.props.store.name} companylogo={this.props.store.companylogo} userpic={this.props.store.userpic}/>
                            <Switch>
                                <Route path="/logout" component={() => <Logout clickit={(loc) => this.pusher(loc)} emptystore={this.props.emptystore}/>} />
                                <Route path="/dashboard" component={() => <Dashboard clickit={(loc) => this.pusher(loc)} />} />
                                <Route path="/view_code" component={() => <ViewCode clickit={(loc) => this.pusher(loc)} />} />
                                <Route path="/map" component={() => <ViewMap clickit={(loc) => this.pusher(loc)} />} />
                                <Route path="/global_map" component={() => <GlobalMap clickit={(loc) => this.pusher(loc)} />} />
                                <Route path="/view_custom_map" component={() => <ViewCustomMaps clickit={(loc) => this.pusher(loc)} />} />
                                <Route path="/create_alert" component={() => <CreateAlert clickit={(loc) => this.pusher(loc)} />} />
                                <Route path="/add_location" component={() => <AddLocationMid clickit={(loc) => this.pusher(loc)} />} />
                                <Route path="/create_sensor" component={() => <CreateSensor clickit={(loc) => this.pusher(loc)} />} />
                                <Route path="/add_sensor" component={() => <AddSensor clickit={(loc) => this.pusher(loc)} />} />
                                <Route path="/add_user" component={() => <AddUser clickit={(loc) => this.pusher(loc)} />} />
                                <Route path="/add_custommap" component={() => <AddCustomMap clickit={(loc) => this.pusher(loc)} />} /> 
                                <Route path="/add_location_global" component={() => <AddLocationGlobal clickit={(loc) => this.pusher(loc)} />} />
                                <Route path="/location_custom_map/:mapid" component={LocationCustomMapWithIdMid} />
                                <Route path="/custom_maps" component={() => <DisplayCustomMaps clickit={(loc) => this.pusher(loc)} />} />
                                <Route path="/view_patients" component={()=><ViewPatients clickit={(loc) => this.pusher(loc)}></ViewPatients>}></Route>
                                <Route path='/patient/:id' component={PatientWithId}></Route>
                                <Route path="/view_patients_prescription" component={()=><ViewPatientsPrescription clickit={(loc) => this.pusher(loc)}></ViewPatientsPrescription>}></Route>
                                <Route path='/prescription/:id' component={PrescriptionWithId}></Route>
                                <Route path="/map_with_id/:mapid" component={ViewCustomMapWithIdMid} />
                                <Route path="/view_appointment" component={()=><ViewAppointment clickit={(loc) => this.pusher(loc)}></ViewAppointment>}></Route>
                                <Redirect to="/dashboard" />
                            </Switch>
                            <Footer />
                        </div>
                    </div>
                    //<Demo />
                );
            }
            else{
                if(this.props.store.usertype == 'localuser'){
                    const ViewCustomMapWithIdMid = (props)=>{
                        return(
                            <ViewCustomMapWithId match={props.match.params.mapid} clickit={(loc) => this.pusher(loc)} />
                        );
                    }
                    return(
                        <div className="hold-transition sidebar-mini layout-fixed">
                            <div class="wrapper">
                                <LocalHeader clickit={(loc) => this.pusher(loc)} companyname={this.props.store.companyname} name={this.props.store.name} companylogo={this.props.store.companylogo} userpic={this.props.store.userpic}/>
                                <Switch>
                                    <Route path="/logout" component={() => <Logout clickit={(loc) => this.pusher(loc)} emptystore={this.props.emptystore}/>} />
                                    <Route path="/localdashboard" component={() => <LocalDashboard clickit={(loc) => this.pusher(loc)} />} />
                                    <Route path="/map" component={() => <ViewMap clickit={(loc) => this.pusher(loc)} />} />
                                    <Route path="/global_map" component={() => <GlobalMap clickit={(loc) => this.pusher(loc)} />} />
                                    <Route path="/upload_report" component={()=><UploadReports clickit={(loc) => this.pusher(loc)}></UploadReports>}></Route>
                                    <Route path="/view_custom_map" component={() => <ViewCustomMaps clickit={(loc) => this.pusher(loc)} />} />
                                    <Route path="/create_alert" component={() => <CreateAlert clickit={(loc) => this.pusher(loc)} />} />
                                    <Route path="/my_prescriptions" component={() => <MyPrescriptions clickit={(loc) => this.pusher(loc)} />} />
                                    <Route path="/book_ambulance" component={()=><BookAmbulance clickit={(loc)=>this.pusher(loc)}></BookAmbulance>}></Route>
                                    <Route path="/map_with_id/:mapid" component={ViewCustomMapWithIdMid} />
                                    <Route path="/make_appointment" component={() => <MakeAppointment clickit={(loc) => this.pusher(loc)} />} />
                                    <Redirect to="/localdashboard" />
                                </Switch>
                                <Footer />
                            </div>
                        </div>
                        
                    );
                }
            }
        }
        else{

            const LoginComp = (props)=>{
                return(
                    <Login match={props.match.params.signed} fillstore={this.props.fillstore} clickit={(loc) => this.pusher(loc)} />
                );
            }

            const ResetComp = (props)=>{
                return(
                    <ResetPassword match={props.match.params.key} clickit={(loc) => this.pusher(loc)} />
                );
            }

            return(
                <div className="App">
                    <Switch>
                        <Route path="/welcome" component={() => <Welcome clickit={(loc) => this.pusher(loc)} />} />
                        <Route path="/login/:signed" component={LoginComp} />
                        <Route path="/signup" component={() => <Signup clickit={(loc) => this.pusher(loc)} />} />
                        <Route path="/error" component={() => <ErrorHandle clickit={(loc) => this.pusher(loc)} />} />
                        <Route path="/forgot_password" component={() => <ForgotPassword clickit={(loc) => this.pusher(loc)} />} />
                        <Route path="/reset_password/:key" component={ResetComp} />
                        <Redirect to="/welcome" />
                    </Switch>
                </div>
            );
        }
    }

}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));