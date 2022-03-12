import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="navbar">
           <h1>My Contacts</h1>
           <div className="links">
               <Link to="/">Home</Link>
               <Link to="/create">new Contact</Link>
               <Link to="/firstTry">My First Try </Link>
               <Link to="/buttons">Buttons tuto </Link>
               <Link to="/counter">Counter </Link>



           </div>
        </nav>
     );
}
 
export default Navbar;