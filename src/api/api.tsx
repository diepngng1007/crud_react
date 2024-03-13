import axios from "axios";
import { IProduct } from "../interface/product";

const apiUrl = "http://localhost:3000/products"

//lấy ds sp
export const getAllProducts = async () => {
    try {
        const response = await axios.get(apiUrl)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const addProduct = async (data: IProduct) => {
    try {
        const response = await axios.post(apiUrl, data)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const updateProduct = async (data: IProduct) => {
    try {
        const response = await axios.put(`${apiUrl}/${data.id}`, data)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const deleteProduct = async (id: string) => {
    try {
        const response = await axios.delete(`${apiUrl}/${id}`)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const getOneProduct = async (id: string) => {
    try {
        const response = await axios.get(`${apiUrl}/${id}`)
        return response.data
    } catch (error) {
        console.log(error)
    }
}