import React, { useState } from "react";
import Title from "../layouts/Title";
import ContactLeft from "./ContactLeft";

const Contact = () => {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  // ========== Email Validation start here ==============
  const emailValidation = () => {
    return String(email)
      .toLocaleLowerCase()
      .match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
  };
  // ========== Email Validation end here ================

  const handleSend = (e) => {
    e.preventDefault();
    if (username === "") {
      setErrMsg("Username is required!");
    } else if (phoneNumber === "") {
      setErrMsg("Phone number is required!");
    } else if (email === "") {
      setErrMsg("Please give your Email!");
    } else if (!emailValidation(email)) {
      setErrMsg("Give a valid Email!");
    } else if (subject === "") {
      setErrMsg("Please give your Subject!");
    } else if (message === "") {
      setErrMsg("Message is required!");
    } else {
      setSuccessMsg(
        `Thank you dear ${username}, Your Messages has been sent Successfully!`
      );
      setErrMsg("");
      setUsername("");
      setPhoneNumber("");
      setEmail("");
      setSubject("");
      setMessage("");
    }
  };
  return (
    <section
      id='contact'
      className='w-full py-20 border-b-[8px] border-b-blue-800 bg-blue-900'
    >
      <div className='flex justify-center items-center text-center'>
        <Title title='' des="Let's Connect" />
      </div>
      <div className='w-full'>
        <div className='w-full h-auto flex flex-col lgl:flex-row justify-between'>
          <ContactLeft />
          <div className='w-full lgl:w-[60%] h-full py-10 bg-blue-900 border border-blue-700 flex flex-col gap-8 p-4 lgl:p-8 rounded-2xl shadow-lg'>
            <form className='w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5'>
              {errMsg && (
                <p className='py-3 bg-blue-900 text-center text-blue-400 text-base tracking-wide animate-bounce rounded-lg border border-blue-700'>
                  {errMsg}
                </p>
              )}
              {successMsg && (
                <p className='py-3 bg-blue-900 text-center text-green-400 text-base tracking-wide animate-bounce rounded-lg border border-blue-700'>
                  {successMsg}
                </p>
              )}
              <div className='w-full flex flex-col lgl:flex-row gap-10 '>
                <div className='w-full lgl:w-1/2 flex flex-col gap-4'>
                  <p className='text-sm text-blue-200 uppercase tracking-wide '>
                    Your name
                  </p>
                  <input
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    className={`contactInput bg-blue-900 border border-blue-700 text-white focus:border-blue-500 focus:ring-blue-500`}
                    type='text'
                  />
                </div>
                <div className='w-full lgl:w-1/2 flex flex-col gap-4'>
                  <p className='text-sm text-blue-200 uppercase tracking-wide'>
                    Phone Number
                  </p>
                  <input
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    value={phoneNumber}
                    className={`contactInput bg-blue-900 border border-blue-700 text-white focus:border-blue-500 focus:ring-blue-500`}
                    type='text'
                  />
                </div>
              </div>
              <div className='flex flex-col gap-4'>
                <p className='text-sm text-blue-200 uppercase tracking-wide'>
                  Email
                </p>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className={`contactInput bg-blue-900 border border-blue-700 text-white focus:border-blue-500 focus:ring-blue-500`}
                  type='email'
                />
              </div>
              <div className='flex flex-col gap-4'>
                <p className='text-sm text-blue-200 uppercase tracking-wide'>
                  Subject
                </p>
                <input
                  onChange={(e) => setSubject(e.target.value)}
                  value={subject}
                  className={`contactInput bg-blue-900 border border-blue-700 text-white focus:border-blue-500 focus:ring-blue-500`}
                  type='text'
                />
              </div>
              <div className='flex flex-col gap-4'>
                <p className='text-sm text-blue-200 uppercase tracking-wide'>
                  Message
                </p>
                <textarea
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  className={`contactTextArea bg-blue-900 border border-blue-700 text-white focus:border-blue-500 focus:ring-blue-500`}
                  cols='30'
                  rows='8'
                ></textarea>
              </div>
              <div className='w-full'>
                <button
                  onClick={handleSend}
                  className='w-full h-12 bg-blue-600 rounded-lg text-base text-white tracking-wider uppercase hover:bg-blue-700 duration-300 border border-blue-900 shadow'
                >
                  Send Message
                </button>
              </div>
              {errMsg && (
                <p className='py-3 bg-blue-900 text-center text-blue-400 text-base tracking-wide animate-bounce rounded-lg border border-blue-700'>
                  {errMsg}
                </p>
              )}
              {successMsg && (
                <p className='py-3 bg-blue-900 text-center text-green-400 text-base tracking-wide animate-bounce rounded-lg border border-blue-700'>
                  {successMsg}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
