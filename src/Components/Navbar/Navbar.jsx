import React from 'react'
import logo from './../../assets/images-20250124T175303Z-001/images/logo.svg'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { authContext } from './../Context/AuthContext';

import { useContext } from 'react';
import { cartContext } from '../Context/CartContext';

export default function Navbar() {

  const { numOfCartItems } = useContext(cartContext);
  const { token, setToken } = useContext(authContext);
  const navigate = useNavigate()
  function handleLogOut() {


    localStorage.removeItem('tkn')
    setToken(null)
    navigate('/login')
  }



  return (
    <>
      <nav className=' bg-[hsl(240,3%,94%)] text-Black  fixed top-0 left-0 w-full z-50'>

        {/* Left Links */}
        <div className="   w-5/6 p-3 mx-auto  flex items-center justify-between     ">

          <Link to=''>                <img src={logo} alt="freshcart" /></Link>

          {token ? <div className=" flex items-center gap-5">



            <ul className=' flex items-center space-x-4'>
              <li>
                <NavLink to='/products' className='ms-3' >Products</NavLink>
              </li>
              <li>
                <NavLink to='/categories'>Categories</NavLink>
              </li>

              <li>
                <NavLink to='/brands'>Brands</NavLink>
              </li>
              <li>
                <NavLink to='/cart'>Cart</NavLink>
              </li>
              <li>
                <NavLink to='/wishlist'>Wish list</NavLink>
              </li>

            </ul>
          </div> : ''}


          <div className=" ms-auto flex  items-center gap-4 ">

            <ul className='flex items-center gap-5'>

              {token && <li>
                <Link to='/cart' className='relative'> <i className="fa-solid fa-cart-shopping text-green-700 p-1 "> </i>

                  <span className=' text-green-700 absolute mx-3 top-0 right-0 translate-y-3 translate-x-6'>{numOfCartItems}</span>
                </Link>            </li>}


              <li>
                <i className=' cursor-pointer fa-brands fa-facebook-f'></i>
              </li>
              <li>
                <i className=' cursor-pointer fa-brands fa-twitter'></i>
              </li>
              <li>
                <i className=' cursor-pointer fa-brands fa-behance'></i>
              </li>
              <li>
                <i className=' cursor-pointer fa-brands fa-youtube'></i>
              </li>
            </ul>
            <ul className='flex  items-center gap-4 me-5'>
              {token ? <li>
                <span onClick={handleLogOut}> Logout </span>
              </li> : <>  <li>
                <NavLink to='register'> Register</NavLink>
              </li>
                <li>
                  <NavLink to='/login'> Login</NavLink>
                </li></>}



            </ul>




          </div>
        </div>


      </nav>
    </>
  )
}
