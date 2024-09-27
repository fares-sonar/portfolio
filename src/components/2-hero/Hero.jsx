/* eslint-disable react/no-unescaped-entities */
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Typewriter } from 'react-simple-typewriter'

import { useEffect, useState } from "react";

export default function Hero() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 150 ? setScroll(true) : setScroll(false);
    });
  }, [scroll]);

  return (
    <section id="hero" className="flex items-start mt-12 px-9">
      <div className="flex-1">
        <figure className="flex items-end gap-2">
          <img
            className="w-[88px] border border-orange-300 border-opacity-60 rounded-full"
            src="./fares.png"
            alt="avatar"
          />
          <span className="icon-verified text-blue"></span>
        </figure>

        <h1 className="text-[2.85rem] font-semibold text-title leading-relaxed my-6 capitalize">
          I'm fares mohamed,<br />
          <Typewriter  
            words={['frontend developer','react developer']}
            loop
            cursor
            typeSpeed={150}
            deleteSpeed={100}
          />
        </h1>
        <p className="text-subtitle text-[.9rem] leading-[1.65rem] mb-[32px]]">
        I'm a front-end developer, specializing in creating dynamic websites tailored to small, medium, and big-sized enterprises' unique needs. Whether you're seeking to elevate your online presence, showcase your expertise, or establish a robust e-commerce platform, I'm dedicated to bringing your digital vision to fruition.

        </p>

        <div className="flex gap-6 text-[1.3rem] my-8 text-subtitle transition-all ">
          <a className="hover:text-iconHover" href="#">
            <span className="icon-twitter"></span>
          </a>
          <a
            className="hover:text-iconHover"
            href="https://www.instagram.com/fares__sonar/"
          >
            <span className="icon-instagram"></span>
          </a>
          <a
            className="hover:text-iconHover"
            href="https://www.linkedin.com/in/fares-sonar/"
          >
            <span className="icon-github"></span>
          </a>
          <a
            className="hover:text-iconHover"
            href="https://www.linkedin.com/in/fares-sonar/"
          >
            <span className="icon-linkedin"></span>
          </a>
        </div>
      </div>
      <div className="hidden lg:flex flex-1  items-center ">
        <DotLottieReact
          className="object-contain h-[400px] "
          loop
          autoplay
          src="./animation/Animation.json"
        />
      </div>

      <a
        href="#up"
        className={` ${scroll ? "opacity-100" : "opacity-0"} transition-all`}
      >
        <button
          className={` icon-arrow-up fixed text-center bottom-8 right-[3%] w-12 h-12 rounded-full text-[1.2rem] bg-blue `}
        ></button>
      </a>
    </section>
  );
}
