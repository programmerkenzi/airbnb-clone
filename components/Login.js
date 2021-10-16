/*
 * @Description:
 * @Author: Kenzi
 * @Date: 2021-08-20 12:06:47
 * @LastEditTime: 2021-08-24 18:48:13
 * @LastEditors: Kenzi
 */

import { XIcon } from "@heroicons/react/solid";
import { motion } from "framer-motion";
import { auth } from "./../firebase";
import firebase from "firebase";
import { useDispatch } from "react-redux";
import { setIsAuthenticated } from "../slices/userSlice";
import { useRouter } from "next/dist/client/router";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const item = {
  hidden: { y: 600 },
  show: { y: 0, transition: { duration: 2 } },
};

function Login({ setOnLogin }) {
  const dispatch = useDispatch();
  const signInWithGoogle = async () => {
    auth
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;

        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken;
        // The signed-in user info.
        var user = result.user;

        dispatch(setIsAuthenticated(true));
        setOnLogin(false);
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
        dispatch(setIsAuthenticated(false));
      });

    return;
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="fixed z-20 bg-black  bg-opacity-50 inset-0  overflow-hidden flex  flex-col justify-center items-center h-screen w-full "
    >
      <motion.div
        variants={item}
        className=" z-50 w-[500px] relative px-10 py-2 h-[600px] overflow-y-auto  bg-white  rounded shadow-lg  "
      >
        <XIcon
          className="w-5 h-5 absolute right-2  text-gray-500 cursor-pointer hover:text-black transition duration-150"
          onClick={() => setOnLogin(false)}
        />
        <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">
          Log in or sign up
        </h1>

        <hr className="my-6 border-gray-300 w-full" />

        <form className="mt-6" action="#" method="POST">
          <div>
            <label className="block text-gray-700">Email Address</label>
            <input
              type="email"
              name=""
              id=""
              placeholder="Enter Email Address"
              className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
              autofocus
              autocomplete
              required
            />
          </div>

          <div className="mt-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              name=""
              id=""
              placeholder="Enter Password"
              minlength="6"
              className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
            focus:bg-white focus:outline-none"
              required
            />
          </div>

          <div className="text-right mt-2">
            <a
              href="#"
              className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700"
            >
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
          px-4 py-3 mt-6"
          >
            Log In
          </button>
        </form>

        <hr className="my-6 border-gray-300 w-full" />

        <button
          type="button"
          onClick={signInWithGoogle}
          className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300"
        >
          <div className="flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              throwIfNamespace="http://www.w3.org/1999/xlink"
              className="w-6 h-6"
              viewBox="0 0 48 48"
            >
              <defs>
                <path
                  id="a"
                  d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
                />
              </defs>
              <clipPath id="b">
                <use href="#a" overflow="visible" />
              </clipPath>
              <path clip-path="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z" />
              <path
                clip-path="url(#b)"
                fill="#EA4335"
                d="M0 11l17 13 7-6.1L48 14V0H0z"
              />
              <path
                clip-path="url(#b)"
                fill="#34A853"
                d="M0 37l30-23 7.9 1L48 0v48H0z"
              />
              <path
                clip-path="url(#b)"
                fill="#4285F4"
                d="M48 48L17 24l-4-3 35-10z"
              />
            </svg>
            <span className="ml-4">Log in with Google</span>
          </div>
        </button>

        <p className="mt-8">
          Need an account?{" "}
          <a
            href="#"
            className="text-blue-500 hover:text-blue-700 font-semibold"
          >
            Create an account
          </a>
        </p>
      </motion.div>
    </motion.div>
  );
}
export default Login;
