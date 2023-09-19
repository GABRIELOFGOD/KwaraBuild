


const FormInputs = ({items}) => {
  return (
    <div>
      {
        items.map((item, index) => (
          <div className='relative' key={index} >
            <i className='absolute font-extrabold text-blue-900 m-auto top-5 left-4'>{item.icon}</i>
            <input
              type={item.type}
              value={item.value}
              onChange={e => (item.change(e))}
              placeholder={item.place}
              className='w-full border-2 py-2 rounded my-2 pl-10 pr-3 border-blue-900 outline-0'
            />
          </div>
        ))
      }
    </div>
  )
}

export default FormInputs;