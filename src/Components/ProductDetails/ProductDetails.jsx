import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query';
import LoaderScreen from '../LoaderScreen/LoaderScreen';
import axios from 'axios';
import { cartContext } from './../Context/CartContext';
import toast, { Toaster } from 'react-hot-toast';

export default function ProductDetails() {


    const { id } = useParams()

    // const { addProductsToCart } = useContext(cartContext)

    const { addProductsToCart } = useContext(cartContext)


    function getProductDetails() {
        return axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
        // i want to make the id of clicked component
    }


    const { data, isError, isLoading } = useQuery({
        queryKey: ['productdetails', id],
        queryFn: getProductDetails,
    })
    // console.log(data?.data.data);

    async function handleAddtoCart() {


        const res = await addProductsToCart(id);

        //display success message 
        if (res) {
            // toast message

            toast.success("success", { duration: 3000, position: "top-right" })


            // console.log('success!!!!');
        }

        else {
            // console.log('error!!!');
            toast.error('Error', { duration: 3000, position: "top-right" })
        }






    }












    const productDetailsObj = data?.data.data;

    if (isError) {
        return <h1> No product found wtih this ID</h1>
    }

    if (isLoading) {
        return <LoaderScreen />
    }

    return (
        <>


            <div className="container mx-auto my-20 overflow-hidden">
                <div className="grid sm:grid-cols-4">
                    <div className="col-span-1">

                        <img src={productDetailsObj.imageCover} className='w-full ms-5' alt={productDetailsObj.title} />

                    </div>
                    <div className="col-span-3">
                        <h1 className='text-green-700  ms-20 text-3xl font-bold'>{productDetailsObj.title}</h1>
                        <p className='ms-10 my-3'>{productDetailsObj.description}</p>
                        <h5 className='ms-10 my-3 '>Price: {productDetailsObj.price} EGP</h5>
                        <h5 className='ms-10 my-3 '>Quantity: {productDetailsObj.quantity}</h5>

                        <button onClick={handleAddtoCart} className='bg-green-400 py-2 w-[75%] ms-10 my-3 me-5'>+ Add to Cart </button>
                    </div>




                </div>

            </div>







        </>
    )
}
