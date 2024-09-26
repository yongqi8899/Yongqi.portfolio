import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { StarsCanvas, EarthCanvas } from "./canvas";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { RxLinkedinLogo } from "react-icons/rx";

const Contact = () => {
  return (
    <>
      <div className={`xl:mt-12 flex xl:flex-row gap-10 overflow-hidden`}>
        <div className="flex flex-col w-full p-8">
          <div className="flex flex-col justify-between md:flex-row">
            <div>
              <div className="flex flex-col w-full">
                <p className={styles.sectionSubText}>Get in touch</p>
                <h3 className={styles.sectionHeadText}>Contact.</h3>
              </div>
              <address>
                <a href="mailto:yz.zhang.de@gmail.com" target="_blank">
                  <div className="flex items-center gap-3 ">
                    <MdEmail /> yz.zhang.de@gmail.com
                  </div>
                </a>
                <br />
                <a href="tel:015254301796" target="_blank">
                  {" "}
                  <div className="flex items-center gap-3 ">
                    <BsFillTelephoneFill />
                    015254301796
                  </div>
                </a>
              </address>
              <a href="https://github.com/yongqi8899" target="_blank">
                {" "}
                <div className="flex items-center gap-3 mt-5">
                  <BsGithub />
                  https://github.com/yongqi8899
                </div>
              </a>
              <a href="https://www.linkedin.com/in/yongqi-zhang/" target="_blank">
                {" "}
                <div className="flex items-center gap-3 mt-5">
                  <RxLinkedinLogo />
                  https://www.linkedin.com/in/yongqi-zhang/
                </div>
              </a>
            </div>
            <EarthCanvas />
          </div>
        </div>
      </div>
      <StarsCanvas />
    </>
  );
};

export default SectionWrapper(Contact, "contact");
