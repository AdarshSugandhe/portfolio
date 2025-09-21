import { useForm, ValidationError } from "@formspree/react";
import AnimatedText from "./AnimatedText";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

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
      className="pt-8 xl:pt-12 pb-32 px-2 md:px-4 bg-[#171717]"
      id="contact"
    >
      <div className="container mx-auto">
        <div className="flex flex-col items-center xl:flex-row gap-16 text-white overflow-hidden">
          {/* Form Section */}
          <div className="flex-1 mx-auto xl:mx-0 flex flex-col">
            <AnimatedText
              text="Let's Work Together"
              textStyles="h2 mb-12 font-bold text-center xl:text-left text-accent md:text-5xl"
            />
            <motion.form
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.6 }}
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
                    className="input bg-[#171717]"
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
                    className="input bg-[#171717]"
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
                  className="input bg-[#171717]"
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
                  className="input bg-[#171717]"
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
                  className="textarea bg-[#171717]"
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
                      className={`transition-opacity duration-500 ease-in-out xl:text-black font-semibold ${
                        showIcon ? "opacity-0" : "opacity-100"
                      }`}
                    >
                      Send Message
                    </span>
                  </>
                )}
              </button>
            </motion.form>
          </div>

          {/* Image Section */}
          <motion.div
            className="hidden xl:flex relative w-[577px] h-[664px] rounded-lg overflow-hidden"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.6 }}
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
    </section>
  );
};

export default Contact;
