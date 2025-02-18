import axios from 'axios'
import React, { useContext, useState } from 'react'
import { authContext } from '../Context/AuthContext'


export default function AllOrders() {

    // const { userData, token } = useContext(authContext)

    // const [orders, setOrders] = useState([])

    // console.log(userData, 'here');

    // const id = userData?.id;
    // async function getUserOrders() {
    //     const res4 = await axios.get(`https://ecommerce.routemisr.com/api/v1/orders/user/${id}`,
    //         { headers: { token: token } })
    //         .then((resp) => {
    //             console.log(resp);
    //             setOrders(resp?.data.data)

    //         })
    //         .catch((err) => {
    //             console.log(err, 'fe error');

    //         })
    // }
    // getUserOrders()


    return (
        <>

            <h1 className='text-green-800  font-bold my-20 text-center text-2xl'>My Orders List</h1>

            {/* <h1 className='text-green-800  font-bold my-20 text-center text-2xl'>My Orders List</h1>


            {orders.cartItems?.map(order => <div key={order.id} className=" my-5 flex flex-col items-center justify-start     bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700  relative ms-10 text-center w-[80%]
            ">
                <img className="ms-5 object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={order.cartItems.imageCover} alt={order.cartItems.title} />
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{order.cartItems.title}</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{order.totalOrderPrice} EGP</p>

                </div>
                <div /> */}



        </>
    )
}
