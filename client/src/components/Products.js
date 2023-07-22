import styled from 'styled-components'
import { Product } from './Product'
import React, { useEffect } from 'react'
import axios from 'axios'

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

export const Products = ({cat,filters,sort}) => {

    const [products,setProducts] = React.useState([])
    const [filteredProducts,setFilteredProducts] = React.useState([])

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get(cat ? `http://localhost:3001/api/products?cat=${cat}` : "http://localhost:3001/api/products")
                setProducts(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        getProducts();
    },[cat])

    useEffect(() => {
        cat && setFilteredProducts(
            products.filter(item => Object.entries(filters).every(([key,value]) => item[key].includes(value)))
        )
    },[products,cat,filters])

    useEffect(() => {
        if(sort === "newest"){
            setFilteredProducts(
                filteredProducts.sort((a,b) => a.createdAt - b.createdAt)
            )
        }
        else if(sort === "asc"){
            setFilteredProducts(
                filteredProducts.sort((a,b) => a.price - b.price)
            )
        }
        else{
            setFilteredProducts(
                filteredProducts.sort((a,b) => b.price - a.price)
            )
        }
    },[sort])


  return (
    <Container>
        {cat ? filteredProducts.map(item => (
            <Product item={item} key={item.id} />
        )) : products.slice(0,8).map((item) => (<Product item={item} key={item.id} />))}
    </Container>
  )
}
