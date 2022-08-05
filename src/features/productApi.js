import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { URL_API } from '../utils/constant'

export const fetchProducts = createAsyncThunk('products/getProducts', async () => {
  const response = await axios.get(URL_API)
  return response.data
})

export const saveProduct = createAsyncThunk('products/saveProduct', async (product) => {
  const response = await axios.post(URL_API, product)
  return response.data
})

export const updateProduct = createAsyncThunk('products/updateProduct', async (product) => {
  const response = await axios.put(`${URL_API}/${product.id}`, product)
  return response.data
})

export const deleteProduct = createAsyncThunk('products/deleteProduct', async (id) => {
  await axios.delete(`${URL_API}/${id}`)
  return id
})
