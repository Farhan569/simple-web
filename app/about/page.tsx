import React from 'react'
import Header from '../component/Header/header'
import Footer from '../component/Footer/footer'

const Aboutpage = () => {
  return (
    <div>
        <Header/>
    <div className='p-8'>
      <h1 className='text-2xl font-bold mb-4'>Welcome to About Page</h1>
      <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae facilis maxime necessitatibus quidem. Consectetur quod ipsum tempora fuga! Iste, voluptate accusamus voluptatibus numquam facilis ex aliquam totam ipsum quibusdam tenetur delectus sit rem vel quasi modi eaque ea eos eius!</p>
    </div>
        <Footer/>
    </div>
  )
}

export default Aboutpage
