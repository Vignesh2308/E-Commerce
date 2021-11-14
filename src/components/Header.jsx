import '../App.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <Link className="active" to="#">Home</Link>
            <Link to="#">Products</Link>
            <Link to="#">Categories</Link>
            <div className="nav-menu-right">
                <Link to="#"><i className="fas fa-user"></i> Vignesh</Link>
            </div>
        </>
    )
}

export default Header;