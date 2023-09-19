

const Admin = () => {
  return (
    <div>
      {
        action.map((item, index)=>(
          <Link key={index} to={item.click} ><div className='bg-blue-900 cursor-pointer rounded-sm w-fit text-white p-8'>
          <BiSolidRegistered className='text-center m-auto font-bold text-4xl' />
          <span>{Item.text}</span>
          </div></Link>
        ))
      }
    </div>
  )
}

export default Admin;