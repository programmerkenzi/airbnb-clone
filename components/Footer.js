/*
 * @Description:
 * @Author: Kenzi
 * @Date: 2021-08-08 18:29:35
 * @LastEditTime: 2021-08-22 15:16:37
 * @LastEditors: Kenzi
 */
import { motion } from "framer-motion";
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 1,
      staggerDirection: 1,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 1 } },
};

function Footer() {
  return (
    <motion.div
      variants={container}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true }}

      className="grid grid-cols-1 px-32 text-gray-600 bg-gray-100 md:grid-cols-4 gap-y-10 py-14 "
    >
      <motion.div
        variants={item}
        className="space-y-4 text-xs text-gray-800 "
        whileHover={{ fontSize: "14px" }}
      >
        <h5 className="font-bold">ABOUT</h5>
        <p className="transition duration-200 transform hover:text-gray-400">
          How Airbnb works
        </p>
        <p className="transition duration-200 transform hover:text-gray-400">
          Newsroom
        </p>
        <p className="transition duration-200 transform hover:text-gray-400">
          Investors
        </p>
        <p className="transition duration-200 transform hover:text-gray-400">
          Airbnb Plus
        </p>
        <p className="transition duration-200 transform hover:text-gray-400">
          Airbnb Luxe
        </p>
      </motion.div>
      <motion.div
        variants={item}
        className="space-y-4 text-xs text-gray-800 "
        whileHover={{ fontSize: "14px" }}
      >
        <h5 className="font-bold">ABOUT</h5>
        <p className="transition duration-200 transform hover:text-gray-400">
          How Airbnb works
        </p>
        <p className="transition duration-200 transform hover:text-gray-400">
          Newsroom
        </p>
        <p className="transition duration-200 transform hover:text-gray-400">
          Investors
        </p>
        <p className="transition duration-200 transform hover:text-gray-400">
          Airbnb Plus
        </p>
        <p className="transition duration-200 transform hover:text-gray-400">
          Airbnb Luxe
        </p>
      </motion.div>
      <motion.div
        variants={item}
        className="space-y-4 text-xs text-gray-800 "
        whileHover={{ fontSize: "14px" }}
      >
        <h5 className="font-bold">ABOUT</h5>
        <p className="transition duration-200 transform hover:text-gray-400">
          How Airbnb works
        </p>
        <p className="transition duration-200 transform hover:text-gray-400">
          Newsroom
        </p>
        <p className="transition duration-200 transform hover:text-gray-400">
          Investors
        </p>
        <p className="transition duration-200 transform hover:text-gray-400">
          Airbnb Plus
        </p>
        <p className="transition duration-200 transform hover:text-gray-400">
          Airbnb Luxe
        </p>
      </motion.div>
      <motion.div
        variants={item}
        className="space-y-4 text-xs text-gray-800 "
        whileHover={{ fontSize: "14px" }}
      >
        <h5 className="font-bold">ABOUT</h5>
        <p className="transition duration-200 transform hover:text-gray-400">
          How Airbnb works
        </p>
        <p className="transition duration-200 transform hover:text-gray-400">
          Newsroom
        </p>
        <p className="transition duration-200 transform hover:text-gray-400">
          Investors
        </p>
        <p className="transition duration-200 transform hover:text-gray-400">
          Airbnb Plus
        </p>
        <p className="transition duration-200 transform hover:text-gray-400">
          Airbnb Luxe
        </p>
      </motion.div>
    </motion.div>
  );
}

export default Footer;
