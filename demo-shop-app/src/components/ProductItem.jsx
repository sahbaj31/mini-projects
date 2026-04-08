import React, { useState } from 'react'
import ProductDate from './ProductDate'
import Card from './Card'
import './ProductItem.css'
const ProductItem = (props) => {

  const [title, setTitle] = useState(props.title);
  const submitHandler=(e)=>{
    // e.prevent.Default();
    setTitle("popcorn");
  }
  return (
    <Card >
      <ProductDate date={props.date}/>
      <div>
        <h2 >{title}</h2>
      </div>
      <button onClick={submitHandler}>Buy Now</button>
    </Card>
  )
}

export default ProductItem
