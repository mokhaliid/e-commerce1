import React from 'react'
import { cartContext } from '../Context/CartContext'
import { toast } from 'react-hot-toast';
import { useContext, useState } from 'react';
import { useFormik } from 'formik';
import axios from 'axios';




export default function Order() {
    const { resetValues, cartId } = useContext(cartContext)
    const [isCash, setisCash] = useState(true)

    const formikObj = useFormik({
        initialValues: {
            "details": "",
            "phone": "",
            "city": ""
        },
        onSubmit: function (values) {
            if (isCash) {
                createCashOrder(values)
            }
            else {
                createCheckOut(values)
            }
        }
    })




    function createCashOrder(values) {
        axios.post(`https://ecommerce.routemisr.com/api/v1/orders/${cartId}`,
            { shippingAddress: values },
            { headers: { token: localStorage.getItem('tkn') } })

            .then((resp) => {
                if (resp.data.status == 'success') {
                    toast.success("order Created", { position: 'top-right' })
                    resetValues()

                }
            })
            .catch((err) => {
                console.log(err, 'err');

            })
    }


    function createCheckOut(values) {
        axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}`, {
            shippingAddress: values
        }
            , { headers: { token: localStorage.getItem('tkn') }, params: { url: 'http://localhost:5173' } })
            .then((resp) => {
                window.open(resp.data.session.url, "blank")
            })
            .catch((err) => {
                console.log(err, 'err');

            })


    }





    return (
        <>

            <div className="container mx-auto p-5 my-20">


                <h1 className='text-green-700 font-extrabold py-2 size-15 max-w-sm mx-auto'>Create Order</h1>

                <form onSubmit={formikObj.handleSubmit} className='max-w-sm mx-auto'>
                    <div className="mb-6">
                        <label htmlFor="details" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Details</label>
                        <input value={formikObj.values.details} onChange={formikObj.handleChange} type="Text" id="details" className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone</label>
                        <input value={formikObj.values.phone} onChange={formikObj.handleChange} type="tel" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                    <div>
                        <label htmlFor="City" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">City</label>
                        <input value={formikObj.values.city} onChange={formikObj.handleChange} type="Text" id="city" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>


                    <div className="text-center">
                        <button onClick={() => setisCash(true)} type="submit" class="text-white ms-5 my-5 bg-green-700 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Cash Order</button>


                        <button onClick={() => setisCash(false)} type="submit" class="text-white ms-5 my-5 bg-green-700 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Checkout</button>


                    </div>

                </form>




            </div>





        </>
    )
}
