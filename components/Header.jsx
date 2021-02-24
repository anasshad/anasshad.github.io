import Scrollspy from "react-scrollspy";

export default function Header() {
  return (
    <div className="fixed top-0 w-full py-5 bg-gray-700 text-white text-center z-10">
      <Scrollspy
        items={["main", "profile", "technologies", "projects", "contact"]}
        currentClassName="bg-blue-400"
        style={{
          display: "flex",
          width: "50%",
          justifyContent: "space-between",
        }}
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
  );
}
