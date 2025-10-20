"use client"

import Image from "next/image";
import { useForm, ValidationError } from "@formspree/react";
import { FaCheckCircle } from "react-icons/fa";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Heading from "./Heading";

const Contact = () => {
  const [state, handleSubmit] = useForm("xpwjapvd");
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
  });
  const [showIcon, setShowIcon] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    if (state.succeeded) {
      setShowIcon(true);
      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        message: "",
      });

      const timer = setTimeout(() => {
        setShowIcon(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const result = await handleSubmit(e);
    if (result) {
      setShowIcon(true);
      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        message: "",
      });
      const timer = setTimeout(() => setShowIcon(false), 3000);
      return () => clearTimeout(timer);
    }
  };

  return (
    <section
      className="pt-8 xl:pt-12 pb-32 px-2 md:px-4 bg-neutral-950"
      id="contact"
    >
      <div className="container mx-auto">
        <div className="text-white">
          <div className="flex-1 mx-auto xl:mx-0 flex flex-col">
            <Heading
              heading="LET'S WORK TOGETHER"
              styles="h2 font-bold text-center text-white xl:text-left text-6xl md:text-8xl overflow-hidden"
            />

            <div className="flex flex-col items-center justify-between xl:flex-row gap-16 text-white overflow-hidden">
              <motion.form
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.6 }}
                onSubmit={handleFormSubmit}
                className="flex flex-col gap-6 w-full max-w-[480px]"
              >
                <div className="flex gap-8">
                  {/* First Name */}
                  <div className="flex-1">
                    <label
                      htmlFor="firstname"
                      className="block mb-2 text-sm font-medium"
                    >
                      First Name <span className="text-accent">*</span>
                    </label>
                    <input
                      onChange={handleChange}
                      type="text"
                      id="firstname"
                      name="firstname"
                      value={formData.firstname}
                      className="input bg-neutral-950"
                      placeholder="First Name"
                      required
                    />
                  </div>

                  {/* Last Name */}
                  <div className="flex-1">
                    <label
                      htmlFor="lastname"
                      className="block mb-2 text-sm font-medium"
                    >
                      Last Name <span className="text-accent">*</span>
                    </label>
                    <input
                      onChange={handleChange}
                      type="text"
                      id="lastname"
                      name="lastname"
                      value={formData.lastname}
                      className="input bg-neutral-950"
                      placeholder="Last Name"
                      required
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium"
                  >
                    Email <span className="text-accent">*</span>
                  </label>
                  <input
                    onChange={handleChange}
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    className="input bg-neutral-950"
                    placeholder="youremail@gmail.com"
                    required
                  />

                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block mb-2 text-sm font-medium"
                  >
                    Phone number <span className="text-accent">*</span>
                  </label>
                  <input
                    onChange={handleChange}
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    className="input bg-neutral-950"
                    placeholder="+91 000-000-0000"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm font-medium"
                  >
                    Message <span className="text-accent">*</span>
                  </label>
                  <textarea
                    onChange={handleChange}
                    id="message"
                    name="message"
                    value={formData.message}
                    className="textarea bg-neutral-950"
                    placeholder="Leave me a message..."
                    rows="5"
                    required
                  />

                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="btn btn-accent flex items-center justify-center gap-2 relative"
                >
                  {state.submitting ? (
                    <>
                      <span className="w-5 h-5 rounded-full border-[2px] animate-spin border-t-transparent"></span>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <FaCheckCircle
                        className={`absolute text-lg transform transition-all duration-500 ease-in-out ${
                          showIcon
                            ? "opacity-100 scale-125 text-green-400"
                            : "opacity-0 scale-75"
                        }`}
                      />
                      <span
                        className={`transition-opacity duration-500 ease-in-out font-semibold ${
                          showIcon ? "opacity-0" : "opacity-100"
                        }`}
                      >
                        Send Message
                      </span>
                    </>
                  )}
                </button>
              </motion.form>

              {/* Image Section */}
              <motion.div
                className="hidden xl:flex relative w-[577px] h-[664px] rounded-lg overflow-hidden"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.7 }}
              >
                <Image
                  src="/assets/contact/img.png"
                  className="object-cover"
                  fill
                  quality={100}
                  alt="Contact illustration"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
