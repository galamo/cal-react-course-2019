import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button
} from "react-bootstrap";

interface RefObject<T> {
  // immutable
  readonly current: T | null;
}

export default class CalNavbar extends React.Component<any, any> {
  private searchRef = React.createRef<FormControl>();
  private searchRef2 = React.createRef<HTMLInputElement>();
  private intervalId: any;
  constructor(props: any) {
    super(props);
  }

  componentDidMount() {
    // this.searchRef.current!.focus();
    this.searchRef2.current!.focus();
    this.searchRef2.current!.placeholder = "Search...";
    let dots = ".";
    this.intervalId = setInterval(() => {
      this.searchRef2.current!.placeholder = dots;
      dots += ".";
      if (dots.length === 10) dots = ".";
      console.log(dots);
    }, 300);
  }

  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Cal Course</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            {/* <FormControl
              ref={this.searchRef}
              type="text"
              placeholdaer="Search"
              className="mr-sm-2"
            /> */}
            <input
              className="mr-sm-2"
              onChange={() => {
                clearInterval(this.intervalId);
              }}
              ref={this.searchRef2}
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
