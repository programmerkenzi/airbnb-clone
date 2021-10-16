/*
 * @Description:
 * @Author: Kenzi
 * @Date: 2021-08-08 12:42:48
 * @LastEditTime: 2021-08-22 19:08:06
 * @LastEditors: Kenzi
 */
import "tailwindcss/tailwind.css";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import "../styles/global.css";
import ProgressBar from "@badrap/bar-of-progress";
import { Router } from "next/dist/client/router";
import "../firebase";
import store from "../store";
import { Provider } from "react-redux";

const progress = new ProgressBar({
  size: 4,
  color: "#FD5C60",
  className: "z-50",
  delay: 100,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />;
    </Provider>
  );
}

export default MyApp;
