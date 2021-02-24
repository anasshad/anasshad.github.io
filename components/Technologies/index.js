import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./styles.module.css";

import Languages from "./Languages";
import TechnologiesUsed from "./Technologies";

export default function Technologies() {
  const [pageYOffset, setPageYOffset] = useState(0);

  useEffect(() => {
    setPageYOffset(window.pageYOffset);
  }, []);

  return (
    <div className="grid md:grid-cols-2 bg-green-100">
      <div>
        <div className="h-full flex flex-wrap py-10  space-x-10">
          <h2 className="w-full text-center text-gray-900 text-2xl mb-5">
            Languages I use
          </h2>
          <br />
          {pageYOffset >= 764 && (
            <div className="flex flex-wrap space-x-4 md:space-x-8 justify-center">
              <Languages
                label="Javascript"
                logo="/logo-javascript.svg"
                color="#efd81d"
                delay={1}
                value={90}
              />
              <Languages
                label="Solidity"
                logo="/solidity.svg"
                color="#00cf9c"
                delay={2}
                value={75}
              />
              <Languages
                label="Typescript"
                logo="/typescript.svg"
                color="#2f74c0"
                delay={3}
                value={80}
              />
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-wrap w-full py-10  space-x-10">
        <h2 className="w-full text-center text-gray-900 text-2xl mb-5">
          Technologies I Use
        </h2>
        <TechnologiesUsed />
      </div>
    </div>
  );
}
