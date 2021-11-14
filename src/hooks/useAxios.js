import { useEffect, useState } from "react";
import httpClient from "../components/utils/httpClient";

const useAxios = (endpoint) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        httpClient.get(endpoint)
        .then(response => {
            if (response.status == 200) {
                setData(response.data);
                setIsPending(false);
                setError(null);
            }

            if (response.status == 401) {
                setIsPending(false);
                setError('error');
            }
        });
    }, []);

    return {
        data,
        isPending,
        error
    }
}

export default useAxios;