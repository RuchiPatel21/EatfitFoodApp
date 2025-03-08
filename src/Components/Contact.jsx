import React from 'react'

const Contact = () => {
  return (
    <div className='  p-5 flex justify-center items-center'style={{height:"91dvh"}}>
    {/* <div className='bg-sky-200 p-5 h-fit lg:w-3/5 items-center'> */}
    <div className='bg-gray-500 p-5 h-fit lg:w-3/5 items-center'>
    <form action="" className='flex flex-col gap-5'>
        <label> <h1 className='text-center'>Contact Us</h1></label>
        <input className='h-12 rounded-3xl p-1 ps-5'  type="text" name="name" placeholder='Enter Name' id="" />
        <input  className='h-12 rounded-3xl p-1 ps-5' type="text"  name="emailId" placeholder='Enter Email' id="" />
        <textarea  className='h-32 rounded-3xl p-1 ps-5' name="message"  id="" placeholder='Enter yout message here'></textarea>
        <span className='flex justify-end'>
          <button type='button' className='bg-green-400 px-5 w-32 py-2  ' >
          Submit
       </button>
        </span>
      </form>
    </div>
  </div>
  )
}

export default Contact
