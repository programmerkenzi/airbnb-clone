/*
 * @Description: 
 * @Author: Kenzi
 * @Date: 2021-08-08 12:42:48
 * @LastEditTime: 2021-08-11 20:56:41
 * @LastEditors: Kenzi
 */
import 'tailwindcss/tailwind.css'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import '../styles/global.css';
import ProgressBar from "@badrap/bar-of-progress";
import { Router } from 'next/dist/client/router';

const progress = new ProgressBar({
  size: 4,
  color:"#FD5C60",
  className:"z-50",
  delay:100,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
