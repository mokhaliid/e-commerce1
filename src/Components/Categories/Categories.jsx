import { useQuery } from '@tanstack/react-query'
import React from 'react'
import LoaderScreen from '../LoaderScreen/LoaderScreen'
import axios, { all } from 'axios';


export default function Categories() {

  // function getAllCategories() {

  //   return axios.get('https://ecommerce.routemisr.com/api/v1/categories')
  // }


  // const { data, isLoading, isError } = useQuery({
  //   queryKey: ['allCategories'],
  //   queryFn: getAllCategories,
  // })

  // console.log(x);



  function getAllCategories() {
    return axios.get('https://ecommerce.routemisr.com/api/v1/categories')
  }


  const { data, isLoading, isError } = useQuery({
    queryKey: ['allCategories'],
    queryFn: getAllCategories,

    gcTime: 2000,

  })




  const allCategories = data?.data.data;
  console.log('ana hena', allCategories)




  if (isLoading) {
    return <LoaderScreen />
  }

  if (isError) {

    return <h2>error </h2>

  }
  return (
    <>

      <div className='container mx-auto p-5 my-5'>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 ">


          {allCategories.map(category =>
            <div key={category._id} className='mx-auto my-10  rounded-xl border  hover:border-8 hover:border-green-700 transition duration-500  ' >
              <img className="h-64 w-64 rounded-xl " src={category.image} alt={category.name} />
              <h2 className='text-green-600 font-bold my-2 text-center'>{category.name}</h2>
            </div>

          )}


        </div>
      </div>

    </>
  )
}
