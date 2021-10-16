/*
 * @Description:
 * @Author: Kenzi
 * @Date: 2021-08-08 17:46:13
 * @LastEditTime: 2021-08-16 19:58:30
 * @LastEditors: Kenzi
 */
import Image from "next/image";
import {
  motion,
  useViewportScroll,
  useSpring,
  useTransform,
  AnimatePresence,
} from "framer-motion";
function SmallCard({ img, location, distance, variants }) {
  return (
    <motion.div
      variants={variants}
      className="slide flex items-center m-2 mt-5 space-x-4 rounded-lg cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out "
    >
      {/* left */}
      <div className="relative h-16 w-16">
        <Image src={img} layout="fill" className="rounded-lg" />
      </div>
      {/* right */}
      <div>
        <h2>{location}</h2>
        <h3 className="text-gray-500">{distance}</h3>
      </div>
    </motion.div>
  );
}

export default SmallCard;
