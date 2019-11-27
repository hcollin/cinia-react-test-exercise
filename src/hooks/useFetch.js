import { useState, useEffect } from "react";

export default function useFetch(url) {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(url)
            .then(resp => {
                return resp.json();
            })
            .then(data => {
                setData(data.results);
            });
    }, [url]);

    return data;
}
