import React, { useEffect } from 'react'
import { createContext , useContext, useReducer} from 'react'
import axios from 'axios';
import { cartReducer ,filterReducer} from './Reducers';


const baseURL = "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json";


const Cart = createContext();

const Context = ( {children}) => {


  const [state,dispatch] = useReducer(cartReducer,
    {products:[],cart:[]});

  useEffect(() => {
    const getProduct = async() => {
      let response = await axios.get(baseURL);
      dispatch({type:'GET_DATA',payload:response.data})
    }
    getProduct();
  },[])

  const [filterState, filterDispatch] = useReducer(filterReducer,{
    color:"",
    gender:"",
    price:"",
    type:"",
    searchQuery: "",
  })

  return (
    <Cart.Provider value={{state,dispatch,filterState,filterDispatch}}>{children}</Cart.Provider>
  )
}


export const CartState = () => {
  return useContext(Cart);
}

export default Context;