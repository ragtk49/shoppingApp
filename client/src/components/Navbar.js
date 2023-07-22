import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import {Badge} from '@material-ui/core';
import { mobile } from '../responsive';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {logout} from '../redux/apiCalls';
import {clearCart, saveCartToLocalStorage, clearCartFromLocalStorage, setCartFromLocalStorage} from '../redux/cartRedux';
import { useNavigate } from 'react-router-dom';

const Container =  styled.div`
    height: 60px;
    background-color: black;
    ${mobile({height: "50px"})}
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
`
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    color : white;
    ${mobile({display: "none"})}
`

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`

const Input = styled.input`
    border: none;
    ${mobile({width: "50px"})}
`

const Center = styled.div`
    flex: 1;
    text-align: center;
`

const Logo = styled.h1`
    font-weight: bold;
    color: white;
    ${mobile({fontSize: "24px"})}
`

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({flex: 2, justifyContent: "center"})}
`

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    color : white;
    ${mobile({fontSize: "12px", marginLeft: "10px"})}
`

export const Navbar = () => {
    const quantity = useSelector(state => state.cart.quantity)
    const user = useSelector((state) => state.user.currentUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout(dispatch);
        dispatch(clearCart());
        dispatch(clearCartFromLocalStorage());
        navigate("/");
      }
    // Save cart data to localStorage when the cart data changes  
    useEffect(() => {
        dispatch(saveCartToLocalStorage());
    }, [dispatch, quantity]);

    // Load cart data from localStorage when the component mounts (user logs back in)
    useEffect(() => {
        const cartData = JSON.parse(localStorage.getItem("cart"));
        if (cartData) {
          dispatch(setCartFromLocalStorage(cartData));
        }
      }, [dispatch]);

  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input style={{backgroundColor: "black"}} placeholder='Search'/>
                    <Search style={{color: "white",fontSize: "20px", marginLeft:"3px" } }/>
                </SearchContainer>
            </Left>
            <Center>
                <Link to="/" style={{textDecoration: "none"}}>
                <Logo>SHOPEE.</Logo>
                </Link>
            </Center>
            <Right>
                {user ? (
                    // Show the "LOGOUT" button if the user is authenticated
                         <MenuItem onClick={handleLogout}>LOGOUT</MenuItem>
                    ) : (
                        <>
                            <Link to="/register" style={{textDecoration: "none"}}>
                            <MenuItem>REGISTER</MenuItem>
                            </Link>
                            <Link to="/login" style={{textDecoration: "none"}}>
                            <MenuItem>SIGN IN</MenuItem>
                            </Link>
                        </>
                    )}
                <Link to="/cart">
                <MenuItem>
                    <Badge badgeContent={quantity} color="primary">
                        <ShoppingCartOutlined />
                    </Badge>
                </MenuItem>
                </Link>
            </Right>
        </Wrapper>
    </Container>
  )
}
