import React, { useRef } from "react";
import { HashLink as Link } from "react-router-hash-link";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//TODO add in cheeky toaster pop up for when message sent

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const createToast = (message) => {
      toast.success(`${message}`, {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    };

    emailjs
      .sendForm(
        "service_ouwljep",
        "template_rabp8o9",
        form.current,
        "RQYS-44VuF0Vo86Ns"
      )
      .then(
        (result) => {
          console.log(result.text);
          createToast("Message sent!");
        },
        (error) => {
          console.log(error.text);
          createToast("Error, please check credentials and try again!");
        }
      );
  };

  return (
    <section id="contact" className=" bg-gray-900 w-full h-screen">
      <div className="flex flex-col gap-3 font-mono w-full h-screen pt-20 p-4 md:w-3/6 md:ml-40">
        <h1 className="text-2xl md:text-4xl text-green-400 font-bold">
          Contact Me
        </h1>
        <p className="text-zinc-50">
          My preferred method of contact is through Email:{" "}
          <span className="text-green-500">bjsmerd@gmail.com</span> or feel free
          to send a message on my socials listed{" "}
          <Link className="text-green-500 hover:text-zinc-400" to="/#" smooth>
            above.
          </Link>
        </p>
        <form className="flex flex-col gap-4" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            placeholder="* preferred name..."
            className="rounded-lg pl-1 p-1 border-green-400 border-solid border-4 outline-0"
          />
          <input
            type="email"
            name="user_email"
            placeholder="* email address..."
            className="rounded-lg pl-1 p-1 border-green-400 border-solid border-4 outline-0"
          />
          <textarea
            name="message"
            placeholder="* send a message..."
            rows={4}
            className="rounded-lg pl-1 p-1 border-green-400 border-solid border-4 outline-0"
          />
          <input
            type="submit"
            value="Send"
            className="hover:cursor-pointer w-60 text-cyan-100 border-solid border-2 border-green-400 p-3 text-center rounded-2xl hover:bg-green-400 active:text-green-400 active:bg-cyan-100 transition-all"
          />
        </form>
        <ToastContainer
          position="top-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </div>
    </section>
  );
};

export default Contact;
