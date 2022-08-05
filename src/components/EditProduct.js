import React, { useEffect, useState } from 'react'
import { productsSelectors } from '../features/productSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchProducts, updateProduct } from '../features/productApi'
import { Link, useNavigate } from 'react-router-dom'

const EditProduct = () => {
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')

  const { id } = useParams()
  const navigation = useNavigate()

  const dispatch = useDispatch()
  const product = useSelector((state) => productsSelectors.selectById(state, id))

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  useEffect(() => {
    if (product) {
      setTitle(product.title)
      setPrice(product.price)
    }
  }, [product])

  const handleSubmit = async (e) => {
    e.preventDefault()
    await dispatch(updateProduct({ id, title, price }))
    setTitle('')
    setPrice('')
    navigation('/')
  }

  return (
    <div className="box mt-5">
      <h4 className="title is-4">Edit Product</h4>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label className="label">Title</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="input title.."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Price</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="input price.."
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
        </div>

        <div className="field is-grouped">
          <div className="control has-text-centered">
            <button className="button is-link">Submit</button>
          </div>
          <div className="control">
            <Link to="/" className="button is-link is-light">
              Cancel
            </Link>
          </div>
        </div>
      </form>
    </div>
  )
}

export default EditProduct
