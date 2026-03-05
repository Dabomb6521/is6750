import { useState,useEffect } from "react";

import {createData, deleteData, getData} from "../utils/jobUtils"

export const useBackendSync = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const gatherData = async () => {
            setLoading(true);
            setError(null);
            try {
                const data = await getData(url);
                setData(data)
            } catch (err) {
                setError(err)
            }
            setLoading(false);
        }
        gatherData()
    }, [])

    async function handleDeleteEvent(id) {
    setData((dataList) => dataList.filter((item) => item.id != id));
    try {
      const val = await deleteData(url,id);
    } catch (err) {
      setData(data)
    }
  }

  async function handleAddData(newData) {
    setData((dataList) => [...dataList, {...newData,id:Date.now()}]);
    try {
      const val = await createData(url,newData);
    } catch (err) {
      setData(data)
    }
  }
    return [data,loading,error,handleDeleteEvent,handleAddData];
}