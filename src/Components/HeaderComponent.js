import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
            isModalOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);

    }

    toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal(){
        this.setState({
            isModalOpen:!this.state.isModalOpen
        });
    }

    handleLogin(event) {
        this.toggleModal();
        alert("Username: " + this.username.value + " Password: " + this.password.value
            + " Remember: " + this.remember.checked);
        event.preventDefault();

    }

    render() {
        return(
            <React.Fragment>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="https://stymm-1.github.io/Fusion">
                            <img src="Fusion/assets/images/logo.png" height="30" width="41" 
                                alt="Fusion" />
                        </NavbarBrand>
                        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                            <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                            <ModalBody>
                                <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={(input) => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={(input) => this.password = input}  />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                    innerRef={(input) => this.remember = input}  />
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Login</Button>
                        </Form>
                            </ModalBody>
                        </Modal>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home"> 
                                        <span className="fa fa-home fa-lg head"></span><span className="headtext"> Home </span> 
                                    </NavLink> 
                                </NavItem> 
                                <NavItem>
                                    <NavLink className="nav-link" to="/menu"> 
                                        <span className="fa fa-list fa-lg head"></span> <span className="headtext"> Menu</span>
                                    </NavLink>    
                                </NavItem>    
                                <NavItem>
                                    <NavLink className="nav-link" to="/aboutus"> 
                                        <span className="fa fa-info fa-lg head"></span> <span className="headtext"> About Us </span> 
                                    </NavLink>    
                                </NavItem> 
                                   
                                <NavItem>
                                    <NavLink  className="nav-link" to="/contactus"> 
                                        <span className="fa fa-info fa-lg head"></span><span className="headtext"> Contact Us </span>
                                    </NavLink>    
                                </NavItem> 
                            </Nav>
                        </Collapse>
                        <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <Button color="#f4c95d" outline onClick={this.toggleModal}><span className="fa fa-sign-in fa-lg head"></span> Login</Button>
                                </NavItem>
                            </Nav>
                       </div>
                </Navbar>
                <Jumbotron id="jumbotron">   
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6"> 
                                <h1>Fusion</h1>
                                <h5>Eat What Makes You Happy</h5>
                                <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                     
            </React.Fragment>
        );
    }
}

export default Header; 
