import Image from "next/image";

export default function Card(d) {
  return (
    <div className="bg-gray-200 rounded-xl w-1/3 mx-auto content-center shadow-xl">
      <div className="shadow-sm">
        <Image
          src={d.image}
          className=""
          layout="responsive"
          height="200"
          width="400"
        />
      </div>

      <div className="w-3/4 mx-auto my-5">
        <h3 className="w-full text-center text-xl font-bold">{d.title}</h3>
        <p className="text-center text-gray-800 text-sm my-5">
          {d.description}
        </p>
      </div>
      <div className="flex flex-wrap">
        <a
          className={
            d.deploy_link !== ""
              ? "flex  justify-center content-center py-2 gap-3 bg-gray-400 md:w-1/2 w-full"
              : "flex justify-center content-center py-2 gap-3 bg-gray-400 w-full"
          }
          href={d.github_link}
        >
          <img src="/github-icon-1.svg" alt="github" height="16" width="16" />
          Github
        </a>
        {d.deploy_link !== "" && (
          <a
            className="flex justify-center content-center py-2 gap-3 bg-purple-800 text-gray-400 md:w-1/2 w-full"
            href={d.deploy_link}
          >
            <img src="/link-128.png" alt="link icon" height="16" width="16" />
            Link
          </a>
        )}
      </div>
    </div>
  );
}
