import { useFormik } from 'formik'
import React, { useContext } from 'react'
import * as yup from 'yup'
import axios from './../../../node_modules/axios/dist/esm/axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ColorRing } from 'react-loader-spinner';
import { authContext } from './../Context/AuthContext';

export default function Login() {




  const navigate = useNavigate()
  const { setToken } = useContext(authContext)

  const [errorMessage, setErrorMessage] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isClicked, setIsClicked] = useState(false);




  const registerFormik = useFormik({

    initialValues: {


      "email": "",
      "password": ""

    },
    onSubmit: async function (values) {


      // try {

      //   const res = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signup', values);


      //   console.log('ana hena');

      //   console.log('res', res.data.message);
      // } catch (error) {
      //   console.log('error2222', error.response.data.message);

      // }
      setIsClicked(true)
      axios.post('https://ecommerce.routemisr.com/api/v1/auth/signin', values)
        .then(function (x) {

          console.log('sa7', x);
          setIsSuccess(true)
          localStorage.setItem('tkn', x.data.token)
          setToken(x.data.token);
          console.log(x.data.token);



          setTimeout(() => {
            navigate('/home')
          }, 2000);

        })
        .catch(function (x) {

          console.log('8lt', x);

          // setErrorMessage(x.response.data?.message)

          setTimeout(() => {
            setErrorMessage(null)
            setIsClicked(false)
          }, 2000);


        })



    },
    validationSchema: yup.object().shape({

      email: yup.string().email('error email').required('email required'),
      password: yup.string().min(6).max(12),

    })




    // validate: function (values) {
    //   const error = {};
    //   const nameRegex = /^[A-Z][a-z]{4,20}$/;
    //   const phoneRegex = /^01[0125][0-9]{8}$/;




    //   if (nameRegex.test(values.name) == false) {
    //     error.name = 'Name Must Start With Capital Letter.....'
    //   }

    //   if (values.email.includes('@') == false || values.email.includes('.') == false) {
    //     error.email = 'Email must include @ '

    //   }

    //   if (phoneRegex.test(values.phone) == false) {

    //     error.phone = 'number is wrong '
    //   }

    //   if (values.password.length < 6 || values.password.length > 6) {
    //     error.password = 'Password Length'


    //   }

    //   if (values.rePassword !== values.password) {

    //     error.rePassword = ' Password does not Match'
    //   }


    //   console.log(error);

    //   return error

    // }





  })



  return (




    <div className="  p-5">

      {errorMessage ? <div className="p-4 mb-4 text-sm my-20 text-red-800 rounded-lg bg-red-50 dark:bg-white-800 dark:text-red-400" role="alert">
        {errorMessage}
      </div> : ''}

      {isSuccess ? <div className="p-4 mb-4 text-sm my-20 text-green-800 rounded-lg bg-green-50 dark:bg-white-800 dark:text-green-400" role="alert">
        Welcome Back
      </div> : ''}




      <h2 className='text-center text-xl my-20'>Login Now :</h2>
      <form onSubmit={registerFormik.handleSubmit} className="max-w-md mx-auto">



        <div className="relative z-0 w-full mb-5 group">
          <input value={registerFormik.values.email} onBlur={registerFormik.handleBlur} onChange={registerFormik.handleChange} type="email" name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
          <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email Address</label>

          {registerFormik.errors.email && registerFormik.touched.email ? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-white-800 dark:text-red-400" role="alert">
            {registerFormik.errors.email}
          </div> : ''}

        </div>










        <div className="relative z-0 w-full mb-5 group">
          <input value={registerFormik.values.password} onBlur={registerFormik.handleBlur} onChange={registerFormik.handleChange} type="password" name="password" id="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
          <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>

          {registerFormik.errors.password && registerFormik.touched.password ? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-white-800 dark:text-red-400" role="alert">
            {registerFormik.errors.password}
          </div> : ''}



        </div>









        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">

          {!isClicked ? 'Login' : <ColorRing
            visible={true}
            height="40"
            width="40"
            ariaLabel="color-ring-loading"
            wrapperStyle={{}}
            wrapperClass="color-ring-wrapper"
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
          />}



        </button>
      </form>
    </div>

  )
}


