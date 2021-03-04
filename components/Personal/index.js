import Image from "next/image";
import styles from "./styles.module.css";

export default function Personal() {
  return (
    <div className="flex flex-wrap p-10 justify-center bg-gradient-to-r from-red-400 via-yellow-500 to-gray-100">
      {/* <h1 className="text-3xl border-b-8 mb-8">Profile</h1> */}
      <div className="grid grid-cols-3 gap-5">
        <div className="flex flex-wrap content-center col-span-2 ">
          <p>
            <span className={styles.bebasNeue}>
              I'm ANAS SHAD & I'm a freelance FULLSTACK REACT and ETHEREUM
              BLOCKCHAIN DEVELOPER
            </span>
            <br />

            <span className="text-gray-800 text-base sm:text-2xl">
              A self motivated individual with a keen eye to detail and passion
              for clean design, I have the knowledge and skill to take your jobs
              to the next level
            </span>
          </p>
        </div>

        <div className={styles.box}>
          <img
            src="/myimage.png"
            alt="Developer Profile image"
            height="300px"
            width="300px"
          />
        </div>
      </div>
    </div>
  );
}
