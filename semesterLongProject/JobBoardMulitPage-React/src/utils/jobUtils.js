import axios from "axios"

const baseURL = import.meta.env.VITE_BACKEND_URL

export const getJobs = async () => {
  try {
    const {data} = await axios.get(`${baseURL}/jobs`);
    return data
    
  } catch (err) {
    console.err("There was an error getting data. Please call the help desk" + err.toString())
    return []
  }
}

// GET ID
export const getJobByID = async (id) => {
  try {
    const {data} = await axios.get(`${baseURL}/jobs/${id}`)

    return data
  } catch (err) {
    console.err("There was an error getting data by id. Please call the help desk" + err.toString())
    return []
  }
}

export const createJob = async (job) => {
  try {
    const {data} = await axios.post(`${baseURL}/jobs`, job)
    return data
  } catch (err) {
    console.err("There was an error getting data by id. Please call the help desk" + err.toString())
    return []
  }
}

export const updateJob = async (id, updateData) => {
  try {
    const {data} = await axios.post(`${baseURL}/jobs/${id}`, updateData)
    return data
  } catch (err) {
    console.err("There was an error creating data. Please call the help desk" + err.toString())
    return []
  }
}

// DELETE
export const deleteJob = async (id) => {
  try {
    const data = await axios.delete(`${baseURL}/jobs/${id}`)
    return data;
  } catch (err) {
    console.err("There was an error getting data. Please call the help desk" + err.toString())
    return []
  }
}