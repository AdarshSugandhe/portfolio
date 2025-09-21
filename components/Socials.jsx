import Link from "next/link";
import { FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

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
        >
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
