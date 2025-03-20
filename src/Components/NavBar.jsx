import {Link} from 'react-router-dom';
import '../css/Navbar.css';

function NavBar (){
 
return <nav className="navbar">
    <div className="Navbar-brand">
          <Link to="/">Aniverse</Link>
    </div>
<div className="navbar-links">
    <Link to="/" className="nav-link">Home</Link>
    <Link to="/Trending" className="nav-link">Trending</Link>
    <Link to="/Favorites" className="nav-link">Favorites</Link>
    <Link to="/Recent" className="nav-link">Recent Updates</Link>    
    </div>

</nav>

}

export default NavBar;