

function Newsletter() {
  return (
    <div className="h-auto width-full flex flex-col items-center p-5 m-2">
      <h1 className="m-2 font-extrabold lg:text-4xl text-2xl">Want First Dibs?</h1>
      <p className="flex text-center m-3 italic tracking-wide text-gray-800">Join our email list and be the first to know about new limited edition products,<br />
       material innovations, and lots of other fun updates.</p>
       <div className="flex flex-col lg:flex-row m-2 w-full justify-center">
      <input className="p-2 mx-2 mb-2 font-bold border-b-2 lg:w-3/12 duration-500 bg-gray-100" type="email" placeholder="Enter Your Email Adress" />
      <button className="p-2 px-3 mx-2 mb-2 bg-gray-800 text-white font-bold cursor-pointer border border-gray-800 tracking-wide hover:text-gray-800 hover:bg-gray-100 duration-400 ">SIGN UP</button>
      </div>
    </div>
  )
}

export default Newsletter