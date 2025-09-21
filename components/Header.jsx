"use client";

import Logo from "./Logo";
import Nav from "./Nav";
import Socials from "./Socials";

const Header = () => {
  return (
    <header className="w-full absolute py-8 xl:py-[48px] z-30">
      <div className="container mx-auto px-2 md:px-4">
        <div className="flex flex-col lg:flex-row items-center gap-4 lg:justify-between">
          <Logo />
          <div className="flex items-center gap-12">
            <Nav
              containerStyles="hidden xl:flex"
              listStyles="flex gap-6"
              linkStyles="text-primary font-primary tracking-[1.4px] transition-all duration-300 cursor-pointer uppercase font-bold"
              spy={true}
            />
            <Socials
              containerStyles="flex items-center gap-2"
              iconStyles="text-base w-[32px] h-[32px] bg-primary text-white flex items-center justify-center rounded-full"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
