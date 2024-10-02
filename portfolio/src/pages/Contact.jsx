import React, { useRef } from 'react'
import { Linkedin, User, Phone, Mail, Check } from 'lucide-react'
import { addData } from '../service/api'
import { Toaster, toast } from 'sonner'

export const Contact = () => {
  
  const nameRef = useRef(null)
  const emailRef = useRef(null)
  const phoneRef = useRef(null)
  const messageRef = useRef(null)

  const handleContactDate = async (e) => {
    e.preventDefault()
    const contactData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
      message: messageRef.current.value
    }
    try {
      const response = await addData(contactData)
      console.log(response)
      if(response.status == 200) {
        console.log("added")
        toast.success('Message Sent Sucessfully !', {
          className: 'bg-green-500 rounded-lg shadow-lg text-white p-3 flex gap-5 text-lg font-bold',
          icon: <Check />,
      });
      }
    } catch (error) {
      console.log(error.message)
      toast.error('Failed to add project. Please try again.', {
        className: 'bg-red-500 rounded-lg shadow-lg text-white p-3 flex gap-5 text-lg font-bold',
      });
    }
  }

  return (
    <>
    <Toaster position="top-center" />
      <div className="h-screen w-screen flex justify-center items-center">
            <div className="h-[60%] w-[45%] flex justify-center items-center bg-[#d1f2eb] rounded-md shadow-md">
              <form className='h-[90%] w-[95%] flex flex-row' onSubmit={ handleContactDate }>
                <div className='h-full w-2/5 bg-[#d1f2eb] '>
                  <h1 className='h-[20%] font-bold text-4xl p-[1.5rem] ml-2'>Let's Get in Touch</h1>
                  <User className='h-[40%] w-[70%] text-2xl flex justify-center mt-[2rem] ml-5 items-center'></User>
                  <div className='h-[20%] w-[90%] mt-[2.5rem] flex flex-row justify-center items-center'>
                    <div className='h-full w-1/3 flex justify-center items-center'><a href="tel:+91 9489858821" className='hover:cursor-pointer'><Phone /></a></div>
                    <div className='h-full w-1/3 flex justify-center items-center'><a href="mailto:vasanthkrish.s2004@gmail.com" className='hover:cursor-pointer'><Mail /></a></div>
                    <div className='h-full w-1/3 flex justify-center items-center'><a href="https://www.linkedin.com/in/vasanthkrish2004/" target="_blank" rel="noopener noreferrer" className='hover:cursor-pointer'><Linkedin /></a></div>
                  </div>
                </div>
                <div className='h-full w-3/5 bg-[#343434] flex flow-row justify-center items-center rounded-md shadow-md'>
                    <div className='h-[70%] w-[80%]'>
                      <input type="text" ref={ nameRef } className='text-gray-400 w-full h-[20%] border-[#f8f8f8] border-b p-3 text-xl focus:outline-none bg-[#343434] focus:placeholder-transparent' placeholder='name' id="" />
                      <input type="text" ref={ emailRef } className='text-gray-400 w-full h-[20%] border-[#f8f8f8] border-b p-3 text-xl focus:outline-none bg-[#343434] focus:placeholder-transparent' placeholder='email' id="" />
                      <input type="text" ref={ phoneRef } className='text-gray-400 w-full h-[20%] border-[#f8f8f8] border-b p-3 text-xl focus:outline-none bg-[#343434] focus:placeholder-transparent' placeholder='phone' id="" />
                      <textarea ref={ messageRef } className=' resize-none text-gray-400 w-full h-[20%] border-[#f8f8f8] border-b p-3 text-xl focus:outline-none bg-[#343434] focus:placeholder-transparent' placeholder='message' id=""></textarea>
                      <div className=' h-[20%] w-full flex justify-center items-center'>
                        <button type='submit' className=' h-full w-full bg-[#efebeb] mt-[4rem] font-bold text-2xl rounded-md hover:cursor-pointer hover:bg-green-500 hover:text-[#000000] hover:text-3xl'>Send</button>
                      </div>
                    </div>
                </div>
              </form>
            </div>
         </div>
    </>
  )
}

export default Contact
