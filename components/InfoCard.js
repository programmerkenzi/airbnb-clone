/*
 * @Description:
 * @Author: Kenzi
 * @Date: 2021-08-11 20:20:49
 * @LastEditTime: 2021-08-18 19:46:17
 * @LastEditors: Kenzi
 */

import { HeartIcon, StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { motion } from "framer-motion";

function InfoCard({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
  variants,
}) {
  return (
    <motion.div
      variants={variants}
      className="flex py-7 px-2  border-b cursor-pointer  hover:opacity-80  hover:shadow-lg pr-4 transition duration-200 first:border-t"
    >
      <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0  rounded ">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>
      <div className="flex flex-col flex-grow pl-5">
        <div className="flex  justify-between">
          <p>{location}</p>
          <HeartIcon className="h-7 cursor-pointer" />
        </div>
        <h4 className="text-xl">{title}</h4>
        <div className="border-b w-10 pt-2" />
        <p className="pt-2 text-sm text-gray-500 flex-grow">{description}</p>
        <div className="flex justify-between items-end pt-5">
          <p className="flex items-center">
            <StarIcon className="h-5 text-red-400" />
            {star}
          </p>
          <div>
            <p className="text-lg lg:text-2xl font-semibold pb-2">{price}</p>
            <p className="text-right font-extralight">{total}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default InfoCard;
