"use client";

import React, { useRef, useState } from "react";
import { MdCancel } from "react-icons/md";

const smallFont = {
  fontSize: "14px",
};

export default function Contact() {
  const [messageValue, setMessageValue] = useState("");
  const [message, setMessage] = useState(false);
  const [overlay, setOverlay] = useState(false);

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  function submitForm(e: React.FormEvent) {
    e.preventDefault();

    if (nameRef.current && emailRef.current) {
      if (
        nameRef.current.value.length > 2 &&
        emailRef.current.value.includes("@")
      ) {
        setOverlay(true);
        setMessage(true);
        setMessageValue("");
      }
    } else {
      alert("Please fill in the inputs!");
    }
  }

  function close() {
    setOverlay(!overlay);
    setMessage(!message);
  }

  return (
    <>
      <section className="flex flex-col items-center p-6 h-screen bg-black">
        <p
          className="font-light text-zinc-500 mb-2 text-center"
          style={smallFont}
        >
          Connect with us!
        </p>
        <h1 className="text-3xl text-center md:text-5xl text-zinc-300 font-bold mb-3">
          Get In Touch
        </h1>
        <p className="font-light text-center text-zinc-500" style={smallFont}>
          We&apos;d love to hear from you. Reach out today!
        </p>
        <form className="mt-10 w-52 md:w-96" onSubmit={submitForm}>
          <div className="flex flex-col gap-2 mb-3">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="p-3 bg-transparent border-zinc-800 border rounded-md outline-none focus:border-zinc-600"
              placeholder="Your Name"
              ref={nameRef}
              style={smallFont}
              required
            />
          </div>
          <div className="flex flex-col gap-2 mb-3">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="p-3 bg-transparent border-zinc-800 border rounded-md outline-none focus:border-zinc-600"
              placeholder="Your Email"
              ref={emailRef}
              style={smallFont}
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              placeholder="Type your message here..."
              id="message"
              className="p-3 bg-transparent resize-none border-zinc-800 border rounded-md outline-none focus:border-zinc-600"
              rows={3}
              cols={10}
              style={smallFont}
              value={messageValue}
              onChange={(e) => setMessageValue(e.target.value)}
            ></textarea>
          </div>
          <button
            type="submit"
            className="p-3 w-full bg-red-900 my-2 rounded-md font-bold"
          >
            Submit
          </button>
        </form>

        {message && (
          <>
            <div className="overlay fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-100 transition-colors"></div>
            <div className="message-sent bg-zinc-900 animate-zoom-in book h-fit w-fit gap-6 rounded-md p-3 flex justify-between items-center z-200">
              <p>Your message has been sent!</p>
              <MdCancel
                className="cursor-pointer"
                style={{ fontSize: "22px" }}
                onClick={close}
              />
            </div>
          </>
        )}
      </section>
    </>
  );
}
