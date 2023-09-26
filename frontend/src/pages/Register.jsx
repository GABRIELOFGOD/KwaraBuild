import { MdDriveFileRenameOutline } from 'react-icons/md'
import { AiOutlineMail } from 'react-icons/ai'
import { FiPhoneCall } from 'react-icons/fi'
import { RiLockPasswordLine } from 'react-icons/ri'
import { useState, useEffect } from "react"
import FormInputs from '../../components/FormInputs'

const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  
//  const [error, setError] = useState(null)
 // const [msg, setMsg] = useState(null)
  
  
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
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const details = {name, email, phone, password}
    const res = await fetch('http://localhost:5000/api/text',
    {
      method: 'POST',
      body: JSON.stringify(details),
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    })
  }
  
  
  /*const getter = async () => {
    const res = await fetch('http://localhost:5000/api/text')
    const response = await res.json()
    if(!res.ok){
      setError(response.error)
    }
    if(res.ok){
      setMsg(response.msg)
    }
  }
  
  useEffect(()=>{
    getter()
  },[])*/
  
  return (
    <div>
      <FormInputs items={myInputs} btn='Register' action={handleSubmit} />
    </div>
  )
}

export default Register