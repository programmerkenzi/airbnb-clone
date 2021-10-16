/*
 * @Description:
 * @Author: Kenzi
 * @Date: 2021-08-08 12:42:48
 * @LastEditTime: 2021-08-24 18:34:55
 * @LastEditors: Kenzi
 */
import Head from "next/head";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Headers from "../components/Headers";
import LargeCard from "../components/LargeCard";
import MediumCard from "../components/MediumCard";
import SmallCard from "../components/SmallCard";
import { useRef, useEffect, useState } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import Login from "../components/Login";
import { auth } from "./../firebase";
import { useDispatch } from "react-redux";
import { setIsAuthenticated } from "../slices/userSlice";

//animations
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

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.5 } },
};

export default function Home({ exploreData, cardsData }) {
  const dispatch = useDispatch();
  const ref = useRef();
  const { scrollYProgress } = useViewportScroll(ref);

  const yRange = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const [currentPercent, setCurrentPercent] = useState(0);

  useEffect(() => {
    yRange.onChange((v) => {
      setCurrentPercent(Math.trunc(yRange.current));
    });
  }, [yRange]);

  useEffect(() => {
    //刷新前保留目前scrollYProgress
    window.onbeforeunload = function (event) {
      localStorage.setItem("scrollYProgress", currentPercent);
    };

    //設定初始scrollYProgress
    const lastScrollYProgress = localStorage.getItem("scrollYProgress");
    setCurrentPercent(lastScrollYProgress);

    const user = auth.currentUser;
    console.log("user :>> ", user);

    if (user) {
      dispatch(setIsAuthenticated(true));
    } else {
      dispatch(setIsAuthenticated(false));
    }
  }, []);

  const [onLogin, setOnLogin] = useState(false);

  return (
    <div id="homePage" ref={ref}>
      <Head>
        <title>airbnb-clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Headers setOnLogin={setOnLogin} />

      <Banner />

      {onLogin && <Login setOnLogin={setOnLogin} />}

      <main className="w-full mx-auto px-8 sm:px-16 ">
        <section className="pt-6">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={currentPercent > 15 ? { opacity: 1 } : false}
            transition={{ ease: "easeIn", duration: 1 }}
            className="text-4xl font-semibold pb-5"
          >
            Explore Nearby
          </motion.h2>
          <motion.div
            variants={container}
            initial="hidden"
            animate={currentPercent > 20 ? "show" : false}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            {exploreData?.map(({ img, distance, location }, index) => (
              <SmallCard
                key={img}
                img={img}
                variants={item}
                distance={distance}
                location={location}
                index={index}
              />
            ))}
          </motion.div>
        </section>
        <section>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={currentPercent > 25 ? { opacity: 1 } : false}
            transition={{ ease: "easeIn", duration: 1 }}
            className="text-4xl font-semibold pb-5"
            className="text-4xl font-semibold py-8"
          >
            Live Anywhere
          </motion.h2>
          <motion.div
            variants={container}
            initial="hidden"
            animate={currentPercent > 30 ? "show" : false}
            className="flex space-x-3  overflow-scroll scrollbar-hide  md:justify-evenly"
          >
            {cardsData?.map(({ img, title }) => (
              <MediumCard key={img} img={img} title={title} variants={item} />
            ))}
          </motion.div>
        </section>
        <motion.div
          initial={{ opacity: 0 }}
          animate={currentPercent > 60 ? { opacity: 1 } : false}
          transition={{ ease: "easeIn", duration: 1 }}
        >
          <LargeCard
            img="http://links.papareact.com/4cj"
            title="The Greatest Outdoors"
            description="Wishlists created by Airbnb"
            buttonText="Get Inspired"
          />
        </motion.div>
      </main>

      <Footer currentPercent={currentPercent} />
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch("https://links.papareact.com/pyp").then(
    (res) => res.json()
  );
  const cardsData = await fetch("https://links.papareact.com/zp1").then((res) =>
    res.json()
  );

  return {
    props: {
      exploreData,
      cardsData,
    },
  };
}
