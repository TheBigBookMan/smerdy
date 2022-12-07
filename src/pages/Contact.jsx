import { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";

const Contact = () => {
  const [formDetails, setFormDetails] = useState({
    name: "",
    email: "",
    message: "",
  });

  const changeDetails = (e) => {
    setFormDetails({
      ...formDetails,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(formDetails);
  };

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
            name="name"
            onChange={changeDetails}
            value={formDetails.name}
            placeholder="* preferred name..."
            className="rounded-lg pl-1 p-1 border-green-400 border-solid border-4 outline-0"
          />
          <input
            type="text"
            name="email"
            onChange={changeDetails}
            value={formDetails.email}
            placeholder="* email address..."
            className="rounded-lg pl-1 p-1 border-green-400 border-solid border-4 outline-0"
          />
          <textarea
            name="message"
            onChange={changeDetails}
            value={formDetails.message}
            placeholder="* send a message..."
            rows={4}
            className="rounded-lg pl-1 p-1 border-green-400 border-solid border-4 outline-0"
          />
          <button
            onClick={sendEmail}
            className="w-60 text-cyan-100 border-solid border-2 border-green-400 p-3 text-center rounded-2xl hover:bg-green-400 active:text-green-400 active:bg-cyan-100 transition-all"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
