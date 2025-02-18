import React, { useContext } from 'react'
import { cartContext } from './../Context/CartContext';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import LoaderScreen from './../LoaderScreen/LoaderScreen';
import { Link } from 'react-router-dom';






export default function Products() {
  const { addProductsToCart } = useContext(cartContext);



  function getAllProducts2() {
    return axios.get('https://ecommerce.routemisr.com/api/v1/products')
  }

  const { data, isError, error, isLoading, isFetching, refetch } = useQuery({
    queryKey: ['getallproducts'],
    queryFn: getAllProducts2,

    // refetchOnWindowFocus: true,
    // refetchInterval: 3000,
    // retry: 5,
    // retryDelay,1000,
    // gcTime: 2000,
    // pagination
    // placeholderData:keepPreviousData

  })


  async function handleAddProduct(id) {
    const res = await addProductsToCart(id);
    if (res) {
      toast.success('product added successfully', { position: "top-right" })
    }
    else {
      toast.error('error occured', { position: "top-right" })

    }
  }


  const allProducts = data?.data.data;


  if (isLoading) {
    return <LoaderScreen />;
  }

  if (isError) {

    return <h2>error OCCURED</h2>
  }


  return (


    <div className="container mx-auto overflow-hidden">

      {/* <div className="flex flex-col gap-5">
        <HomeSlider />
        <CategoriesSlider />
      </div> */}


      {/* <button onClick={refetch} className='bg-blue-300 p-3'> get products</button> */}



      {/* Search Bar */}

      <form class="max-w-md mx-auto my-20 ">
        <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <div class="relative">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
          <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-yellow-500 hover:bg-yellow-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
        </div>
      </form>



      <div className="grid md:grid-cols-6 lg:grid-cols-6  md:gap-4 overflow-hidden my-20" >






        {
          allProducts?.map((product) => (
            <Link
              to={`/productdetails/${product._id}`}
              key={product._id}
              className="bg-white-800 text-black border-gray-500 rounded-lg overflow-hidden relative group  hover:ring hover:ring-orange-500 my-10 ms-10 me-10 p-2 transition-all  duration-1000 ">
              <img src={product.imageCover} alt={product.title} className="w-full" />
              <h3 className='text-green-600'>{product.title.split(" ").slice(0, 2).join(" ")}</h3>
              <h2 className='font-bold '>{product.category.name}</h2>
              {/* <p className='bg-slate-400'>{product._id}</p> */}
              <div className="flex justify-between items-center">
                <p className='my-3 p-2'> <i className="fa-solid fa-star" style={{ color: '#FFD43B' }} />
                  {product.ratingsAverage}</p>

                <div>
                  {product.priceAfterDiscount ? (
                    <div className="flex flex-col items-center justify-center">
                      <p className="line-through text-orange-500 me-3">{product.price} EGP</p>
                      <p>{product.priceAfterDiscount} EGP</p>
                    </div>
                  ) : (
                    <p className="me-3">{product.price} EGP</p>
                  )}
                </div>
              </div>


              <div className="absolute top-2 right-2 translate-x-[300%]
                group-hover:translate-x-0  text-center transition  duration-500 ">
                <button onClick={(e) => {
                  e.preventDefault()
                  handleAddProduct(product._id)
                }
                } className='bg-yellow-400 w-10 h-10 rounded-lg'>+</button>
              </div>
            </Link>
          ))
        }
      </div>

    </div >
  )
}
