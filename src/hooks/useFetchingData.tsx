import { useState, useEffect } from 'react';
import axios from 'axios';
import { addCityObject } from '../utils/helpers';
import { IEmployerObject } from '../utils/types';

const useFetchingData = (apiUrl: string) => {
    const [data, setData] = useState<Array<IEmployerObject>>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsError(false);
            setIsLoading(true);
            try {
                const result = await axios.get(apiUrl);
                const employersListObject = addCityObject(result.data);
                setData(employersListObject);
            } catch (error) {
                setIsError(true);
            }
            setIsLoading(false);
        };
        fetchData();
    }, [apiUrl]);

    return { data, isLoading, isError };
};

export default useFetchingData;
