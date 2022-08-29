import React from 'react';
import { CartState } from "../context/Context";
import SingleProduct from './SingleProduct';
import Filter from './Filter';
import './singleProduct.css'
import Search from './Search';

const Home = () => {
  const { state: { products },
    filterState: { color, gender, type ,searchQuery} } = CartState();

  const transformProducts = () => {
    let sortedProducts = products;

    if (color) {
      sortedProducts = sortedProducts.filter((prod) => prod.color === color);
      console.log(sortedProducts)
    }

    if (gender) {
      sortedProducts = sortedProducts.filter((prod) => prod.gender === gender);
    }

    if (type) {
      sortedProducts = sortedProducts.filter(
        (prod) => prod.type === type
      );
    }

    if (searchQuery) {
      sortedProducts = sortedProducts.filter((prod) =>{
        console.log(prod)
        return prod.name.toLowerCase().includes(searchQuery.toLowerCase())
      }
      );
    }

    return sortedProducts;
  };

  return (
    <div>
      <Search />
      <div className='home'>
        <Filter />
        <div className='productContainer'>
          {transformProducts().map((prod) => {
            return <SingleProduct prod={prod} key={prod.id} />
          })}
        </div>
      </div>
    </div>
  )
}

export default Home