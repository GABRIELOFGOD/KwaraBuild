import {BiSolidRegistered} from 'react-icons/bi'
import { MdVolunteerActivism, MdAdminPanelSettings } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Item = () => {
  const action=[
    {
      icon: <BiSolidRegistered />,
      text: 'Register',
      click: 'register'
    },
    {
      icon: <MdVolunteerActivism />,
      text: 'Volunteer',
      click: 'volunteer'
    },
    {
      icon: <MdAdminPanelSettings />,
      text: 'Admin',
      click: 'admin'
    }
  ]
  return (
    <div className='flex py-4 flex-wrap justify-between m-auto'>
        {
          action.map((Item, index) => (
            <Link to={Item.click}><div className='bg-blue-900 my-2 rounded p-2 text-white' key={index}>
              <span className='m-auto items-center justify-center text-center  flex text-2xl'>{Item.icon}</span>
              <p>{Item.text}</p>
            </div></Link>
          ))
        }
    </div>
  )
}

export default Item;