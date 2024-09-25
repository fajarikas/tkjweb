import React from "react";
import { MdWavingHand } from "react-icons/md";
import Profile from "../../../public/assets/image/profile.png";
import Icon from "../../../public/assets/image/icon.png";
import Icon2 from "../../../public/assets/image/icon2.png";
import Icon3 from "../../../public/assets/image/icon3.png";
import Icon4 from "../../../public/assets/image/icon4.png";
import Icon5 from "../../../public/assets/image/icon5.png";
import Icon6 from "../../../public/assets/image/icon6.png";
import Icon7 from "../../../public/assets/image/icon7.png";
import Icon8 from "../../../public/assets/image/icon8.png";
import Icon9 from "../../../public/assets/image/icon9.png";
import Icon10 from "../../../public/assets/image/icon10.png";
import Icon11 from "../../../public/assets/image/icon11.png";
import Icon12 from "../../../public/assets/image/icon12.png";
import Icon13 from "../../../public/assets/image/icon13.png";
import Icon14 from "../../../public/assets/image/icon14.png";
import Icon15 from "../../../public/assets/image/icon15.png";
import Brand from "../../Components/Brand/Brand";

const Home = () => {
  return (
    <div className="block">
      <div className="flex items-center ">
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <p>Supp mate, i’m John!</p>
            <MdWavingHand color="#FFD04D" />
          </div>

          <div className="w-4/12">
            <h1 className="text-4xl font-bold mt-2  text-[#1B3764]">
              UI/UX Designer & Fullstack Developer
            </h1>

            <p>
              I am a full-stack developer who helps individuals and brands
              achieve their goals by designing and building user-centric digital
              products and interactive experiences.
            </p>
          </div>

          <button
            className="bg-gradient-to-r from-[#1B3764] to-[#4AB8B8]
         text-white font-semibold py-2 px-3 rounded-full"
          >
            View More
          </button>
        </div>

        <div className="w-1/4">
          <img src={Profile} alt="" />
        </div>
      </div>

      <div className="mt-12">
        <p className="uppercase font-semibold text-center">
          At agency side, client side or as freelancer
        </p>

        <div className="mt-10 grid grid-cols-3 ">
          <Brand image={Icon} />
          <Brand image={Icon2} />
          <Brand image={Icon3} />
          <Brand image={Icon4} />
          <Brand image={Icon5} />
          <Brand image={Icon6} />
          <Brand image={Icon7} />
          <Brand image={Icon8} />
          <Brand image={Icon9} />
          <Brand image={Icon10} />
          <Brand image={Icon11} />
          <Brand image={Icon12} />
          <Brand image={Icon13} />
          <Brand image={Icon14} />
          <Brand image={Icon15} />
        </div>
      </div>
    </div>
  );
};

export default Home;
