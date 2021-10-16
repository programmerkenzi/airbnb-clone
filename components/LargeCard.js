/*
 * @Description:
 * @Author: Kenzi
 * @Date: 2021-08-08 18:18:27
 * @LastEditTime: 2021-08-17 18:06:37
 * @LastEditors: Kenzi
 */
import Image from "next/dist/client/image";

function LargeCard({ img, title, description, buttonText }) {
  return (
    <section className="relative py-16">
      <div id="box" className="relative h-96 min-w-[300px]">
        <Image
          src={img}
          layout="fill"
          className="rounded-2xl"
          objectFit="cover"
        />
      </div>
      <div className="absolute top-32 left-32 ">
        <h3 className="text-4xl mb-3 w-64">{title}</h3>
        <p>{description}</p>
        <button className="text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5  cursor-pointer transition  hover:shadow-xl active:scale-90  duration-200 ">
          {buttonText}
        </button>
      </div>
    </section>
  );
}

export default LargeCard;
