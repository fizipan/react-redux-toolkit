import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteProduct, fetchProducts } from '../features/productApi'
import { productsSelectors } from '../features/productSlice'

const ShowProduct = () => {
  const dispatch = useDispatch()
  const products = useSelector(productsSelectors.selectAll)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  return (
    <div className="box mt-5">
      <Link to="add" className="button is-success">
        Add Product
      </Link>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>
                <Link to={`edit/${product.id}`} className="button is-info is-small">
                  Edit
                </Link>
                <button
                  className="button is-danger is-small"
                  onClick={() => dispatch(deleteProduct(product.id))}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ShowProduct
