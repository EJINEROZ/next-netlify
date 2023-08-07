import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
      <form netlify>
      <div className='w-full flex flex-col my-4'>
        <label className='font-bold text-white-800' htmlFor='name'>Name</label>
        <input type='text'
        className='p-4 bg-gray-50 border-gray-100' id='name' />
      </div>
      <div className='w-full flex flex-col my-4'>
        <label className='font-bold text-white-800' htmlFor='email'>Email</label>
        <input type='email' 
        className='p-4 bg-gray-50 border-gray-100' autoComplete='off' id='email' />
      </div> 
      <div>
      <label className='font-bold text-white-800' htmlFor='message'>Message</label>
      <textarea
      rows={4}
       name='message'
      className='w-full p-4 bg-gray-50 border-gray-100'/> 
      </div>
      <button
      type='submit'
      className='px-4 py-2 w-40 bg-gray-700 text-white font-medium mt-4'>Send Message</button>
      </form>
      </body>
    </html>
  )
}
