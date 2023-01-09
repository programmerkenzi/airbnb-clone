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

  const [onLogin, setOnLogin] = useState(false);

  return (
    <div id="homePage">
      <Head>
        <title>airbnb-clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Headers setOnLogin={setOnLogin} />

      <Banner />

      {onLogin && <Login setOnLogin={setOnLogin} />}

      <main className="w-full px-8 mx-auto sm:px-16 ">
        <motion.section className="pt-6"

        >
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}


            className="pb-5 text-4xl font-semibold"
          >
            Explore Nearby
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}

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
        </motion.section>
        <section>
          <motion.h2

            className="pb-5 text-4xl font-semibold"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Live Anywhere
          </motion.h2>
          <motion.div

            className="flex space-x-3 overflow-scroll scrollbar-hide md:justify-evenly"
          >
            {cardsData?.map(({ img, title }) => (
              <MediumCard key={img} img={img} title={title} variants={item} />
            ))}
          </motion.div>
        </section>
        <motion.div

        >
          <LargeCard
            img="http://links.papareact.com/4cj"
            title="The Greatest Outdoors"
            description="Wishlists created by Airbnb"
            buttonText="Get Inspired"
          />
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch("https://www.jsonkeeper.com/b/4G1G").then(
    (res) => res.json()
  );
  const cardsData = await fetch("https://www.jsonkeeper.com/b/VHHT").then((res) =>
    res.json()
  );

  return {
    props: {
      exploreData,
      cardsData,
    },
  };
}
