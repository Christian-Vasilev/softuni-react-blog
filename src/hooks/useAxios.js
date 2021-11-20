import { useEffect, useState } from "react";
import httpClient from "../utils/httpClient";

const useAxios = (endpoint) => {
    const [data, setData] = useState({});
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        httpClient.get(endpoint)
        .then(response => {
            if (response.status == 200) {
                setData(response.data);
                setIsPending(false);
            }

            if (response.status == 401) {
                setIsPending(false);
                setError(true);
                setErrorMessage(response.data.message)
            }
        });
    }, [endpoint]);

    return {
        data,
        isPending,
        error,
        errorMessage,
    }
}

export default useAxios;