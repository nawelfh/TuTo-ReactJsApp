import { useState } from "react";
import { useHistory } from "react-router-dom";

const AddContact = () => {
    const [name , setName] = useState('');
    const [lastName , setLastName] = useState('');
    const [work , setWork] = useState('CTO');
    const [loading , setIsLoading] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault(); // prevent refrech page
        setIsLoading(true);
        const info = {name , lastName , work};
        fetch('http://localhost:8000/infos', {
            method : 'POST',
            headers : {"Content-Type":"application/json"},
            body : JSON.stringify(info)
        }).then(() => {
            console.log("contact Added successfully");
            setIsLoading(false);
        })

        history.push('/');
        // to go to the page just one step before it if 2 do go(2)
        //history.go(1);
    }

    return ( 
        <div className="create">
            <h2>Add new contact</h2>
            <form onSubmit={handleSubmit}>
                <label>Name :</label>
                <input
                type = "text"
                required
                value={name}
                onChange={(e)=>setName(e.target.value)}/>
                 <label>LastName :</label>
                <input
                type = "text"
                required
                value={lastName}
                onChange={(e)=>setLastName(e.target.value)}/>
                <label>Work :</label>
                <select value={work}
                onChange={(e)=>setWork(e.target.value)}>

                
                    <option value ="CTO">CTO</option>
                    <option value ="Intern">Intern</option>
                    <option value ="Manager">Manager</option>
                </select>
                {!loading && <button> Add Contact </button>}
                {loading && <button disabled>Loading Add ... </button>}
              
            </form>
        </div>
     );
}
 
export default AddContact;