import React, { useState } from "react";
import Title from "../layouts/Title";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGithub, SiGmail } from "react-icons/si";
import contactImg from "../../assets/images/projects/contact.jpg";

const Contact = () => {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const emailValidation = () => {
    return String(email).toLowerCase().match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!username.trim()) {
      setErrMsg("Username is required!");
    } else if (!phoneNumber.trim()) {
      setErrMsg("Phone number is required!");
    } else if (!email.trim()) {
      setErrMsg("Please enter your email!");
    } else if (!emailValidation(email)) {
      setErrMsg("Please enter a valid email address!");
    } else if (!subject.trim()) {
      setErrMsg("Subject is required!");
    } else if (!message.trim()) {
      setErrMsg("Message is required!");
    } else {
      setSuccessMsg(`Thank you ${username}, your message has been sent successfully!`);
      setErrMsg("");
      setUsername("");
      setPhoneNumber("");
      setEmail("");
      setSubject("");
      setMessage("");
    }
  };

  return (
    <section id="contact" className="w-full py-20 bg-gradient-to-br bg-[#141e30] border-b-[6px] border-b-blue-600 mt-48 border-rounded-lg">
      <div className="text-center text-2xl md:text-7xl">
        <Title title="Get In" des="Touch" />
        <p className="text-gray-300 mt-4 max-w-xl mx-auto text-lg">
          Have a project in mind or want to discuss opportunities? Let's connect!
        </p>
      </div>

      <div className="container mx-auto mt-12 px-6 lg:px-0 flex flex-col lg:flex-row gap-10">
        {/* Left Contact Info */}
        <div className="lg:w-1/3 bg-[#1f2937] p-6 rounded-xl shadow-md space-y-4">
          <img
            src={contactImg}
            alt="Contact"
            className="w-full h-64 object-cover rounded-md"
          />
          <h3 className="text-2xl font-semibold text-white">Sathmini Subasinghe</h3>
          <p className="text-blue-400 text-sm">Web Developer</p>
          <p className="text-gray-300 text-sm">
            I am a passionate web developer dedicated to building dynamic and responsive web applications. I enjoy creating seamless and visually engaging user experiences.
          </p>
          <div className="text-sm text-gray-400 space-y-1">
            <p><strong>Phone:</strong> +94 742122382</p>
            <p><strong>Email:</strong> sathminisubasinghe05@gmail.com</p>
            <p><strong>Location:</strong> Kandy, Sri Lanka</p>
          </div>
          <div className="pt-4">
            <h4 className="text-sm uppercase text-blue-400 mb-2">Find me on</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-800 bg-opacity-20 hover:bg-opacity-40 text-blue-400 rounded-full flex items-center justify-center hover:-translate-y-1 transition"
              >
                <SiGithub />
              </a>
              <a
                href="mailto:youremail@example.com"
                className="w-10 h-10 bg-blue-800 bg-opacity-20 hover:bg-opacity-40 text-blue-400 rounded-full flex items-center justify-center hover:-translate-y-1 transition"
              >
                <SiGmail />
              </a>
              <a
                href="https://www.linkedin.com/in/yourprofile/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-800 bg-opacity-20 hover:bg-opacity-40 text-blue-400 rounded-full flex items-center justify-center hover:-translate-y-1 transition"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        {/* Right Contact Form */}
        <div className="lg:w-2/3 bg-[#0a132c] p-8  rounded-xl shadow-md text-white mr-5">
          <form onSubmit={handleSend} className="space-y-6">
            {errMsg && (
              <p className="text-red-400 text-sm bg-red-900 bg-opacity-30 p-3 rounded-md animate-pulse">{errMsg}</p>
            )}
            {successMsg && (
              <p className="text-green-400 text-sm bg-green-900 bg-opacity-30 p-3 rounded-md animate-pulse">{successMsg}</p>
            )}

            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex flex-col w-full">
                <label className="text-sm uppercase tracking-wider">Your Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="p-3 bg-black border-white rounded-md focus:outline-none focus:ring-2 focus:ring-white-400  mt-2"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="flex flex-col w-full">
                <label className="text-sm uppercase tracking-wider">Phone Number</label>
                <input
                  type="text"
                  placeholder="Enter your phone number"
                  className="p-3 bg-black border-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 mt-2"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label className="text-sm uppercase tracking-wider">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="p-3 bg-black border-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 mt-2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm uppercase tracking-wider">Subject</label>
              <input
                type="text"
                placeholder="Enter subject"
                className="p-3 bg-black border-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 mt-2"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm uppercase tracking-wider">Message</label>
              <textarea
                placeholder="Write your message here..."
                rows="6"
                className="p-3 bg-black border-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 mt-2"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-blue-700 hover:bg-blue-700 rounded-md font-semibold uppercase tracking-wide transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;