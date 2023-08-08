import React from "react";
import Container from "./Container";
import Image from "next/image";
import appStore from "@/images/appstore.png";
import googlePlay from "@/images/googleplay.png";
import BackgroundDesign from "./BackgroundDesign";
import suuto from "@/images/suuto.svg";
import bankCharge from "@/images/bank-charge.png";
import cashCharge from "@/images/cash-charge.png";
import chargeOption from "@/images/charge-option.png";
import earnPoints from "@/images/earn-points.png";
import smartPhone from "@/images/smart-phone.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="overflow-hidden py-20 sm:py-32 lg:pb-32 xl:pb-36"
    >
      <Container>
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-10">
          <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
            <Image src={suuto} alt="" />
            <p className="mt-6 text-3xl text-gray-600">
              全国のTRIALで使える決済アプリ
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-4">
              <Image className="w-auto h-12" src={appStore} alt="appStore" />
              <Image
                className="w-auto h-12"
                src={googlePlay}
                alt="googlePlay"
              />
            </div>
          </div>
          <div className="relative mt-10 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6">
            <BackgroundDesign className="absolute left-1/2 top-4 h-[1026px] w-[1026px] -translate-x-1/3 stroke-gray-300/70 [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)] sm:top-16 sm:-translate-x-1/2 lg:-top-16 lg:ml-12 xl:-top-14 xl:ml-0" />
            <div className="-mx-4 h-[448px] px-9 [mask-image:linear-gradient(to_bottom,white_60%,transparent)] sm:mx-0 lg:absolute lg:-inset-x-10 lg:-bottom-20 lg:-top-10 lg:h-auto lg:px-0 lg:pt-10 xl:-bottom-32">
              <Image
                src={smartPhone}
                alt="smartPhone"
                className="max-w-[366px] mx-auto"
              />
            </div>
          </div>
          <div className="relative -mt-4 lg:col-span-7 lg:mt-0 xl:col-span-6">
            <p className="text-center text-sm font-semibold text-gray-900 lg:text-left">
              As featured in
            </p>
            <ul
              role="list"
              className="mx-auto mt-8 flex max-w-xl flex-wrap justify-center items-center gap-x-10 gap-y-8 lg:mx-0"
            >
              <li>
                <Image
                  src={earnPoints}
                  alt="earnPoints"
                  className="w-20 h-auto"
                  unoptimized
                />
              </li>
              <li>
                <Image
                  src={bankCharge}
                  alt="cashCharge"
                  className="w-20 h-auto"
                  unoptimized
                />
              </li>
              <li>
                <Image
                  src={cashCharge}
                  alt="cashCharge"
                  className="w-20 h-auto"
                  unoptimized
                />
              </li>
              <li>
                <Image
                  src={chargeOption}
                  alt="chargeOption"
                  className="w-20 h-auto"
                  unoptimized
                />
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
