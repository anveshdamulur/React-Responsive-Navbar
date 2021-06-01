import axios from 'axios';
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setProducts } from '../../redux/actions/ProductActions';

const Home = () => {
    const products = useSelector(state => state)
    const dispatch = useDispatch();

    const fetchProducts = async() =>{
        const response = await axios
        .get("https://fakestoreapi.com/products")
        .catch(err =>{
            console.log(err)
        })
        dispatch(setProducts(response.data));
    }
    useEffect(()=>{
        fetchProducts();
    },[])
    console.log(products)
    return (
        <div className="page-heading">
            <h1>Home</h1>
        </div>
    )
}

export default Home
