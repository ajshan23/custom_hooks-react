import React from 'react'
import useApi from '../hooks/useApi'

const productList = () => {
    const {data,error,loading}=useApi("url")
  return (
    <div>productList</div>
  )
}

export default productList