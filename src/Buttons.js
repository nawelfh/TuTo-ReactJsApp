import { useState } from "react";
const Buttons = () => {

    const [firstName, setFirstName] = useState('nawel');
    const [clickSimple , setClickSimple] = useState ('i am a handle click !! click to see what happen :D');
    const [clickWithParam , setClickWithParam] = useState ('nothing to say just click below to see what happen')
    const [age , setAge] = useState (27);
    const [completed , setCompleted] = useState(false);

    const handleClick = (e) => {
        console.log('i am a handle click',e);
        setClickSimple('i am a simple click after clicking btn');
     }
   
     const handleClickWithParam = (name , e) =>{
         console.log ('hello ' + name, e.target);
         let greeting = ('hello ' + name + ' so cool no ??' );
         setClickWithParam(greeting);
     }
 
     const handleClickHook = () =>{
         setFirstName('azer');
         setAge(23);
         setCompleted (true);
         console.log (completed)
         }
    return ( 
        <div className="home">
            <h1>Buttons Page</h1>
        <div className="info">
            
                <h3>{clickSimple}</h3>
                <button className ="mybutton" onClick={handleClick}>simple button with function without param</button>
            </div>
            <div className="info">
                <h3>{clickWithParam}</h3>
                <button className="mybutton" onClick={(e)=> handleClickWithParam('nawel',e)}> button with click function(params)</button>
            </div>
            <div className="info">
                <h3>My name is {firstName} i am {age} years old my mission is completed {completed} </h3>
                <button className="mybutton"onClick={handleClickHook}>change name and age using hook</button>
            </div>
       </div>
     );
}
 
export default Buttons;