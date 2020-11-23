import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, FormText, Container, Button, Alert, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class BookAmbulance extends Component {
    state = {
        location: "C-Block,Lajpat Nagar,New Delhi,India",
        modal:false
    }
    toggle=()=>{
        this.setState((prev)=>({modal:!prev.modal}));
    }
    onChange = (val) => {
        this.setState(() => ({ location: val }));
    }
    render() {
        return (
            <div className="content-wrapper">
                <div>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Booking Confirmed!!</ModalHeader>
                    <ModalBody>
                    <Alert color="info" style={{ marginTop: 10 }}>
                       Ambulance is on it's way'!!
                    </Alert>
                   </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>OK</Button>{' '}
                    </ModalFooter>
                </Modal>
                </div>
                <Container fluid>

                    <div className="content-header bg-warning">
                        <div className="container-fluid">
                            <div className="row row justify-content-center mb-2">
                                <div style={{ display: 'flex', justifyContent: 'center' }} className="col-sm-6 ">
                                    <h1 class="m-0 text-dark">Book Ambulance !!</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Alert color="danger" style={{ marginTop: 10 }}>
                        If You are Changing Location Please Be Precise!!
                   </Alert>
                    <Form>
                        <FormGroup>
                            <Label size="lg" for="exampleEmail">Current Location</Label>
                            <Input value={this.state.location} onChange={(e) => this.onChange(e.target.value)} type="text" name="email" id="exampleEmail" placeholder="Name" />

                        </FormGroup>

                    </Form>

                    <Button block size="lg" color="danger" onClick={this.toggle} style={{ justifyContent: 'center' }}>Confirm Booking!!</Button>

                </Container>
            </div>
        )
    }
}
