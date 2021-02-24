import Image from "next/image";
import styles from "./styles.module.css";

export default function Personal() {
  return (
    <div className="flex flex-wrap p-10 justify-center">
      <h1 className="text-3xl border-b-8 mb-8">Profile</h1>
      <div className="grid grid-cols-3 gap-5">
        <div className="flex flex-wrap content-center col-span-2 ">
          <p>
            <span className={styles.bebasNeue}>
              I'm ANAS SHAD & I'm a freelance FULLSTACK REACT and ETHEREUM
              BLOCKCHAIN DEVELOPER
            </span>
            <br />A self motivated individual with a keen eye to detail and
            passion for clean design, I have the knowledge and skill to take
            your jobs to the next level
          </p>
        </div>

        <div className="mx-auto rounded-full bg-gray-700">
          <Image
            src="/code-computer.png"
            alt="Developer Profile image"
            height="300px"
            width="300px"
          />
        </div>
      </div>
    </div>
  );
}
