/*
 * @Description:
 * @Author: Kenzi
 * @Date: 2021-08-08 18:00:47
 * @LastEditTime: 2021-08-18 20:11:22
 * @LastEditors: Kenzi
 */
import Image from "next/image";
import { motion } from "framer-motion";
function MediumCard({ img, title, variants }) {
  return (
    <motion.div
      variants={variants}
      className="cursor-pointer hover:scale-105 transition transform duration-300 ease-out"
    >
      <div className="relative h-80 w-80">
        <Image src={img} layout="fill" className="rounded-lg" />
      </div>
      <h3 className="text-2xl mt-3">{title}</h3>
    </motion.div>
  );
}

export default MediumCard;
