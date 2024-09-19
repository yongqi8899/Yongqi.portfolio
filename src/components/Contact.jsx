import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { StarsCanvas, EarthCanvas } from "./canvas";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Yongqi Zhang",
          from_email: form.email,
          to_email: "yz.zhang.de@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <>
      <div className={`xl:mt-12 flex xl:flex-row gap-10 overflow-hidden`}>
        <div className="flex flex-col w-full p-8 border-tertiary/20 bg-tertiary/30">
          <div className="flex justify-between">
            <div className="flex flex-col w-full">
              <p className={styles.sectionSubText}>Get in touch</p>
              <h3 className={styles.sectionHeadText}>Contact.</h3>
            </div>
            <EarthCanvas />
          </div>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-8 mt-12"
          >
            <label className="flex flex-col">
              <span className="mb-4 font-medium text-white">Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="px-6 py-4 font-medium text-white border-none rounded-lg outline-none bg-tertiary placeholder:text-secondary"
              />
            </label>
            <label className="flex flex-col">
              <span className="mb-4 font-medium text-white">Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="px-6 py-4 font-medium text-white border-none rounded-lg outline-none bg-tertiary placeholder:text-secondary"
              />
            </label>
            <label className="flex flex-col">
              <span className="mb-4 font-medium text-white">Message</span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                className="px-6 py-4 font-medium text-white border-none rounded-lg outline-none bg-tertiary placeholder:text-secondary"
              />
            </label>

            <button
              type="submit"
              className="w-full px-8 py-3 m-auto font-bold text-white shadow-md outline-none bg-tertiary border-violet-500 violet-gradient rounded-xl shadow-primary hover:bg-blue-400"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </div>
      </div>
      <StarsCanvas />
    </>
  );
};

export default SectionWrapper(Contact, "contact");
