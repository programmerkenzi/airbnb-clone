/*
 * @Description:
 * @Author: Kenzi
 * @Date: 2021-08-08 17:46:13
 * @LastEditTime: 2021-08-16 17:51:41
 * @LastEditors: Kenzi
 */
import Image from "next/image";

function SmallCard({ img, location, distance }) {
  return (
    <div className="slide flex items-center m-2 mt-5 space-x-4 rounded-lg cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out ">
      {/* left */}
      <div className="relative h-16 w-16">
        <Image src={img} layout="fill" className="rounded-lg" />
      </div>
      {/* right */}
      <div>
        <h2>{location}</h2>
        <h3 className="text-gray-500">{distance}</h3>
      </div>
    </div>
  );
}

export default SmallCard;
