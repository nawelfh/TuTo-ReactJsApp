import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const InfoListDetails = () => {
    const { id } = useParams ();
    const { data : info , isLoading , Errors } = useFetch('http://localhost:8000/infos/'+ id);
    const history = useHistory();
    const handleDelete = () => {
        fetch ('http://localhost:8000/infos/' + info.id, {
            method: 'DELETE'

        }).then(()=> {
            history.push('/')
        })
    }
    return ( 
       <div className="info">
           <h2> info details _ {id}</h2>
           {isLoading && <div> loading .... </div> }
           {Errors && <div> {Errors } </div> }
           {info && <div>
               <h2> {info.name} {info.lastName}</h2>
               <h2></h2>
               <h3>{info.work}</h3>
               <button className="delete-button" onClick={() =>handleDelete(info.id)}>Delete</button>
                </div> }
       </div> 
     );
}
 
export default InfoListDetails;