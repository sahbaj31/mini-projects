import React from 'react'
import Products from './components/Products'
import './App.css'
import ProductForm from './components/ProductForm'

const App = () => {
  const product = [
    {
    id: 'p1',
    title:"Coca-Cola",
    amount: 45,
    date: new Date(2020,5,2),
  },
  {
    id: 'p2',
    title:"Maggie",
    amount: 45,
    date: new Date(2020,5,2),
  },
  {
    id: 'p3',
    title:"Blue-Berry",
    amount: 45,
    date: new Date(2020,5,2),
  },
  {
    id: 'p4',
    title:"Butter",
    amount: 45,
    date: new Date(2020,5,2),
  }
  ];

  function printProductData(data){
  }
  
  return (
    <div>
      <ProductForm func={printProductData}/>
      <Products items={product}/>
    </div>
  )
}

export default App
