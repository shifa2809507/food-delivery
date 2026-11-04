import { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import logo1 from "../assets/logo.png";
import "../App.css";
import { StoreContext } from './StoredContext';

function Navbar({setShowLogin}) {
    const [menuOpen, setMenuOpen] = useState(false);
    const { cartItems } = useContext(StoreContext);
    const hasCartItems = Object.values(cartItems).some((quantity) => quantity > 0);

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/" onClick={() => setMenuOpen(false)}>
                        <img className="logo" src={logo1} alt="Food Delivery" />
                    </Link>

                    <button
                        className="navbar-toggler"
                        type="button"
                        aria-controls="navbarSupportedContent"
                        aria-expanded={menuOpen}
                        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
                        onClick={() => setMenuOpen((isOpen) => !isOpen)}
                    >
                        <span className="navbar-toggler-icon" />
                    </button>

                    <div className={`collapse navbar-collapse${menuOpen ? " show" : ""}`} id="navbarSupportedContent">
                        <ul className="navbar-nav   mb-2 mb-lg-0">
                            <li className="nav-item" >
                               <Link className="nav-link" to='/' onClick={() => setMenuOpen(false)}>Home</Link>
                            </li>
                            <li className="nav-item" >
                               <a className="nav-link" href="/#explore-menu" onClick={() => setMenuOpen(false)}>Menu</a>
                            </li>
                            <li className="nav-item">
                                   <a className="nav-link" href="/#app-download" onClick={() => setMenuOpen(false)}>Mobile-app</a>
                            </li>
                            <li className="nav-item">
                                   <Link className="nav-link" to='/contact us' onClick={() => setMenuOpen(false)}>Contact us</Link>
                                
                            </li>


                        </ul>
                        <div className="nav-right d-flex align-items-center gap-3 ms-auto">
                            <button className="icon-btn" aria-label="Search">
                                <i className="bi bi-search"></i></button>

                            <Link
                                to="/cart"
                                className="icon-btn cart-icon-link"
                                aria-label={hasCartItems ? "Shopping basket, items added" : "Shopping basket"}
                                onClick={() => setMenuOpen(false)}
                            >
                                <i className="bi bi-basket2"></i>
                                {hasCartItems && <span className="cart-dot" aria-hidden="true" />}
                            </Link>

                            <button className="signin-btn" onClick={()=>setShowLogin(true)}>
                                Sign In</button>
                        </div>
                    </div>
                </div>
            </nav>
        </>

    );
}

export default Navbar