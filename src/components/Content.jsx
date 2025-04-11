import React, { useEffect, useState } from 'react';
import './content.css';
const Content = ({ cart, setCart }) => {

  const [products, setProducts] = useState([]);


  async function fetchData(){
    try{
      const response = await fetch("https://fakestoreapi.com/products");
      if(!response.ok){
        throw new Error(`HTTP error!`);
      }
      const data = await response.json();
      setProducts(data);
      console.log(data);
    }catch (error){
      console.error("error in fetching data",error);
    }
    }

  useEffect(()=>{
    fetchData();},[]);

    
  
    const addToCart = (item) => {
      const isItemInCart = cart.some((cartItem) => cartItem.id === item.id);
      
      if (isItemInCart) {
        alert(`${item.title} is already in the cart!`); 
        return; 
    }
      setCart([...cart, item]);  
  };

    


  return (

    <div className='productlist'>
      <h1 className='list'>Product List</h1>
      <div className='grid'>
      {products.map((items)=>(
        <div key={items.id} className='box'>
          <img src={items.image} alt="" className='image'/>
        <h3>{items.title}</h3>
        <h5>{items.price} $</h5>
        <h4 className='des'>{items.description}</h4>
        <h3 className='cat'>category:{items.category}</h3>
        <h5 className=''>Rating : {items.rating.rate}</h5>
        <h5> Count : {items.rating.count}</h5>
        <button className='add_cart' onClick={() => addToCart(items)}>Add to Cart</button>

        </div>
      ))};
    </div>
    </div>

  );
};

export default Content;