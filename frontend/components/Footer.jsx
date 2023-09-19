import react from 'react'

const Footer = () => {
  return (
    <div className='bg-blue-900 max-w-full m-0 p-6' >
      <div className='max-w-[20%]' >
        <div className='max-w-[50px] m-auto items-center'>
        <img src='images/kwarabuild-logo.svg'  />
      </div>
      <div className='m-auto text-center text-white font-extrabold text-lg'><h1>kwara build <span className='text-gold'>2023</span></h1></div>
      </div>
    </div>
  )
}

export default Footer