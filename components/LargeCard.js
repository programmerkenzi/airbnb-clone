/*
 * @Description:
 * @Author: Kenzi
 * @Date: 2021-08-08 18:18:27
 * @LastEditTime: 2021-08-17 18:06:37
 * @LastEditors: Kenzi
 */
import Image from "next/dist/client/image";
import { motion } from 'framer-motion'

function LargeCard({ img, title, description, buttonText }) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="relative py-16">
      <div id="box" className="relative h-96 min-w-[300px]">
        <Image
          src={img}
          layout="fill"
          className="rounded-2xl"
          objectFit="cover"
        />
      </div>
      <div className="absolute top-32 left-32 ">
        <h3 className="w-64 mb-3 text-4xl">{title}</h3>
        <p>{description}</p>
        <button className="px-4 py-2 mt-5 text-sm text-white transition duration-200 bg-gray-900 rounded-lg cursor-pointer hover:shadow-xl active:scale-90 ">
          {buttonText}
        </button>
      </div>
    </motion.section>
  );
}

export default LargeCard;
