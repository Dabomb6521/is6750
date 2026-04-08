import { setPlaylist } from "./playlist";
import {setLoading, setError} from './ui'

export function initializeData(url){
  return async (dispatch)=>{
    dispatch(setLoading(true));
    const fetchData=async() => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        dispatch(setPlaylist(data))
      } catch (error) {
        dispatch(setError(error));
      } finally {
        dispatch(setLoading(false));
      }

    }
    await fetchData()
  }
}