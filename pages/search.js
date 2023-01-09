/*
 * @Description:
 * @Author: Kenzi
 * @Date: 2021-08-11 19:24:56
 * @LastEditTime: 2021-08-18 19:03:07
 * @LastEditors: Kenzi
 */
import Headers from "./../components/Headers";
import Footer from "./../components/Footer";
import { useRouter } from "next/dist/client/router";
import { format } from "date-fns";
import InfoCard from "../components/InfoCard";
import Map from "./../components/Map";
import { motion } from "framer-motion";

//animations
const infoContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delay: 1.5,
      staggerDirection: 1,
      staggerChildren: 0.5,
    },
  },
};

const InfoItem = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 1 } },
};

const filterContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delay: 1,
      staggerDirection: 1,
      staggerChildren: 0.1,
    },
  },
};

const filterItem = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 1 } },
};

function Search({ searchResults }) {
  const router = useRouter();
  const { location, startDate, endDate, noOfGuests } = router.query;
  const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <div>
      <Headers placeholder={`${location} | ${range} | ${noOfGuests}`} />
      <main className="flex">
        <section className="flex-grow px-6 pt-14">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            300+ Stays - {range} for {noOfGuests} guests
          </motion.p>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-3xl font-semibold"
          >
            {location}
          </motion.h1>

          <motion.div
            variants={filterContainer}
            initial="hidden"
            animate="show"
            className="hidden mb-5 space-x-3 text-gray-800 lg:inline-flex whitespace-nowrap "
          >
            <motion.p variants={filterItem} className="button">
              Cancellation Flexibility
            </motion.p>
            <motion.p variants={filterItem} className="button">
              Type of place
            </motion.p>
            <motion.p variants={filterItem} className="button">
              Rooms and Beds
            </motion.p>
          </motion.div>

          <motion.div
            variants={infoContainer}
            initial="hidden"
            animate="show"
            className="flex flex-col"
          >
            {searchResults?.map(
              ({ img, location, title, description, star, price, total }) => (
                <InfoCard
                  key={img}
                  img={img}
                  location={location}
                  title={title}
                  description={description}
                  star={star}
                  price={price}
                  total={total}
                  variants={InfoItem}
                />
              )
            )}
          </motion.div>
        </section>
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="hidden xl:inline-flex xl:min-w-[600px]"
        >
          <Map searchResults={searchResults} />
        </motion.section>
      </main>
      <Footer />
    </div>
  );
}

export default Search;

export async function getServerSideProps() {
  const searchResults = await fetch("https://www.jsonkeeper.com/b/5NPS").then(
    (res) => res.json()
  );
  return {
    props: {
      searchResults,
    },
  };
}
