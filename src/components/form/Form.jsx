import React from 'react'

const Form = () => {
  return (
    <div>
        <form className='w-full'>
            <input 
                type="text" 
                name="name"
                id="name"
                className='w-full border px-3 py-3 mb-2 rounded-md focus:outline-0 focus:ring-1 focus:ring-cyan-400'
                placeholder='Enter your name'
                required
            />
            <input 
                type="email" 
                name="email" 
                id="email" 
                className='w-full border px-3 py-3 mb-2 rounded-md focus:outline-0 focus:ring-1 focus:ring-cyan-400'
                placeholder='Enter your email'
                required
            />
            <input 
                type="tel" 
                name="phone" 
                id="phone" 
                className='w-full border px-3 py-3 mb-2 rounded-md focus:outline-0 focus:ring-1 focus:ring-cyan-400'
                placeholder='Enter your phone'
                required
            />
            <textarea 
                name="message" 
                id="message" 
                cols="30" 
                rows="8"
                className='w-full border px-3 py-3 mb-2 rounded-md focus:outline-0 focus:ring-1 focus:ring-cyan-400'
                placeholder='Message'
                required
            >
            </textarea>
            <input 
                type="submit" 
                value="Submit" 
                className='w-full py-3 bg-blue-600 text-white rounded-md cursor-pointer'
            />
        </form>
    </div>
  )
}

export default Form