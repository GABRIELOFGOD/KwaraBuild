import {useState} from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { RiLockPasswordLine } from 'react-icons/ri'

import FormInputs from '../../components/FormInputs'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const myInputs = [
    {
      icon: <AiOutlineMail />,
      type: 'email',
      place: 'email',
      value: email,
      change: e => setEmail(e.target.value)
    },
    {
      icon: <RiLockPasswordLine />,
      type: 'password',
      place: 'password',
      value: password,
      change: e => setPassword(e.target.value)
    }
  ]
  
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  
  return (
    <div>
      <FormInputs items={myInputs} btn='Login' action={handleSubmit} />
    </div>
  )
}

export default Login;