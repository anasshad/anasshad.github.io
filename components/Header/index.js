import { useState, useEffect } from "react";
import Image from "next/image";
import Scrollspy from "react-scrollspy";
import styles from "./styles.module.css";

export default function Header() {
  const [showAvatar, setShowAvatar] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    window.onscroll = function () {
      if (window.pageYOffset >= 400) {
        setShowAvatar(true);
      } else {
        setShowAvatar(false);
      }
    };

    function handleResize() {
      if (window.innerWidth < 640) setOpenMenu(false);
      else setOpenMenu(true);
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex justify-between fixed top-0 w-full px-5 py-2 bg-gray-700 text-white text-center z-10 shadow-lg">
      <div className="flex content-center gap-5">
        {showAvatar && (
          <Image
            src="/selfimage.gif"
            className="rounded-full"
            height="42"
            width="42"
          />
        )}
        <h1 style={{ lineHeight: "42px" }}>Anas Shad</h1>
      </div>
      <div className="w-3/4 md:w-1/2">
        <button
          onClick={() => setOpenMenu(!openMenu)}
          className="sm:hidden leading-10 w-full flex justify-end"
        >
          Open
        </button>
        <Scrollspy
          items={["main", "profile", "technologies", "projects", "contact"]}
          currentClassName="bg-blue-400 px-2 rounded-sm"
          // style={{
          //   display: "flex",
          //   flexWrap: "nowrap",
          //   width: "100%",
          //   justifyContent: "space-between",
          //   lineHeight: "42px",
          // }}
          className={`flex flex-col justify-between leading-10 sm:flex-row flex-nowrap ${
            !openMenu && "hidden"
          }`}
        >
          <li>
            <a href="#main">About</a>
          </li>
          <li>
            <a href="#profile">Profile</a>
          </li>
          <li>
            <a href="#technologies">Technologies</a>
          </li>
          <li>
            <a href="#projects">Featured Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </Scrollspy>
      </div>
    </div>
  );
}
