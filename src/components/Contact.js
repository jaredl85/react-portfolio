import React, { Component } from 'react';
import { Button, Label, Col, Row } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import './components.scss';

const required = val => val && val.length;
const maxLength = len => val => !val || (val.length <= len);
const minLength = len => val => val && (val.length >= len);
const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            touched: {
                name: false,
                email: false
            }
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
        console.log("Current state is: " + JSON.stringify(values));
        alert('Current state is: ' + JSON.stringify(values));
    }

    render() {

        return (
            <div className="contact" id="contact">
                <h2>Contact</h2>


                    <LocalForm className="contact-form" onSubmit={values => this.handleSubmit(values)}>
                        <Row className="form-row">
                            <Label class="label" htmlFor="name" md={2}>Name</Label>
                            <Col md={10}>
                                <Control.text model=".name" id="name" name="name"
                                    placeholder="Name"
                                    className="input-field"
                                    validators={{
                                        required,
                                        minLength: minLength(2),
                                        maxLength: maxLength(25)
                                    }}
                                />
                                <Errors
                                    className="text-danger"
                                    model=".name"
                                    show="touched"
                                    component="div"
                                    messages={{
                                        required: 'Required',
                                        minLength: 'Must enter at least 2 characters or less',
                                        maxLength: 'Must be 25 characters or less'
                                    }}
                                />
                            </Col>
                        </Row>

                        <Row className="form-row">
                            <Label class="label" htmlFor="email" md={2}>Email</Label>
                            <Col md={10}>
                                <Control.text model=".email" id="email" name="email"
                                    placeholder="Email"
                                    className="input-field"
                                    validators={{
                                        required,
                                        validEmail
                                    }}
                                />
                                <Errors
                                    className="text-danger"
                                    model=".email"
                                    show="touched"
                                    component="div"
                                    messages={{
                                        required: 'Required',
                                        validEmail: 'Invalid email address'
                                    }}
                                />
                            </Col>
                        </Row>

                        <Row className="form-row">
                            <Label class="label" htmlFor="feedback" md={2}>Your Message</Label>
                            <Col md={10}>
                                <Control.textarea model=".message" id="message" name="message"
                                    rows="12"
                                    className="message-field" placeholder="Write your message"
                                />
                                <br />
                                <Button className="submit-btn" type="submit">
                                    Submit
                                </Button>
                                <br />
                                <br />
                            </Col>
                        </Row>
                    </LocalForm>
                </div>
        );
    }
}

export default Contact;