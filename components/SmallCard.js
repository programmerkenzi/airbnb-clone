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
function SmallCard({ img, location, distance, variants, index }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, delay: index * 0.1 }}
      viewport={{ once: true }}

      className="flex items-center m-2 mt-5 space-x-4 transition duration-200 ease-out transform rounded-lg cursor-pointer slide hover:bg-gray-100 hover:scale-105 "
    >
      {/* left */}
      <div className="relative w-16 h-16">
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
