import axios from "axios"

const Api = "http://localhost:5555"

const addData = (contactData) => axios.post(`${Api}/project/add`, contactData)

export { addData }