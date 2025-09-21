import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CgMenuGridR } from "react-icons/cg";
import { useMediaQuery } from "react-responsive";
import { FiMapPin, FiPhoneCall, FiMail } from "react-icons/fi";

import Nav from "./Nav";
import Socials from "./Socials";

const FixedMenu = () => {
  const [showMenuButton, setShowMenuButton] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const isMobile = useMediaQuery({
    query: "(max-width: 640px)",
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      const handleScroll = () => {
        setShowMenuButton(window.scrollY > 150);
      };

      if (!isMobile) {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      } else {
        setShowMenuButton(true);
      }
    }
  }, [isMobile, isMounted]);

  if (!isMounted) return null;

  return (
    <div className="fixed w-full h-[400px] z-50 flex justify-center pointer-events-none bg-transparent">
      <AnimatePresence>
        {showMenu && showMenuButton && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            tranisition={{ duration: 0.2 }}
            className="fixed bottom-24 -translate-x-1/2 w-full max-w-md md:max-w-none h-[400px] px-4 pointer-events-auto landscape:bottom-5"

          >
            <div className="bg-black w-full h-full shadow-custom max-w-[1170px] mx-auto py-12 xl:py-12 xl:px-32 flex items-center lg:gap-12 rounded-lg">
              <Nav
                onClickShowMenu={setShowMenu}
                containerStyles="md:border-r-[2px] border-accent md:pr-12 w-full md:w-auto text-center md:text-left mx-auto"
                listStyles="flex flex-col justify-center gap-4"
                linkStyles="font-primary text-4xl cursor-pointer uppercase hover:text-accent tranisition-all duration-300 hover:scale-[1.03]"
                spy={true}
              />
              <div className="hidden md:flex mx-auto">
                <div className="mx-auto">
                  <div className="flex flex-col gap-4 lg:flex-row lg:gap-12 lg:mb-12">
                    <div className="flex flex-col">
                      <div className="text-[28px] text-accent mb-2">
                        <FiMapPin />
                      </div>
                      <p className="text-white font-semibold text-lg">
                        Location
                      </p>
                      <p className="text-[#afafaf]">Maharashtra, India</p>
                    </div>

                    <div className="flex flex-col">
                      <div className="text-[28px] text-accent mb-2">
                        <FiPhoneCall />
                      </div>
                      <p className="text-white font-semibold text-lg">Phone</p>
                      <p className="text-[#afafaf]">+91 8766813577</p>
                    </div>

                    <div className="flex flex-col">
                      <div className="text-[28px] text-accent mb-2">
                        <FiMail />
                      </div>
                      <p className="text-white font-semibold text-lg">Email</p>
                      <p className="text-[#afafaf]">
                        adarshsugandhe2024@gmail.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 mt-2">
                    <Socials
                      containerStyles="flex gap-2"
                      iconStyles="text-[20px] w-[32px] h-[32px] flex items-center justify-center rounded-full text-accent"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {isMobile ? (
        <div className="fixed z-50 bottom-16">
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="bg-accent shadow-custom w-[54px] h-[54px] rounded-lg cursor-pointer flex items-center justify-center select-none pointer-events-auto text-white"
          >
            <CgMenuGridR className="text-4xl text-white" />
          </button>
        </div>
      ) : (
        <AnimatePresence>
          {showMenuButton && (
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              tranisition={{
                type: "spring",
                stiffness: 400,
                damping: 40,
              }}
              className="fixed z-50 bottom-16 pointer-events-auto"
            >
              <button
                onClick={() => setShowMenu(!showMenu)}
                className="bg-accent shadow-custom w-[54px] h-[54px] rounded-lg cursor-pointer flex items-center justify-center select-none text-white"
              >
                <CgMenuGridR className="text-4xl text-white" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
};

export default FixedMenu;
