import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading , setLoading] = useState(true);
    const [Errors , setErrors] = useState (null);


    useEffect( ()=> {

        const abortCont = new AbortController();

        setTimeout ( ()=>{
            fetch(url , {signal : abortCont.signal})
            .then(res => {
                if (!res.ok){
                    throw Error('data couldnt be fetched from ressource')
                }
                return res.json();
            }).then(
                data => {
                    setData(data);
                    setLoading(false);
                    setErrors(null);
                }).catch (err =>{
                    if (err.name == 'AbortError'){
                        console.log('fetch aborted');
                    }
                    else {
                        setLoading(false);
                        setErrors(err.message);
                    }
                   
                })
       
             } , 2000 );

             return () => abortCont.abort();
      }, [url]);

      return {
          data, isLoading , Errors
      }

}
 
export default useFetch