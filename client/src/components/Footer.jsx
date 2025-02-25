import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10  mt-40 text-sm'>

        <div>
          <img className='mb-5 w-54' src={assets.logo} alt="" />
          <p className='w-full md:w-2/3 text-gray-600 leading-6'> Your trusted companion in hospital management, simplifying patient record handling and improving healthcare efficiency.</p>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>7045072598 / 9766582687</li>
            <li>noman22082004@gmail.com  ay3134211h@gmail.com</li>
          </ul>
        </div>

      </div>
    </div>
  )
}

export default Footer
