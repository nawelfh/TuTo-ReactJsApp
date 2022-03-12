import { Link } from "react-router-dom";

const InfoList = (props) => {

    return ( 
        <div>
            <h2 className="content">{props.infoTitle}</h2>
             {
                    props.infos.map( (info) => (
                    <div className="info" key={info.id}>
                        <Link to={`/infos/${info.id}`}>
                        <h2>Mr/Mrs : {info.name}</h2>
                        <h3>Work : {info.work}</h3> 
                        </Link>
                    </div>
                  
             ))}
            
        </div>
     );
}
 
export default InfoList;