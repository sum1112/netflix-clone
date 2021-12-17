import React, { useEffect, useState } from "react";
import "./Nav.css";
function Nav() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={show ? "Nav up" : "Nav"}>
      <img
        className="nav_logo"
        alt="Netflix-logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
      ></img>
      <img
        className="nav_avatar"
        alt="Nav-avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
      ></img>
    </div>
  );
}

export default Nav;
