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
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.5 } },
};
function Footer({ currentPercent }) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate={currentPercent > 90 ? "show" : false}
      className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600 "
    >
      <motion.div
        variants={item}
        className="space-y-4 text-xs text-gray-800  "
        whileHover={{ fontSize: "14px" }}
      >
        <h5 className="font-bold">ABOUT</h5>
        <p className="transition transform  hover:text-gray-400 duration-200">
          How Airbnb works
        </p>
        <p className="transition transform  hover:text-gray-400 duration-200">
          Newsroom
        </p>
        <p className="transition transform  hover:text-gray-400 duration-200">
          Investors
        </p>
        <p className="transition transform  hover:text-gray-400 duration-200">
          Airbnb Plus
        </p>
        <p className="transition transform  hover:text-gray-400 duration-200">
          Airbnb Luxe
        </p>
      </motion.div>
      <motion.div
        variants={item}
        className="space-y-4 text-xs text-gray-800  "
        whileHover={{ fontSize: "14px" }}
      >
        <h5 className="font-bold">ABOUT</h5>
        <p className="transition transform  hover:text-gray-400 duration-200">
          How Airbnb works
        </p>
        <p className="transition transform  hover:text-gray-400 duration-200">
          Newsroom
        </p>
        <p className="transition transform  hover:text-gray-400 duration-200">
          Investors
        </p>
        <p className="transition transform  hover:text-gray-400 duration-200">
          Airbnb Plus
        </p>
        <p className="transition transform  hover:text-gray-400 duration-200">
          Airbnb Luxe
        </p>
      </motion.div>
      <motion.div
        variants={item}
        className="space-y-4 text-xs text-gray-800  "
        whileHover={{ fontSize: "14px" }}
      >
        <h5 className="font-bold">ABOUT</h5>
        <p className="transition transform  hover:text-gray-400 duration-200">
          How Airbnb works
        </p>
        <p className="transition transform  hover:text-gray-400 duration-200">
          Newsroom
        </p>
        <p className="transition transform  hover:text-gray-400 duration-200">
          Investors
        </p>
        <p className="transition transform  hover:text-gray-400 duration-200">
          Airbnb Plus
        </p>
        <p className="transition transform  hover:text-gray-400 duration-200">
          Airbnb Luxe
        </p>
      </motion.div>
      <motion.div
        variants={item}
        className="space-y-4 text-xs text-gray-800  "
        whileHover={{ fontSize: "14px" }}
      >
        <h5 className="font-bold">ABOUT</h5>
        <p className="transition transform  hover:text-gray-400 duration-200">
          How Airbnb works
        </p>
        <p className="transition transform  hover:text-gray-400 duration-200">
          Newsroom
        </p>
        <p className="transition transform  hover:text-gray-400 duration-200">
          Investors
        </p>
        <p className="transition transform  hover:text-gray-400 duration-200">
          Airbnb Plus
        </p>
        <p className="transition transform  hover:text-gray-400 duration-200">
          Airbnb Luxe
        </p>
      </motion.div>
    </motion.div>
  );
}

export default Footer;
