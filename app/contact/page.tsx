"use client";

import React, { useState } from "react";
import { MdCancel } from "react-icons/md";

const smallFont = {
  fontSize: "14px",
};

export default function Contact() {
  const [messageValue, setMessageValue] = useState();
  const [message, setMessage] = useState();

  function submitForm(e: any) {
    e.preventDefault();
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
          We'd love to hear from you. Reach out today!
        </p>
        <form className="mt-10 w-52 md:w-96">
          <div className="flex flex-col gap-2 mb-3">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="p-3 bg-transparent border-zinc-800 border rounded-md outline-none focus:border-zinc-600"
              placeholder="Your Name"
              style={smallFont}
            />
          </div>
          <div className="flex flex-col gap-2 mb-3">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="p-3 bg-transparent border-zinc-800 border rounded-md outline-none focus:border-zinc-600"
              placeholder="Your Email"
              style={smallFont}
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
              onChange={(e) => e.target.value}
            ></textarea>
          </div>
          <button
            type="submit"
            className="p-3 w-full bg-red-900 my-2 rounded-md font-bold"
            onClick={submitForm}
          >
            Submit
          </button>
        </form>
        {message ? (
          <div className="message-sent bg-zinc-900 p-3">
            <p>
              Your message has been sent! <br /> {message}
            </p>
            <MdCancel
              className="cursor-pointer"
              style={{ fontSize: "22px" }}
              onClick={close}
            />
          </div>
        ) : (
          ""
        )}
      </section>
    </>
  );
}
