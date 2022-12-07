import { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";

const Contact = () => {
  const [formDetails, setFormDetails] = useState({
    name: "",
    email: "",
    message: "",
  });

  return (
    <section id="contact" className=" bg-gray-900 w-full h-screen">
      <div className="flex flex-col gap-3 font-mono w-full h-screen pt-20 p-4 md:w-3/6 md:ml-40">
        <h1 className="text-2xl md:text-4xl text-green-400 font-bold">
          Contact Me
        </h1>
        <p className="text-zinc-50">
          My preferred method of contact is through Email:{" "}
          <span className="text-green-500">bsmerd@adam.com.au</span> or feel
          free to send a message on my socials listed{" "}
          <Link className="text-green-500 hover:text-zinc-400" to="/#" smooth>
            above.
          </Link>
        </p>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            value={formDetails.name}
            placeholder="* preferred name..."
          />
          <input
            type="text"
            value={formDetails.email}
            placeholder="* email address..."
          />
          <textarea
            value={formDetails.message}
            placeholder="* send a message..."
            rows={4}
          />
          <button className="w-60 text-cyan-100 border-solid border-2 border-green-400 p-3 text-center rounded-2xl hover:bg-green-400 active:text-green-400 active:bg-cyan-100 transition-all">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
