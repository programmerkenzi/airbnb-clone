/*
 * @Description:
 * @Author: Kenzi
 * @Date: 2021-08-18 19:14:08
 * @LastEditTime: 2021-09-05 16:50:43
 * @LastEditors: Kenzi
 */

import { motion, AnimatePresence } from "framer-motion";
import { auth } from "./../firebase";
import { useDispatch } from "react-redux";
import { useRouter } from "next/dist/client/router";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerDirection: 1,
      staggerChildren: 0.1,
    },
  },
};

function dropdown({
  setOnLogin,
  setShowDropdown,
  isAuthenticated,
  showDropdown,
}) {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleClick = () => {
    setShowDropdown(false);
    setOnLogin(true);
  };




  const logout = () => {
    auth
      .signOut()
      .then(() => {
        setShowDropdown(false);
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <AnimatePresence>
      {showDropdown && (
        <motion.ul
          variants={container}
          initial="hidden"
          animate="show"
          exit="hidden"
          className=" space-y-2 md:fixed absolute right-10 top-[80px]  bg-white shadow rounded-md w-auto p-5"
        >
          {!auth.currentUser ? (
            <>
              <li
                onClick={handleClick}
                className="font-semibold cursor-pointer"
              >
                Sign up
              </li>
              <li onClick={handleClick} className="cursor-pointer">
                Login in
              </li>
            </>
          ) : (
            <>
              <li onClick={handleClick} className="cursor-pointer">
                Account
              </li>
              <li onClick={logout} className="font-semibold cursor-pointer">
                Log out
              </li>
            </>
          )}
        </motion.ul>
      )}
    </AnimatePresence>
  );
}

export default dropdown;
