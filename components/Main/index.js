import Image from "next/image";

import Photo from "./Photo";
import Intro from "./Intro/index";

export default function Main() {
  return (
    <div className="h-screen grid grid-cols-3 gap-6 p-10">
      <div className="flex flex-wrap content-center">
        <Photo />
      </div>
      <div className="col-span-2 flex flex-wrap content-center justify-center">
        <Intro />
      </div>
      <div style={{ zIndex: "-1" }}>
        <Image
          alt="Tech Background"
          src="/grid_bg.png"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
    </div>
  );
}
