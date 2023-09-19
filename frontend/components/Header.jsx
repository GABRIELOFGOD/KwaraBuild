import react from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='bg-blue-900 max-w-full text-white flex p-4'>
      <Link to='/'><div className='max-w-[50px]'>
        <img src='images/kwarabuild-logo.svg'  />
      </div></Link>
      <div className='m-auto font-extrabold text-2xl'><h1>kwara build <span className='text-gold'>2023</span></h1></div>
      <div className='md:flex hidden my-auto'>
        <Link className='bg-white rounded-sm p-2 text-blue-900 font-bold' to=''>Register</Link>
        <Link className='bg-white mx-1 capitalize rounded-sm p-2 text-blue-900 font-bold' to='https://t.me/+jvs3DqtHbtVlMjM0'>join community</Link>
      </div>
    </div>
  )
}

export default Header