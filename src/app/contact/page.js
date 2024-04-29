import React from "react";
import { FaSquareFacebook, FaSquareInstagram } from "react-icons/fa6";
import Card from "../components/cards/Card";
import CardGroup from "../components/cards/CardGroup";
import Head from "next/head";

const Contact = () => {
  const center = { lat: 37.7749, lng: -122.4194 }; // Replace with your desired location
  const zoom = 14;
  const markers = [
    {
      position: { lat: 37.7749, lng: -122.4194 }, // Replace with your shop location
      title: "Your Shop Name", // Replace with your shop name
    },
  ];
  return (
    <div className="m-8">
      <div className="min-h-screen bg-gray-900 text-white py-12">
        <Head>
          <title>Contact - Bubble Tea Magic</title>
        </Head>
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-semibold mb-6">Contact Us</h1>
          <p className="text-lg mb-8">
            Have any questions or feedback? Reach out to us!
          </p>
          <form className="max-w-lg mx-auto">
            <div className="mb-6">
              <label htmlFor="name" className="block text-lg mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-lg mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-lg mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      <div className="container mx-auto mt-10 mb-20">
        <h2 className="text-2xl font-bold mb-4">We are here</h2>
        <div className="flex flex-col md:flex-row justify-around">
          <div className="w-full md:w-1/2 p-4 responsive-map">
            <h3 className="text-lg font-bold mb-2">
              We welcome you anyday from 8am to 8pm
            </h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.4704692179803!2d85.27587351002904!3d27.702756776085785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1953f0958eb9%3A0xa601fa7ff67231a1!2sSusan&#39;s%20house%20(Panta%20niwas)!5e0!3m2!1sen!2snp!4v1714273089547!5m2!1sen!2snp"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="flex flex-col justify-between md:pl-4">
            <div className="flex flex-col space-y-4 md:w-1/2 m-8">
              <div className="bg-blue-500 text-white rounded-lg text-4xl flex items-center justify-center">
                <FaSquareFacebook />
              </div>
              <div className="bg-pink-500 text-white rounded-lg text-4xl flex items-center justify-center">
                <FaSquareInstagram />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
