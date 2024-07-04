import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";
import Swal from "sweetalert2";

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    to_name: "Wasim Hossain",
    message: "",
    reply_to: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_cfedq79",
        "template_cqlat89",
        formData,
        "i0pex3Cf4BDTqO_3h"
      )
      .then(
        (result) => {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your Message Sent Successfully",
            showConfirmButton: false,
            timer: 1500
          });
          setFormData({
            from_name: "",
            to_name: "Wasim Hossain",
            message: "",
            reply_to: ""
          });
        },
        (error) => {
          console.log(error.text);
          Swal.fire({
            position: "center",
            icon: "error",
            title: "An error occurred, please try again.",
            showConfirmButton: false,
            timer: 1500
          });
        }
      );
  };

  return (
    <section className="bg-gray-100 py-12" id="contact">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Contact</h2>
        <div className="flex justify-center items-center mb-8">
          <a
            href="https://linkedin.com/in/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 mx-2"
          >
            <FaLinkedin size={32} />
          </a>
          <a
            href="https://facebook.com/wh715"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-800 mx-2"
          >
            <FaFacebook size={32} />
          </a>
          <a
            href="https://github.com/wasim475"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 mx-2"
          >
            <FaGithub size={32} />
          </a>
        </div>
        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto bg-white p-8 rounded shadow-md"
        >
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="from_name">
              Name
            </label>
            <input
              type="text"
              id="from_name"
              name="from_name"
              value={formData.from_name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="reply_to">
              Email
            </label>
            <input
              type="email"
              id="reply_to"
              name="reply_to"
              value={formData.reply_to}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded"
              rows="5"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition-colors duration-200"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
