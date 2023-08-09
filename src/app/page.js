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

     <div className="bg-white p-8 rounded-lg shadow-md w-96">
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

    <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
    <form>
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
        <input type="text" id="name" name="name" className="mt-1 p-2 border rounded-md w-full focus:ring focus:ring-blue-300" />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
        <input type="email" id="email" name="email" className="mt-1 p-2 border rounded-md w-full focus:ring focus:ring-blue-300" />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
        <textarea id="message" name="message" rows="4" className="mt-1 p-2 border rounded-md w-full resize-none focus:ring focus:ring-blue-300"></textarea>
      </div>
      <button type="submit"  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300">Submit</button>
    </form>
  </div>
  );
}

