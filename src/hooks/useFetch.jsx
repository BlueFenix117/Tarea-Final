import { useEffect, useState } from "react";

export function useFetch(url){
    const [alumnos, setAlumnos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect( () =>{
        setIsLoading(true);

        fetch(url,{
            method: "GET",
            headers: {
                "Content-type" : "application/json",
            }
        })
            .then((response) => response.json())
            .then((data) => setAlumnos(data.model))
            .catch((error) => setError(error))
            .finally(() => setIsLoading(false))
    },[])

    return {alumnos, isLoading, error};
}