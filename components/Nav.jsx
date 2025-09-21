"use client";
import { Link as ScrollLink } from "react-scroll";

const links = [
  { name: "home" },
  { name: "work" },
  { name: "about" },
  { name: "journey" },
  { name: "contact" },
];

const Nav = ({
  containerStyles,
  listStyles,
  linkStyles,
  spy,
  onClickShowMenu,
}) => {
  return (
    <nav className={containerStyles}>
      <ul className={listStyles}>
        {links.map((link, index) => {
          return (
            <ScrollLink
              spy={spy}
              key={index}
              activeClass="active"
              to={link.name}
              smooth
              offset={-420}
              className={linkStyles}
            >
              <p onClick={() => onClickShowMenu(false)}>{link.name}</p>
            </ScrollLink>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
