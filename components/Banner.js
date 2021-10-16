/*
 * @Description:
 * @Author: Kenzi
 * @Date: 2021-08-08 17:08:05
 * @LastEditTime: 2021-08-18 19:37:19
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
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delay: 1,
      delayChildren: 1.5,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};
function Banner() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]"
    >
      <Image
        src="http://links.papareact.com/0fm"
        layout="fill"
        objectFit="cover"
      />
      <motion.div
        variants={item}
        className="absolute top-1/2 w-full text-center"
      >
        <p className="text-sm sm:text-lg">Not sure where to go? Perfect.</p>
        <button className="text-purple-500 bg-white  px-10 py-4 shadow-md rounded-full  font-bold my-3 hover:shadow-xl  active:scale-90 active:shadow-md transition duration-150 ">
          I'm flexible
        </button>
      </motion.div>
    </motion.div>
  );
}

export default Banner;
