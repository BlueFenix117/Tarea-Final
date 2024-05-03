import { useEffect, useState } from "react";

export function useFetch(url){
    const [data, setData] = useState([]);
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
            .then((data) => setData(data.model))
            .catch((error) => setError(error))
            .finally(() => setIsLoading(false))
    },[])

    return {data, isLoading, error};
}