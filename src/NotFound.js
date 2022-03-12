import { Link } from "react-router-dom";
import pic from "./2748558.png";

const NotFound = () => {
    return ( 
        <div className="notfound">
            <img src= {pic}/>
            <Link to ="/">Go back to HomePage </Link>
        </div>
     );
}
 
export default NotFound;