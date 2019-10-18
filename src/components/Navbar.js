import React from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle
} from "reactstrap";

class MyNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Copygram</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <Link className="nav-link" to="/users/me">
                My Profile
              </Link>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Account Management
                </DropdownToggle>
                <DropdownMenu right>
                  {/* // TODO: GET JWT FROM STATE */}

                  {localStorage.getItem("jwt") !== null ? (
                    <DropdownItem>
                      <Link to="/logout">Log Out</Link>
                    </DropdownItem>
                  ) : (
                    <>
                      <DropdownItem>
                        <Link to="/login">Log In</Link>
                      </DropdownItem>
                      <DropdownItem>
                        <Link to="/signup">Sign Up</Link>
                      </DropdownItem>
                    </>
                  )}
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export { MyNavbar };
