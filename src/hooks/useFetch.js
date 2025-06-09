import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let isMounted = true;

    async function fetchData() {
      try {
        const response = await axios.get(url);
        if(isMounted) {
          setData(response.data);
          setLoading(false);
        }
      } catch (err) {
        if(isMounted) {
          setError(true);
          setLoading(false);
        }
      }
    }

    fetchData();

    return () => { isMounted = false };
  }, [url]);

  return { data, loading, error };
}
