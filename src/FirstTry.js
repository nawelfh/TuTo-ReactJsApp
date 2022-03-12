const FirstTry = (props) => {
    const dynamicTitle = 'this is a tuto of reactjs';
    const numberOfLikes = 50;
    let link = "www.google.com"
    return ( 
        <div>
        <p> hello  {dynamicTitle} we have {numberOfLikes} likes 
         random numbers using math.random : {Math.random() *10 } </p>
        <p>this is an array : {[1,3,58,45,58]}  <a href={link} className="link-google">google site</a> </p>
        </div>
     );
}
 
export default FirstTry;