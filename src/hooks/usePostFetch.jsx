import { useState } from "react";


export function usePostFetch(url, type){
    const [alumnos, setAlumnos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    
    const executePost = (payload) =>{
        setIsLoading(true)
        setError(null)
        //setAlumnos(null)

        let options= {
            method: "POST",
            headers: {
                // "Content-type": "multipart/form-data"
                "Content-type": "application/json"
            },
            // body: payload
            body: JSON.stringify(payload)
        }

        fetch(url, options)
        .then((response) => response.json())
        .then((data) => setAlumnos(data.model))
        .catch((error) => setError(error))
        .finally(() => setIsLoading(false))
    }

    return {alumnos, isLoading, error, executePost};
}