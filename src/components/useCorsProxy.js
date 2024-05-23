import { useState } from 'react';
import corsAnywhere from 'cors-anywhere';

// Create a new instance of cors-anywhere
const cors = corsAnywhere.create();

const useCorsProxy = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    const fetchData = async (url) => {
        setIsLoading(true);
        try {
            // Fetch data through the CORS proxy
            const response = await cors.get(url);
            const jsonData = await response.json();
            setData(jsonData);
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    };

    return { isLoading, data, error, fetchData };
};

export default useCorsProxy;
