import React, { useState } from 'react'
import './ProductForm.css'
const ProductForm = (props) => {

  const [newTitle, setTitle] = useState('');
  const [newDate, setDate] = useState('')

  function titleChangeHandler(e){
    
    setTitle(e.target.value);
  }
  function dateChangeHandler(e){
    setDate(e.target.value);
  }

  const submitHandler=(e)=>{
    e.preventDefault();

    const productData ={
      title:newTitle,
      date:newDate
    };

    props.func(productData);

    setTitle('');
    setDate('');

  }

  return (
    <form onSubmit={submitHandler} className='form-style'>
      <div>
        <div>
          <label>Title</label>
          <input
          value={newTitle}
          onChange={titleChangeHandler}
          type="text" />
        </div>

        <div>
          <label >Date</label>
          <input
          value={newDate}
          onChange={dateChangeHandler}
          type="date" min='2023-01-01' max='2023-12-12' />
        </div>
        <div>
          <button type='submit'>Add Product</button>
        </div>
      </div>
    </form>
  )
}

export default ProductForm
