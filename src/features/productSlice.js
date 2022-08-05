import { createSlice, createEntityAdapter } from '@reduxjs/toolkit'
import { deleteProduct, fetchProducts, saveProduct, updateProduct } from './productApi'

const productsEntity = createEntityAdapter({
  selectId: (product) => product.id,
})

const productSlice = createSlice({
  name: 'product',
  initialState: productsEntity.getInitialState(),
  extraReducers: {
    [fetchProducts.fulfilled]: (state, action) => {
      productsEntity.setAll(state, action.payload)
    },
    [saveProduct.fulfilled]: (state, action) => {
      productsEntity.addOne(state, action.payload)
    },
    [updateProduct.fulfilled]: (state, action) => {
      productsEntity.updateOne(state, action.payload)
    },
    [deleteProduct.fulfilled]: (state, action) => {
      productsEntity.removeOne(state, action.payload)
    },
  },
})

export const productsSelectors = productsEntity.getSelectors((state) => state.product)
export default productSlice.reducer
