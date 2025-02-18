import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from 'react';
import axios, { all } from 'axios';
import Categories from './../Categories/Categories';
import Slider from 'react-slick';
import { useQuery } from '@tanstack/react-query';



export default function CategoriesSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 2000,

    };



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

    // const [allCategories, setallCategories] = useState(null)




    // function getAllCategories() {
    //     axios.get('https://ecommerce.routemisr.com/api/v1/categories')
    //         .then(function (response) {
    //             console.log('categories response', response.data.data);
    //             setallCategories(response.data.data)

    //         })
    //         .catch(function (err) {
    //             console.log(err);


    //         })



    // }


    // useEffect(() => {
    //     getAllCategories();
    // }, [])



    return (

        <>



            <Slider {...settings} className='my-2'  >
                {allCategories?.map(category => <div key={category._id}>
                    <img className="w-full  h-72" src={category.image} alt="a" />

                    <h6>{category.name}</h6>

                </div>)}

            </Slider>




        </>
        // <Slider {...settings}  >

        //     {allCategories?.map(category => <div key={category._id}>
        //         <img className="w-full  h-72" src={category.image} alt="a" />
        //         <h6>{category.name}</h6>
        //     </div>)}

        // </Slider>





    );
}


// {
//     allCategories?.map(category => <div key={category._id}>
//         <img className="w-full  h-72" src={category.image} alt="a" />

//         <h6>{category.name}</h6>

//     </div>)
// }