import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useSelector } from 'react-redux';

function Header(props) {
    const listUsers = useSelector(state => state.user.listUsers);

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">React-Redux</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown className='mx-5' title={`${listUsers.length} Users`} id="basic-nav-dropdown">
                            {listUsers && listUsers.length > 0 &&
                                listUsers.map((item, index) => {
                                    return (
                                        <NavDropdown.Item key={`user-${index}`} href="#action/3.1">{item.email}</NavDropdown.Item>
                                    );
                                })
                            }
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;