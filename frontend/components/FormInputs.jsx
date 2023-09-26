


const FormInputs = ({items, btn, action}) => {
  return (
    <div className=' py-6 px-12 flex m-auto items-center justify-center'>
      <form className='m-auto border-2 border-blue-900 rounded p-8'>
        <h1 className='text-lg text-center font-extrabold'>{btn}</h1>
        {
          items.map((item, index) => (
            <div className='relative my-4' key={index}>
              <i className='absolute text-blue-900 font-extrabold top-3 left-4' >{item.icon}</i>
              <input 
                type={item.type}
                placeholder={item.place}
                value={item.value}
                onChange={item.change}
                className='pl-10 pr-3 outline-0 py-2 w-full bg-transparent border-2 rounded border-blue-900'
              />
            </div>
          ))
        }
        <button onClick={action} className='text-white cursor-pointer font-bold w-full py-2 rounded border-0 text-sm bg-blue-900' >{btn}</button>
      </form>
    </div>
  )
}

export default FormInputs;