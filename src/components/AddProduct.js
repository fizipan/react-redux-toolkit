import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { saveProduct } from '../features/productApi'

const AddProduct = () => {
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')

  const dispatch = useDispatch()
  const navigation = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch(saveProduct({ title, price }))
    setTitle('')
    setPrice('')
    navigation('/')
  }

  return (
    <div className="box mt-5">
      <h4 className="title is-4">Add Product</h4>
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
          <div className="control">
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

export default AddProduct
