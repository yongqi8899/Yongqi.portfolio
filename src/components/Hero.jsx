import { Link } from "react-router-dom";

import { styles } from "../styles";
import ComMe from "./ComMe";

import { bio } from "@/constants";
import Typewriter from "typewriter-effect";
import { fadeIn } from "../utils/motion";
import { rotation } from "@/assets";

const Hero = () => {
  return (
    <section
      className={`flex flex-col items-center  md:flex-row w-full min-h-screen  m-auto md:justify-evenly md:items-center `}
    >
      <div
        className={`flex flex-col items-center md:items-start justify-center h-auto ${styles.paddingX} w-full m-auto pt-[5rem] md:mt-0`}
      >
        <h1 className={`${styles.heroHeadText} text-white z-5`}>
          <span>Hi, {bio.iAm} </span>{" "}
          <span className="text-[#915EFF]">Yongqi</span>
        </h1>
        <div className="flex text-3xl">
          {bio.iAm}&nbsp;
          <span className="text-[#915EFF]">
            <Typewriter
              options={{
                strings: bio.roles,
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </div>
        {bio.description.map((des) => {
          return (
            <p
              variants={fadeIn("", "", 0.1, 1)}
              className="mt-4 text-secondary max-w-3xl leading-[1.5rem]"
              key={des}
            >
              {des}
            </p>
          );
        })}
        <div className="mt-10 ">
          <Link
            to="https://drive.google.com/file/d/1DRkqJ35iyo1SqRqOl1Ci6GgiSG4_fZod/view?usp=drive_link"
            target="_blank"
            className="px-6 py-2 text-lg font-bold border border-violet-500 violet-gradient rounded-xl hover:bg-blue-400"
          >
            My CV
          </Link>
        </div>
      </div>
      <div className="relative z-20 flex flex-col w-full h-screen">
        <div className="min-w-[400px] min-h-[400px] h-full touch-auto">
          <ComMe />
        </div>
        <div className="absolute top-20 left-10 z-1 h-2rem">
          <img src={rotation} alt="rotation"></img>
        </div>
      </div>
    </section>
  );
};

export default Hero;
