import { Nav, Navbar, NavbarBrand,Button, NavItem } from 'reactstrap';

import React from 'react';

import MyComponent from './ApiComponent'

class Header extends React.Component {
    constructor(props) {
        super(props);
    
        
        this.state = {
           
            open: false
        };
       
        this.toggleModal = this.toggleModal.bind(this);
      }
     
      toggleModal() {
        this.setState({
          open: !this.state.open
        });
        
      }
     

    

    render() {
        return(
            <div>
                <Navbar dark expand="md">
                    <div className="container">
                        
                        <NavbarBrand className="header">Advertyzement Assignment</NavbarBrand>
                        
                            <Nav className="ml-auto" navbar>
                                <NavItem >
                                    <Button className="button" onClick={this.toggleModal.bind(this)}> GET USER</Button>
                                </NavItem>
                            </Nav>
                        
                    </div>
                </Navbar>
                
                <div >
           
                <MyComponent open={this.state.open}/>
              </div>
            </div>
        );
    }
}
export default Header;