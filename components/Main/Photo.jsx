import Image from "next/image";

export default function Photo() {
  return (
    <div>
      <Image
        className="rounded-full shadow-2xl"
        src="/selfimage.gif"
        alt="photo"
        width="500"
        height="500"
      />
    </div>
  );
}
