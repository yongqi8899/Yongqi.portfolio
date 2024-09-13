import { Link } from "react-router-dom";

import { styles } from "../styles";
import ComMe from "./ComMe";

import { bio } from "@/constants";
import Typewriter from "typewriter-effect";
import { fadeIn } from "../utils/motion";

const Hero = () => {
  return (
    <section
      className={`flex flex-col items-center  md:flex-row w-full h-screen  m-auto md:justify-evenly md:items-center `}
    >
      <div
        className={`flex flex-col items-center md:items-start md:justify-center md:h-screen h-1/2 ${styles.paddingX} w-full m-auto mt-[5rem] md:mt-0`}
      >
        <h1 className={`${styles.heroHeadText} text-white`}>
          Hi, {bio.iAm} <span className="text-[#915EFF]">Yongqi</span>
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
            >
              {des}
            </p>
          );
        })}
        <div className="mt-10 ">
          <Link
            to="https://drive.google.com/file/d/164t4dXwmEOrEOInZ2UH_yI_gPy7otgui/view?usp=sharing"
            target="_blank"
            className="px-6 py-2 text-lg font-bold border border-violet-500 violet-gradient rounded-xl hover:bg-blue-400"
          >
            My CV
          </Link>
        </div>
      </div>
      <div className="flex w-full md:h-screen  h-1/2 min-h-[38rem] min-w-[40rem] md:min-h-[60rem]">
        <ComMe />
      </div>
    </section>
  );
};

export default Hero;
