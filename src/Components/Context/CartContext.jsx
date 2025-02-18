import axios from 'axios'
import React, { createContext, useContext, useState, useEffect } from 'react'
import { authContext } from './AuthContext'
import LoaderScreen from '../LoaderScreen/LoaderScreen'
import WishList from '../WishList/WishList'
import toast from 'react-hot-toast'

export const cartContext = createContext()

// controll provider =>store
export default function CartContextProvider({ children }) {

    const { token } = useContext(authContext)

    // => multiple states 

    // const [numOfCartItems, setNumOfCartItems] = useState(0)


    const [totalCartPrice, setTotalCartPrice] = useState(0)
    const [products, setProducts] = useState(null)

    const [clearCart, setClearCart] = useState(null)


    const [cartId, setCartId] = useState(null)




    // ⁡⁢⁣⁣// WishList⁡

    const [wishlist, setWishList] = useState([])

    // console.log(cartId);

    // dervied states.
    const numOfCartItems = products?.length


    async function addProductsToCart2(id) {


        const myCustomizedRes = await axios.post('https://ecommerce.routemisr.com/api/v1/cart', {
            "productId": id,
        },
            { headers: { token: token } })
            .then(function (res) {

                // console.log(res.data.numOfCartItems, 'res');
                // console.log(res.data.data.products, 'res');
                // console.log(res.data.data.totalCartPrice, 'res');


                // setNumOfCartItems(res.data.numOfCartItems)
                // setProducts(res.data.data.products)
                // setTotalCartPrice(res.data.data.totalCartPrice)

                setCartId(res.data.cartId)
                getUserCart()
                toast.success('product wish successfully', { position: "top-right" })
                //display message 

                return true
            })

            .catch(function (err) {
                console.log(err, 'err');
                return false
            })


        return myCustomizedRes;
        // return false
    }


    async function addProductsToCart(id) {


        const myCustomizedRes = await axios.post('https://ecommerce.routemisr.com/api/v1/cart', {
            "productId": id,
        },
            { headers: { token: token } })
            .then(function (res) {

                // console.log(res.data.numOfCartItems, 'res');
                // console.log(res.data.data.products, 'res');
                // console.log(res.data.data.totalCartPrice, 'res');


                // setNumOfCartItems(res.data.numOfCartItems)
                // setProducts(res.data.data.products)
                // setTotalCartPrice(res.data.data.totalCartPrice)

                setCartId(res.data.cartId)
                getUserCart()

                //display message 

                return true
            })

            .catch(function (err) {
                console.log(err, 'err');
                return false
            })


        return myCustomizedRes;
        // return false
    }

    function getUserCart() {

        axios.get('https://ecommerce.routemisr.com/api/v1/cart',
            { headers: { token: token } })


            .then(function (resp) {
                // console.log('resp', resp.data.numOfCartItems);
                // console.log('resp', resp.data.data.totalCartPrice);
                // console.log('resp', resp.data.data.products);

                // setNumOfCartItems(resp.data.numOfCartItems)
                setProducts(resp.data.data.products)
                setTotalCartPrice(resp.data.data.totalCartPrice)
                setCartId(resp.data.cartId)
            })
            .catch(function (err) {
                console.log('err', err);

            })
    }


    async function addProductsToWishList(id) {


        const response = await axios.post('https://ecommerce.routemisr.com/api/v1/wishlist', {
            "productId": id
        }
            , {
                headers: { token: token }
            }).then((res) => {
                console.log(res?.data, ' ADDED wishlist RESULT hena');
                // const x = setWishList()
                // console.log(x, 'test');

                // setProducts(res._id)
                // setProducts(res?.data.data.products)
                setProducts(res?.data.id)

                getWishList()

            })
            .catch((err) => {
                console.log(err, ' NOT ADDED wishlist RESULT');

            })


    }

    async function getWishList() {
        const myCustomizedRes2 = await axios.get('https://ecommerce.routemisr.com/api/v1/wishlist', {
            headers: { token: token }
        })
            .then((res) => {
                const test = setWishList(res?.data.data)
                // setWishList(res?.data.id)
                // setProducts(res?.data)
                console.log(test, 'show showlist');
                // console.log(res, 'show showlist');
                return true
            })
            .catch((err) => {
                console.log(err, 'error SHowlist');
                return false
            })
        return myCustomizedRes2
    }








    async function removeElementFromCart(id) {

        const res = await axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`, {
            headers: { token: token, }
        })
            .then((resp) => {
                // console.log(res.data.numOfCartItems);
                // console.log(res.data.data.totalCartPrice);
                // console.log(res.data.data.products);



                // setNumOfCartItems(resp.data.numOfCartItems)
                setProducts(resp.data.data.products)
                setTotalCartPrice(resp.data.data.totalCartPrice)


                return true

            })
            .catch((err) => {
                // console.log(err);
                return false
            })


        return res
    }


    // remove element from wishList
    async function removeElementFromWishList(id) {

        const res3 = await axios.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${id}`, {
            headers: { token: token, }
        })
            .then((resp) => {

                setWishList(resp?.data.data)

                console.log(resp);

                return true

            })
            .catch((err) => {
                console.log(err);
                return false
            })


        return res3
    }








    async function updateCount(id, newCount) {
        const res = await axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,
            {
                "count": newCount
            },
            { headers: { token: token, } }
        )
            .then(function (resp) {
                // setNumOfCartItems(resp.data.numOfCartItems)
                setProducts(resp.data.data.products)
                setTotalCartPrice(resp.data.data.totalCartPrice)
                return true
            })
            .catch(function (err) {
                // console.log(err, 'errrrrr');
                return false
            })


        return res
    }

    function resetValues() {
        setTotalCartPrice(0)
        setProducts(null)

        setCartId(null)

    }



    // clear cart logic

    async function clearCartFN() {

        const resp = await axios.delete('https://ecommerce.routemisr.com/api/v1/cart', { headers: { token: token } })
            .then(function (res) {
                console.log('clear tmam', res);
                // setProducts(res.data.data.products)

                setTotalCartPrice(0)
                setProducts([])
                return true


            })
        // .catch(function (err) {
        //     console.log("clear msh tmaaam", err);
        //     return false
        // })
        return resp
    }



    // comp did mount
    // l function de msh htetnfz tany wna btn2l l2nha mra w7da bs
    // w teshtghl fkol mra l token et8yr ay change fl token 
    useEffect(() => {
        //on every refresh /firs time
        //login=> token
        if (token) {
            getUserCart()
        }



    }, [token])





    return (
        <cartContext.Provider value={{ removeElementFromWishList, addProductsToCart2, getWishList, addProductsToWishList, wishlist, addProductsToCart, getUserCart, totalCartPrice, products, numOfCartItems, updateCount, removeElementFromCart, clearCartFN, cartId, resetValues }}>
            {children}
        </cartContext.Provider>
    )
}
