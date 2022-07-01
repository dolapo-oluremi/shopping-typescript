import { Navbar as NavbarBootStrap, Nav, Container, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { UseShoppingCart } from "../context/ShoppingCartContext";

const Navbar = () => {
    const { openCart, cartQuantity } = UseShoppingCart()
    return (
        <NavbarBootStrap className="bg-white shadow-sm mb-3 fixed-top">
            <Container>
                <Nav>
                    <Nav.Link to='/' as={NavLink}>
                        Home
                    </Nav.Link>
                    <Nav.Link to='/store' as={NavLink}>
                        Store
                    </Nav.Link>
                    <Nav.Link to='/about' as={NavLink}>
                        About
                    </Nav.Link>
                    <Nav.Link to='/contact' as={NavLink}>
                        Contact
                    </Nav.Link>
                </Nav>
                <div className="d-flex">
                {/* <Nav.Link to='/signin' as={NavLink}>
                       Sign In
                    </Nav.Link>
                <Nav.Link to='/signup' as={NavLink}>
                       Sign Up
                    </Nav.Link> */}
                <Button
                    style={{ width: '3rem', height: '3rem', position: 'relative' }}
                    variant="outline-primary"
                    className="rounded-circle d-flex justify-content-center align-items-center"
                    onClick={openCart}
                >
                    SVG
                    <span
                        className="d-flex rounded-circle justify-content-center bg-primary align-items-center"
                        style={{ width: '1.1rem', height: '1.2rem', position: 'absolute', top: '-0.1rem', right: '-0.2rem', color: 'white' }}
                    >
                        {cartQuantity}
                    </span>
                </Button>
                </div>
            </Container>
        </NavbarBootStrap>
    )
}

export default Navbar