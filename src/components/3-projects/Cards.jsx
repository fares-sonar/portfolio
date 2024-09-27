/* eslint-disable react/prop-types */
import { motion, AnimatePresence } from "framer-motion";
const Cards = ({ arr }) => {
  return (
    <>
      <AnimatePresence>
        {arr.map((item) => {
          return (
            <motion.article
              layout
              initial={{ transform: "scale(0)" }}
              animate={{ transform: "scale(1)" }}
              transition={{ type: "spring", damping: 10, stiffness: 50 }}
              key={item.id}
              className="w-[266px] rounded-md overflow-hidden border-2 border-[rgba(93,188,252,0.3)] transition-all hover:border-blue  hover:scale-105 "
            >
              <img
                className="w-[266px] h-[170px]"
                src={item.image}
                alt="image"
              />
              <div className="py-4 px-2 bg-[linear-gradient(rgba(255,255,255,0.05)),rgba(255,255,255,0.05)]">
                <h2 className="text-title capitalize">{item.title}</h2>
                <p className="text-subtitle text-[.8rem] mb-4 ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                  hic dolorem ea itaque dignissimos perspiciatis!
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex gap-2">
                    <a href={item.live}>
                      <span className="icon-link text-[1.2rem] text-subtitle transition-all hover:text-title" />
                    </a>
                    <a href={item.git}>
                      <span className="icon-github text-[1.2rem] text-subtitle transition-all hover:text-title" />
                    </a>
                  </div>
                  <a className="flex text-[.9rem] text-blue " href="#">
                    more <span className="icon-arrow-right self-center" />
                  </a>
                </div>
              </div>
            </motion.article>
          );
        })}
      </AnimatePresence>
    </>
  );
};

export default Cards;
