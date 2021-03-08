const buttonClass =
  "flex flex-row items-center gap-2 sm:gap-5 border border-gray-700 shadow-lg px-7 py-2 rounded-3xl hover:bg-gray-700";

export default function Contact() {
  return (
    <div className="flex flex-col h-full bg-gray-800 p-10 text-gray-300 justify-center gap-5">
      <h1 className="text-2xl text-center">Contact</h1>
      <div className="flex flex-wrap justify-evenly">
        <a href="" className={buttonClass}>
          <img
            src="/facebook.png"
            alt="github logo"
            height="26"
            width="26"
            className="object-contain"
          />
          Github
        </a>
        <a href="" className={buttonClass}>
          <img src="/linkedin.png" alt="linkedin logo" height="26" width="26" />
          LinkedIn
        </a>
        <a href="" className={buttonClass}>
          <img src="/facebook.png" alt="facebook logo" height="26" width="26" />
          Facebook
        </a>
        <a href="" className={buttonClass}>
          <img src="/twitter.png" alt="twitter logo" height="26" width="26" />
          Twitter
        </a>
      </div>
    </div>
  );
}
