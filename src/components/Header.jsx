import './header.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from "react-router-dom";
const Header = ({cart}) => {

    
    return(
        <div className='nav'>
            <Link to='/'>
            <li><i className="fa-solid fa-house"></i></li>
            </Link>
            <li className='home'><h3>Contact</h3></li>
            <li className='home'><h3>Support</h3></li>
            <li className='home'><h3></h3></li>
            <input type="text" placeholder='Search'></input> 
            <button className='search'><i className="fa-solid fa-magnifying-glass"></i></button>
            <Link className='cart' to='/cart'>
            <li>
                <i className="fa-solid fa-cart-shopping" id='icon_cart'></i>
                {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
            
            </li>
            </Link>
        </div>

    );
};

export default Header;