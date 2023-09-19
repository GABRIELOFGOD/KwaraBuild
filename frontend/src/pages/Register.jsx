import { MdDriveFileRenameOutline } from 'react-icons/md'
import { AiOutlineMail } from 'react-icons/ai'
import { FiPhoneCall } from 'react-icons/fi'
import { RiLockPasswordLine } from 'react-icons/ri'
import { useState } from "react"
import FormInputs from '../../components/FormInputs'

const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  
  
  const myInputs = [
    {
      place: 'Full Name',
      icon: <MdDriveFileRenameOutline />,
      type: 'text',
      value: name,
      change: (e) => setName(e.target.value)
    },
    {
      place: 'Email',
      icon: <AiOutlineMail />,
      type: 'email',
      value: email,
      change: (e) => setEmail(e.target.value)
    },
    {
      place: 'Phone Number',
      icon: <FiPhoneCall />,
      type: 'number',
      value: phone,
      change: (e) => setPhone(e.target.value)
    },
    {
      place: 'Password',
      icon: <RiLockPasswordLine />,
      type: 'password',
      value: password,
      change: (e) => setPassword(e.target.value)
    },
  ]
  return (
    <div>
      <form className=' border-2 rounded border-blue-900 my-8 mx-auto md:max-w-sm py-8 px-6' >
        <h1 className='text-center text-lg font-extrabold py-3'>Register</h1>
        <FormInputs items={myInputs} />
        <button className='bg-blue-900 rounded w-full py-4 text-white mt-4' >Register</button>
      </form>
    </div>
  )
}

export default Register