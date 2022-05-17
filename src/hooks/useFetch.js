import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoad(true);
        const res = await fetch(url);
        const json = await res.json();
        setData(json);
      } catch (error) {
        setError(error);
        console.log(error.message);
      } finally {
        setLoad(false);
      }
    };
    fetchData();
  }, [url]);
  return { data, load, error };
};
