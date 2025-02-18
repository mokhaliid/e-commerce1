import React, { useEffect, useState } from 'react'


import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import LoaderScreen from './../LoaderScreen/LoaderScreen';
import { useParams } from 'react-router-dom';
import { FallingLines } from 'react-loader-spinner'

export default function Brands() {
    const [isLoading, setIsLoading] = useState(false)

    const [brands, setBrands] = useState([])


    async function getAllBrands() {

        loading()
        const res = await axios.get('https://ecommerce.routemisr.com/api/v1/brands')

            .then((res) => {
                notloading()
                console.log(res?.data.data, 'resp');
                setBrands(res?.data.data)
            })
            .catch((err) => {

                console.log(err, 'erroooooor');

            })

    }
    function loading() {
        setIsLoading(true)

    }

    function notloading() {
        setIsLoading(false)
    }


    useEffect(() => {

        getAllBrands()
    }, [])




    // const { data, isError, error, isLoading, isFetching, refetch } = useQuery({
    //     queryKey: ['getAllBrands', ],
    //     queryFn: getAllBrands,
    //     // enabled: true,
    //     // refetchOnWindowFocus: true,
    //     // refetchInterval: 5000,
    //     // retry: 5,
    //     // retryDelay: 1000,
    //     // gcTime: 2000,
    //     // pagination
    //     // placeholderData:keepPreviousData

    // })


    // if (isLoading) {
    //     return <LoaderScreen />;
    // }

    // if (isError) {

    //     return <h2 className='my-20'>error OCCURED</h2>
    // }




    return (
        <>


            {isLoading ? <LoaderScreen /> : <> <h1 className='text-green-800  font-bold my-20 text-center text-2xl'>All Brands</h1>
                <div className="grid  md:grid-cols-3 lg:grid-cols-4 gap-3 my-20">

                    {brands?.map((brand) => (
                        <div key={brand._id} className="flex flex-row my-5 shadow-inner border-black border hover:border-green-700 hover:border-8 ms-3 me-3 mx-auto   ">

                            <img src={brand.image} alt={brand.slug} className='w-full' />



                        </div>
                    ))}

                </div> </>}







            {/* <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-3">
                    <img src={response?.data.data.image} alt="" />


                </div> */}






        </>
    )
}
