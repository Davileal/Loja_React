import React, {Component} from 'react';
import {Button, Form} from "react-bootstrap";
import {withRouter} from "react-router-dom";

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
    }

    handleEmail(event) {
        this.setState({email: event.target.value});
    }

    handlePassword(event) {
        this.setState({password: event.target.value});
    }

    irParaProdutos() {
        if (this.state.email === 'davi.leal@gmail.com' && this.state.password === 'davileal') {
            this.props.history.push('/produtos');
        }
    }

    render() {
        return (
            <Form style={{width: '40%', margin: 'auto'}}>
                <h5 style={{textAlign: 'center'}}>Authentication</h5>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={this.state.email}
                                  onChange={this.handleEmail}/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={this.state.password}
                                  onChange={this.handlePassword}/>
                </Form.Group>
                <Button variant="primary" type="submit" block onClick={() => this.irParaProdutos()}>
                    Login
                </Button>
            </Form>
        );
    }
}

export default withRouter(Login);