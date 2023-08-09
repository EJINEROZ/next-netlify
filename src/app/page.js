"use client";
import Image from 'next/image'

export default function Home() {
  async function handleSubmit(event) {
    event.preventDefault();

    // const data = {
    //   name: String(event.target.name.value),
    //   email: String(event.target.email.value),
    //   message: String(event.target.message.value),

    // };
    // console.log(data);
  }
  return (
   <div>
    <h1>Contact Us!</h1>
    {/* <form name="contact" method="post">
          <input type="hidden" name="form-name" value="contact" />
          <p>
            <label>Your Name: <input type="text" name="name"/></label>
          </p>
          <p>
            <label>Your Email: <input type="email" name="email"/></label>
          </p>
          <p>
            <label>Message: <textarea name="message"></textarea></label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form> */}

    <form  onSubmit={handleSubmit} netlify="true">
      <div className='w-full flex flex-col my-4'>
        <label className='font-bold text-white-800' htmlFor='name'>Name</label>
        <input type='text'
        required
        minLength={5}
        maxLength={150}
        className='p-4 bg-gray-50 border-gray-100' id='name' />
      </div>
      <div className='w-full flex flex-col my-4'>
        <label className='font-bold text-white-800' htmlFor='email'>Email</label>
        <input type='email' 
        required
        minLength={15}
        maxLength={150}
        className='p-4 bg-gray-50 border-gray-100' autoComplete='off' id='email' />
      </div> 
      <div>
      <label className='font-bold text-white-800' htmlFor='message'>Message</label>
      <textarea
      rows={4}
      required
      minLength={10}
      maxLength={500}
      name='message'
      className='w-full p-4 bg-gray-50 border-gray-100'/> 
      </div>
      <button
      type='submit'
      className='px-4 py-2 w-40 bg-gray-700 text-white font-medium mt-4'>Send Message</button>
    </form>
   </div>
  );
}
