"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { trackEvent } from "@/lib/analytics";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/AdarshSugandhe" },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/adarsh-sugandhe/",
  },
  // { icon: <FaFacebookF />, path: "" },
  // { icon: <RiInstagramFill />, path: "" },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <Link
          href={item.path}
          target="_blank"
          key={index}
          className={iconStyles}
          onClick={() => {
            if (item.path.includes("github")) {
              trackEvent("click", "Social", "GitHub Click", 1);
            } else if (item.path.includes("linkedin")) {
              trackEvent("click", "Social", "LinkedIn Click", 1);
            }
          }}
        >
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
