import Image from "next/image";

export default function Technologies() {
  return (
    <div className="w-full grid grid-cols-3 gap-5">
      <Image src="/react-2.svg" alt="react logo" height="50" width="50" />
      <Image src="/nodejs-1.svg" alt="nodejs logo" height="50" width="50" />
      <Image src="/redux.svg" alt="redux logo" height="50" width="50" />
      <Image src="/nextjs-3.svg" alt="nextjs logo" height="50" width="50" />
      <Image src="/gatsby.svg" alt="gatsby logo" height="50" width="50" />
      <Image src="/graphql.svg" alt="graphql logo" height="50" width="50" />
      <Image src="/strapi-2.svg" alt="strapi logo" height="50" width="50" />
      <Image
        src="/storybook-1.svg"
        alt="storybook logo"
        height="50"
        width="50"
      />
      <Image src="/netlify.svg" alt="netlify logo" height="50" width="50" />
    </div>
  );
}
