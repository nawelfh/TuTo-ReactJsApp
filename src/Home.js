import { useHistory } from "react-router-dom";
import InfoList from "./InfoList";
import useFetch from "./useFetch";

const Home = () => {


    const {data : infos , isLoading , Errors } = useFetch('http://localhost:8000/infos')
    const history = useHistory();
 
    
    
    return ( 
        <div className="home">
            <h2>Home page</h2>
            {Errors && <h2> {Errors} </h2>}
            {isLoading && <h2>loading data .... </h2>}
            {infos && <InfoList infos={infos} infoTitle = 'All Information :' />}
            
           
        </div>
     );
}
 
export default Home;