import Image from "next/image";

import Photo from "./Photo";
import Intro from "./Intro/index";

export default function Main() {
  return (
    <div className="h-screen grid grid-cols-1 sm:grid-cols-3 gap-6 p-10 py-20 overflow-hidden">
      <div className="flex flex-wrap content-center mx-auto w-3/4 sm:w-full">
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
