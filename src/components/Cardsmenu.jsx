import React from 'react'
import logo from './images/logo.png'

const Cardsmenu = () => {
  return (
    <div className='flex flex-row bg-white h-screen w-screen justify-center mt-10 gap-3.5'>
    <div className= ' flex h-[204px] w-[456px] bg-white mt-10 shadow-2xl rounded-2xl'>
        <img className='h-5 w-2.5' src={logo} alt="" />
        <h1 className='text-center p-10 font-bold text-3xl'>CSS Templates</h1>
        <p className='text-start'>TemplateMo website is the best for you to explore and download free website templates.</p>
    </div>
      <div className='h-[204px] w-[456px] bg-white mt-10 shadow-2xl rounded-2xl'>
        <h1>Welcome</h1>
    </div>
        
        
    </div>
  )
}

export default Cardsmenu