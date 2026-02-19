import { useEffect, useState } from "react";

export function useFetch(fetchFn, initialValue) {
  const [isFetching, setisFetching] = useState()
  const [error, isError] = useState();
  const [fetchedData, setFetchedData] = useState(initialValue);

  useEffect(() => {
      async function fetchData() {
        setIsFetching(true);
        try {
          const data = await fetchFn();
          setUserPlaces(data);
        } catch (error) {
          setError({ message: error.message || 'Failed to fetch data.' });
        }
  
        setIsFetching(false);
      }
  
      fetchData();
    }, [fetchFn]);

    return {
      isFetching,
      fetchedData,
      setFetchedData,
      error
    }
}