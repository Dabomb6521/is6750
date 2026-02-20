import { useEffect, useState } from "react";

import { deleteData, getData } from "../utils/jobUtils";

export const useBackendSync = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await getData(url);
        setData(data);
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    };

    fetchData();
  }, [url]);

  async function handleDeleteEvent(id) {
    setData((dataList) => dataList.filter((item) => item.id != id))
    try {
      const val = await deleteData(url, id);
    } catch (err) {
      setData(data)
    }
  }

  return {
    loading,
    data,
    error,
    handleDeleteEvent
  };
};
