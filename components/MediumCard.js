/*
 * @Description:
 * @Author: Kenzi
 * @Date: 2021-08-08 18:00:47
 * @LastEditTime: 2021-08-18 20:11:22
 * @LastEditors: Kenzi
 */
import Image from "next/image";
import { motion } from "framer-motion";
function MediumCard({ img, title, variants, index }) {
  return (
    <motion.div

      className="transition duration-300 ease-out transform cursor-pointer hover:scale-105"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="relative h-80 w-80">
        <Image src={img} layout="fill" className="rounded-lg" />
      </div>
      <h3 className="mt-3 text-2xl">{title}</h3>
    </motion.div>
  );
}

export default MediumCard;
