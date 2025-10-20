"use client"

import { useEffect, useState } from "react";
import Logo from "./Logo";

const Footer = () => {
  const [year, setYear] = useState("--");

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="py-12 bg-neutral-950 px-2 md:px-4 border-t border-gray-600">
      <div className="container mx-auto">
        <div className="flex items-start flex-col md:flex-row sm:justify-between">
          <Logo light={true} />
          <div className="text-white/70 font-light">
            Copyright &copy;<span> {year}. </span>All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
