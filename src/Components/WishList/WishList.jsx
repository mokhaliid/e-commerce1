import React, { useContext, useEffect } from 'react'
import image3dya from './../../assets/images-20250124T175303Z-001/images/slider-image-3.jpeg'
import { cartContext } from '../Context/CartContext'
import LoaderScreen from '../LoaderScreen/LoaderScreen'
import Notfound from '../Notfound/Notfound'
import toast from 'react-hot-toast'

LoaderScreen
export default function WishList() {



    // const { addProductsToWishList, WishList } = useContext(cartContext)

    const { removeElementFromWishList, handleDeleteWishList, addProductsToCart2, addProductsToCart, addProductsToWishList, products, removeElementFromCart, wishlist, getWishList, updateCount, totalCartPrice } = useContext(cartContext)

    useEffect(() => {
        getWishList()
    }, [])





    async function handleDeleteWishList2(id) {
        const isSuccess = await removeElementFromWishList(id);

        if (isSuccess) {
            toast.success('deleted', { position: 'top-right' })
        }

        else {
            toast.error('error', { position: 'top-right' })
        }
    }






    // console.log(products, 'products');
    // console.log(wishlist, 'wishlist');

    async function handleAddWishList(id) {
        const res = await addProductsToWishList(id);
        if (res) {
            toast.success('product Added successfully ', { position: "top-right" })

        }
        else {
            toast.error('error occured', { position: "top-right" })

        }
    }




    return (
        <div className=' mx-auto my-20  container '>

            <h1 className='text-green-800  font-bold my-20 text-center text-2xl'>My Wish List</h1>


            {wishlist?.map(wishlist => <div key={wishlist.id} className=" my-5 flex flex-col items-center justify-start     bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700  relative ms-10 text-center w-[80%]
            ">
                <img className="ms-5 object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={wishlist.imageCover} alt={wishlist.title} />
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{wishlist.title}</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{wishlist.price} EGP</p>
                    <button onClick={() => handleDeleteWishList2(wishlist.id)
                    } type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Remove</button>
                </div>

                <div className="">
                    <div className="absolute top-2 right-2 
                group-hover:translate-x-0  text-center transition  duration-500 ">
                        <button onClick={() => {

                            handleAddWishList(wishlist.id)

                        }
                        } className='bg-yellow-400 w-10 h-10 rounded-lg'>+</button>
                    </div>
                </div>
            </div >)}


            {/* Design */}

            {/* <div className="flex justify-center items-center flex-row my-20">
                <div className=" my-5 flex flex-col items-center justify-start     bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700  relative ms-10 text-center w-[80%]
            ">
                    <img className="ms-5 object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={image3dya} alt />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">productName</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">1000 EGP</p>
                        <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Remove</button>
                    </div>

                    <div className="">
                        <div className="absolute top-2 right-2 
                group-hover:translate-x-0  text-center transition  duration-500 ">
                            <button onClick={(e) => {
                                e.preventDefault()
                                handleAddProduct(product._id)
                            }
                            } className='bg-yellow-400 w-10 h-10 rounded-lg'>+</button>
                        </div>
                    </div>
                </div >
            </div> */}




        </div>
    )
}
