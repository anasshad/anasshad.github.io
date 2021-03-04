import { useState, useEffect } from "react";
import Image from "next/image";
import Scrollspy from "react-scrollspy";
import styles from "./styles.module.css";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const [section, setSection] = useState("main");

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 640) setOpenMenu(false);
      else setOpenMenu(true);
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="text-xs flex justify-between fixed top-0 w-full px-5 py-2 text-gray-200 bg-gray-700 bg-opacity-40 text-center z-10 shadow-lg">
      <div className="flex content-center gap-5">
        {section !== "main" && (
          <Image
            src="/selfimage.gif"
            className="rounded-full"
            layout="fixed"
            height="42"
            width="42"
          />
        )}
        <h1 className="text-xs" style={{ lineHeight: "42px" }}>
          Anas Shad
        </h1>
      </div>
      <div className="w-3/4 md:w-1/2">
        <button
          onClick={() => setOpenMenu(!openMenu)}
          className="sm:hidden leading-10 w-full flex justify-end outline-none"
        >
          {openMenu === false ? (
            <Image
              src="/square.svg"
              height="30"
              width="30"
              layout="fixed"
              className={styles.hamburger_icon}
            />
          ) : (
            <div className="uppercase text-white px-2 rounded-sm ">X</div>
          )}
        </button>
        <Scrollspy
          items={["main", "profile", "technologies", "projects", "contact"]}
          currentClassName="border-b-2"
          onUpdate={(d) => setSection(d.id)}
          className={`flex flex-col justify-between leading-10 sm:flex-row flex-nowrap uppercase text-sm ${
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
