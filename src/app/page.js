"use client";
import Image from 'next/image'

export default function Home() {
  return (
     <div className="bg-white p-8 rounded-lg shadow-md w-96">
    <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
    <form name="contact" method="post" netlify>
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

