import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="m-auto py-10 px-5 items-center ">
      <div className='text-9xl pt-5 font-extrabold text-center'>404 Page not found</div>
      <div className='font-bold capitalize text-center pb-5'>This page does not exists or has been permanently removed <Link className='text-blue-900' to='/'>Back to Home</Link> </div>
    </div>
  );
}

export default NotFound;
