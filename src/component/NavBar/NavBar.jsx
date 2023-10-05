
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { useCollection } from "../../hooks/useCollection";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css"


 const NavBar = () => {

    const {data, loading} = useCollection("categories")
    

    return (
        <div className="NavBarContainer">
                <Navbar expand="lg" className="bg-body-tertiary ">
                    <Container>
                        <Navbar.Brand> <Link className="BrandStyle" to="/">Nba <span>Store</span> </Link>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link><Link className="linkEstilos" to="/">Home</Link>
                                </Nav.Link>
                               
                               { loading ? null : (
                                
                                <NavDropdown title="Categorias" id="basic-nav-dropdown">

                                {data[0].categories.map((category, index) => {
                                        return ( 
                                        <NavDropdown.Item key={index}>
                                        
                                        <Link to={`/category/${category}`}>{category}</Link>
                                     </NavDropdown.Item>
                                );
                                })}

                            </NavDropdown>
                               )}
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                    <CartWidget />
                </Navbar>
                </div>
            );
        };
    
    export default NavBar;