import { useState } from "react"
import { BiSolidRegistered } from 'react-icons/bi'
import { MdVolunteerActivism } from 'react-icons/md'

// ======= IMPORTING COMPONENTS AND PAGES ========== //
import Items from '../../components/Items'

const Home =() => {
  
  return (
    <div className='max-w-full p-0 m-0'>
      <div><img src="images/heroe.jpeg" className='w-[100vw]' /></div>
      <Items />
    </div>
  )
}

export default Home