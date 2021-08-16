/*
 * @Description:
 * @Author: Kenzi
 * @Date: 2021-08-08 18:00:47
 * @LastEditTime: 2021-08-13 18:58:51
 * @LastEditors: Kenzi
 */
import Image from "next/image";

function MediumCard({ img, title }) {
  return (
    <div className="cursor-pointer hover:scale-105 transition transform duration-300 ease-out">
      <div className="relative h-80 w-80">
        <Image src={img} layout="fill" className="rounded-lg" />
      </div>
      <h3 className="text-2xl mt-3">{title}</h3>
    </div>
  );
}

export default MediumCard;
