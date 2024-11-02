"use client";

/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Script from "next/script";
import { Accordion, AccordionItem } from "./_components/accordian";
import MetaPixel from "./_components/meta-pixel";

import Steps from "../assets/steps.png";

export default function Home() {
  return (
    <>
      <MetaPixel />
      <main className="overflow-x-hidden text-white bg-black">
        <header className="flex flex-col items-center justify-center py-3 mb-4 space-y-2 customContainer">
          <img
            src={"/assets/brand_name.png"}
            alt="logo"
            className="h-[30px] md:h-[56px] md:w-[112px]"
          />

          <hr className="bg-gradient-to-r h-0.5 w-full from-black from-0.5%  border-none via-redPrimary mt-4 to-black" />
        </header>

        <section className="space-y-6 md:my-10 customTransition customContainer">
          <div className="text-center">
            {/* <h3 className="font-oswald font-normal customTransition text-xs md:text-[25px]">
            Earn Passive Income on YouTube Without Lifting a Finger
          </h3> */}
            <h1 className="font-assistant customTransition font-extrabold text-[16px] md:text-[50px] uppercase">
              {/* Step-By-Step Secrets */}
              60 Days to your
            </h1>
            <h1 className="font-assistant uppercase font-black customTransition text-[18px] md:text-[50px] text-redPrimary -mt-[0.5rem] md:-mt-[1.4rem]">
              {/* “online income system” */}
              “first youtube pay-check”
            </h1>
            <h3 className="font-oswald font-normal customTransition text-xs md:text-[25px]">
              The automation Advantage
            </h3>
          </div>

          <div className="lg:max-w-[1200px] customTransition mx-auto h-[180px] sm:h-[260px] md:h-[400px] lg:h-[600px] relative rounded-md">
            <iframe
              className="absolute z-10 w-full h-full"
              src="https://www.youtube.com/embed/nxJxpHri_C4?si=lbdim9q4jAaR6fIo&amp;controls=0&amp;autoplay=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>

            <img
              src="/assets/rocket-man.png"
              alt="rocket-man"
              className="absolute -right-48 z-1 hidden md:block rotate-[-10deg]"
            />
          </div>
        </section>

        <div className="flex flex-col items-center gap-4 my-6 mx-[2.5rem] md:mx-4 md:my-10">
          <button className="font-assistant font-extrabold md:text-[36px] bg-gradient-to-r from-[#ff2800] to-[#961800] customTransition w-full md:w-fit px-8 md:px-20 rounded-lg uppercase py-2">
            <a href="#book">YES! BOOK My FREE SLOT</a>
          </button>

          <p className="font-light text-center md:text-base customTransition font-oswald text-[12px] mt-[-0.5rem] md:mt-auto ">
            Limited seats only , So Book Your Slot Before They Run Out
          </p>
        </div>

        <section className="mx-8 md:mx-0">
          <hr className="bg-gradient-to-r h-0.5 w-full from-black from-0.5%  border-none via-redPrimary mt-4 to-black" />

          <div className="flex flex-row items-center justify-center gap-6 px-4 py-4 customTransition md:gap-10 lg:gap-32">
            {firstSection.map((i) => (
              <div key={i} className="flex items-center gap-2">
                <img
                  src={"/assets/double_tick.svg"}
                  alt="point"
                  className="size-[14px] md:size-[36px]"
                />

                <p className="font-oswald text-[8px] text-nowrap md:text-[20px] lg:text-[25px] customTransition">
                  {i}
                </p>
              </div>
            ))}
          </div>

          <hr className="bg-gradient-to-r h-0.5 w-full from-black from-0.5%  border-none via-redPrimary to-black" />
        </section>

        <section className="flex flex-col items-center gap-8 mt-8 md:mt-14 customContainer">
          <h1 className="uppercase font-oswald font-bold text-[20px] md:text-[42px] text-redPrimary text-center customTransition">
            Discover the Secret to YouTube Profits
          </h1>

          <p className="font-oswald customTransition font-semibold text-[16px] md:text-[35px] uppercase text-center">
            Tired of wasting time and effort on a YouTube channel that {`isn't`}{" "}
            performing? Our expert team can help you avoid common mistakes and
            accelerate your growth
          </p>

          <div className="md:px-8 px-4 py-2 customTransition bg-white text-center uppercase text-black font-medium font-oswald text-sm md:text-[30px] w-fit rounded-[2px]">
            {`Here's`} a glimpse of the value{" "}
            <span className="text-redPrimary">{`you'll`} gain:</span>
          </div>

          <div className="space-y-3">
            {glimps.map((i, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <img
                  src={"/assets/rocket_icon.png"}
                  alt="point"
                  className="size-[24px] md:size-[36px] mt-1.5 md:mt-3"
                />
                <div>
                  <h1 className="font-oswald font-bold customTransition text-[18px] md:text-[35px] text-redPrimary">
                    {i.title}
                  </h1>
                  <p className="font-oswald font-normal customTransition text-[12px] md:text-[25px]">
                    {i.message}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-[30px] customTransition md:mt-[60px] customContainer">
          <div className="font-oswald font-normal customTransition text-[14px] md:text-[30px] max-w-3xl mx-auto">
            <h1>YOUR JOURNEY WITH US... </h1>
            <h1>INSIDER LOOK AT YOUR JOURNEY EACH MONTH WORKING WITH US</h1>
          </div>

          <div className="relative customTransition h-[600px] md:h-[1302px] w-[300px] md:w-[748px] mx-auto">
            <Image src={Steps} alt="step" fill />
          </div>

          <div className="flex flex-col items-center gap-4 my-6 md:mx-4 md:my-10">
            <button className="font-assistant font-extrabold md:text-[36px] bg-gradient-to-r from-[#ff2800] to-[#961800] customTransition w-full md:w-fit px-6 md:px-20 rounded-lg uppercase py-2">
              <a href="#book">YES! BOOK My FREE SLOT</a>
            </button>

            <p className="font-light text-[12px] text-center md:text-base customTransition font-oswald mt-[-0.5rem] md:mt-auto ">
              Limited seats only , So Book Your Slot Before They Run Out
            </p>
          </div>

          <div className="w-fit mx-auto mt-10 max-w-3xl space-y-6 text-[30px]">
            <div className="flex items-start gap-4">
              <img
                src={"/assets/rocket_icon.png"}
                alt="point"
                className="size-[24px] md:size-[36px] mt-1.5 md:mt-2"
              />

              <div>
                <h1 className="text-sm font-bold font-oswald customTransition md:text-3xl">
                  Dear Aspiring online entrepreneur,
                </h1>
                <p className="text-sm font-light font-oswald md:mt-4 md:leading-10 customTransition md:text-3xl">
                  Are you ready to{" "}
                  <b className="font-medium tracking-wide">
                    unlock the earning potential of YouTube automation?
                  </b>
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <img
                src={"/assets/rocket_icon.png"}
                alt="point"
                className="size-[24px] md:size-[36px] mt-1.5 md:mt-2"
              />
              <div>
                <p className="text-sm font-light font-oswald md:leading-10 md:text-3xl">
                  With our expert guidance, you can{" "}
                  <b className="font-medium tracking-wide">
                    {" "}
                    make your first paycheck online in just 60 days.{" "}
                  </b>{" "}
                  No experience necessary
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <img
                src={"/assets/rocket_icon.png"}
                alt="point"
                className="size-[24px] md:size-[36px] mt-1.5 md:mt-2"
              />
              <div>
                <p className="text-sm font-light font-oswald md:text-3xl md:leading-10 customTransition">
                  <b className="font-medium">Our proven strategies</b> have
                  helped countless clients{" "}
                  <b className="font-medium">generate millions of dollars</b>{" "}
                  from their YouTube channels
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto mt-10 customTransition md:mt-20">
            <h1 className="font-oswald customTransition text-[20px] md:text-[30px]">
              <b>
                {" "}
                Ready to start your journey towards financial freedom? Contact
                us today
              </b>{" "}
              for a free consultation
            </h1>
          </div>
        </section>

        <section className="bg-white md:p-4 min-h-[50vh] mt-10 customTransition md:mt-20 py-8 pb-3.5">
          <div className="customContainer !max-w-[85%] lg:!max-w-[40%]">
            <div>
              <div>
                <h1 className="font-bold customTransition text-[24px] md:text-[45px]  font-oswald text-redPrimary text-center uppercase">
                  Our Services Include:
                </h1>
                <hr className="bg-gradient-to-r h-0.5 w-full from-white from-0.5%  border-none via-redPrimary mt-4 to-white" />
              </div>

              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4 leading-8 tracking-wide md:pr-[10rem]">
                  <img
                    src={"/assets/rocket_icon.png"}
                    alt="point"
                    className="size-[24px] md:size-[30px] mt-2 md:mt-0"
                  />

                  <div className="md:space-y-4">
                    <h1 className="font-oswald font-bold customTransition text-lg md:text-[35px] text-redPrimary">
                      Strategic Channel Setup:{" "}
                    </h1>
                    <p className="font-oswald font-normal customTransition text-sm md:text-[25px] text-black md:leading-8">
                      We ensure your channel is aligned with your niche and
                      target audience.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 leading-8 tracking-wide md:pr-[10rem]">
                  <img
                    src={"/assets/rocket_icon.png"}
                    alt="point"
                    className="size-[24px] md:size-[30px] mt-2 md:mt-0"
                  />
                  <div className="md:space-y-4">
                    <h1 className="font-oswald font-bold customTransition text-lg md:text-[35px] text-redPrimary">
                      Expert Branding:
                    </h1>
                    <p className="font-oswald font-normal customTransition text-sm md:text-[25px] text-black md:leading-8">
                      Our designers create a professional and memorable brand
                      identity.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 leading-8 tracking-wide md:pr-[10rem]">
                  <img
                    src={"/assets/rocket_icon.png"}
                    alt="point"
                    className="size-[24px] md:size-[30px] mt-2 md:mt-0"
                  />
                  <div className="md:space-y-4">
                    <h1 className="font-oswald font-bold customTransition text-lg md:text-[35px] text-redPrimary">
                      SEO Optimization:
                    </h1>
                    <p className="font-oswald font-normal customTransition text-sm md:text-[25px] text-black md:leading-8">
                      We optimize your videos for search engines to increase
                      visibility.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 leading-8 tracking-wide md:pr-[10rem]">
                  <img
                    src={"/assets/rocket_icon.png"}
                    alt="point"
                    className="size-[24px] md:size-[30px] mt-2 md:mt-0"
                  />
                  <div className="md:space-y-4">
                    <h1 className="font-oswald font-bold customTransition text-lg md:text-[35px] text-redPrimary">
                      Engaging Content:
                    </h1>
                    <p className="font-oswald font-normal customTransition text-sm md:text-[25px] text-black md:leading-8">
                      Our skilled creators produce high-quality, viral-prone{" "}
                      videos.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 leading-8 tracking-wide md:pr-[10rem]">
                  <img
                    src={"/assets/rocket_icon.png"}
                    alt="point"
                    className="size-[24px] md:size-[30px] mt-2 md:mt-0"
                  />
                  <div className="md:space-y-4">
                    <h1 className="font-oswald font-bold customTransition text-lg md:text-[35px] text-redPrimary">
                      Data-Driven Insights:
                    </h1>
                    <p className="font-oswald font-normal customTransition text-sm md:text-[25px] text-black md:leading-8">
                      We use analytics to track performance and make data-driven
                      decisions
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <div>
                <h1 className="font-bold customTransition text-[24px] md:text-[45px] font-oswald text-redPrimary text-center uppercase">
                  Why You Choose Us ?
                </h1>
                <hr className="bg-gradient-to-r h-0.5 w-full from-white from-0.5%  border-none via-redPrimary mt-4 to-white" />
              </div>

              <div className="mt-8 space-y-4 md:space-y-8 customTransition md:pl-12 md:pb-8">
                {chooses.map((i, idx) => (
                  <div
                    key={idx}
                    className="space-y-1  md:space-y-6 md:pr-[10rem]"
                  >
                    <h1 className="font-oswald font-bold customTransition text-lg md:text-[35px] text-redPrimary">
                      {i.title}
                    </h1>
                    <p className="font-oswald leading-6 md:leading-8 font-normal md:text-[25px] text-sm text-black">
                      {i.message}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 mx-8 my-6 md:mx-4 md:my-10">
            <button className="font-assistant font-extrabold md:text-[36px] bg-gradient-to-r from-[#ff2800] to-[#961800] customTransition w-full md:w-fit px-6 md:px-20 rounded-lg uppercase py-2">
              <a href="#book">YES! BOOK My FREE SLOT</a>
            </button>

            <p className="text-[12px] font-light text-center text-black md:text-base customTransition font-oswald mt-[-0.5rem] md:mt-auto ">
              Limited seats only , So Book Your Slot Before They Run Out
            </p>
          </div>
        </section>

        <section className="md:mt-20 mt-10 customContainer lg:!max-w-[50%] pb-[1.5rem] customTransition md:pb-[2.5rem] md:space-y-16">
          <div>
            <div>
              <h1 className="font-bold md:text-[45px] customTransition font-oswald text-redPrimary text-center uppercase">
                How does this work ?
              </h1>
              <hr className="bg-gradient-to-r h-0.5 w-full from-black from-0.5%  border-none via-white mt-4 to-black" />
            </div>

            <div className="space-y-4 tracking-wide md:space-y-8 mt-7 md:mt-14 customTransition">
              {works.map((i, idx) => (
                <div key={idx}>
                  <h1 className="font-oswald font-bold customTransition text-lg md:text-[35px] text-redPrimary">
                    {i.title}
                  </h1>
                  <p className="font-oswald  md:mt-4 md:leading-8 font-normal customTransition text-sm md:text-[25px] text-white">
                    {i.message}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 my-6 md:mx-4 md:my-10 pt-[1.5rem]">
            <button className="font-assistant font-extrabold md:text-[36px] bg-gradient-to-r from-[#ff2800] to-[#961800] customTransition w-full md:w-fit px-8 md:px-20 rounded-lg uppercase py-2">
              <a href="#book">YES! BOOK My FREE SLOT</a>
            </button>
            <p className="text-[12px] font-light text-center md:text-base customTransition font-oswald mt-[-0.5rem] md:mt-auto ">
              Limited seats only , So Book Your Slot Before They Run Out
            </p>
          </div>

          <div className="mt-10 md:space-y-14 ">
            <div>
              <h1 className="font-bold  customTransition md:text-[45px] font-oswald text-redPrimary text-center uppercase">
                frequently asked questions
              </h1>
              <hr className="bg-gradient-to-r h-0.5 w-full from-black from-0.5%  border-none via-white mt-6 to-black " />
            </div>

            <Accordion items={accordianItems} />
          </div>

          <div className="flex flex-col items-center gap-4 my-6 md:mx-4 md:my-10 pt-[1.5rem]">
            <button className="font-assistant font-extrabold md:text-[36px] bg-gradient-to-r from-[#ff2800] to-[#961800] customTransition w-full md:w-fit px-8 md:px-20 rounded-lg uppercase py-2">
              <a href="#book">YES! BOOK My FREE SLOT</a>
            </button>
            <p className="text-[12px] font-light text-center md:text-base customTransition font-oswald mt-[-0.5rem] md:mt-auto ">
              Limited seats only , So Book Your Slot Before They Run Out
            </p>
          </div>
        </section>

        <section className="pb-10 md:mt-8 md:pb-20 customContainer">
          <div>
            <h1 className="font-bold customTransition text-lg md:text-[45px] font-oswald text-redPrimary text-center uppercase">
              niches / Examples
            </h1>

            <hr className="bg-gradient-to-r h-0.5 w-full from-black from-0.5%  border-none via-white mt-6 md:mt-8 to-black" />
          </div>

          <div className="mt-[42px] md:mt-[84px] flex flex-col items-center">
            <div className="relative -rotate-[1deg] w-full">
              <div className="lg:max-w-[900px] customTransition mx-auto h-[150px] sm:h-[300px] md:h-[400px] lg:h-[500px] relative rounded-2xl overflow-hidden">
                <img
                  src="/assets/yt_1.png"
                  alt="yt"
                  className="object-contain size-full"
                />
              </div>

              <div className="bg-[#840000] font-medium font-oswald text-[14px] md:text-[20px] w-fit text-nowrap px-8 py-2 absolute -bottom-8 md:-bottom-10 right-1/2 left-1/2 -translate-x-[55%] rounded-[2px] -rotate-[1deg] text-center uppercase">
                1. Luxury
              </div>
            </div>

            <hr className="w-0.5 h-28 md:h-40 z-2 bg-white" />

            <div className="relative rotate-[1deg] w-full">
              <div className="lg:max-w-[900px] customTransition mx-auto h-[150px] sm:h-[300px] md:h-[400px] lg:h-[500px] relative rounded-2xl overflow-hidden">
                <img
                  src="/assets/yt_2.png"
                  alt="yt"
                  className="object-contain size-full"
                />
              </div>

              <div className="bg-[#840000] font-medium font-oswald text-[14px] md:text-[20px] w-fit text-nowrap px-8 py-2 absolute -bottom-8 md:-bottom-10 right-1/2 left-1/2 -translate-x-[48%] rounded-[2px] rotate-[1deg] text-center uppercase">
                2. Cars/Tech
              </div>
            </div>

            <hr className="w-0.5 h-28 md:h-40 z-2 bg-white" />

            <div className="relative -rotate-[1deg] w-full">
              <div className="lg:max-w-[900px] customTransition mx-auto h-[150px] sm:h-[300px] md:h-[400px] lg:h-[500px] relative rounded-2xl overflow-hidden">
                <img
                  src="/assets/yt_3.png"
                  alt="yt"
                  className="object-contain size-full"
                />
              </div>

              <div className="bg-[#840000] font-medium font-oswald text-[14px] md:text-[20px] w-fit px-8 py-2 absolute -bottom-8 md:-bottom-10 right-1/2 left-1/2 -translate-x-[55%] rounded-[2px] -rotate-[1deg] text-center uppercase text-nowrap">
                3. Crime Stories
              </div>
            </div>

            <hr className="w-0.5 h-28 md:h-40 z-2 bg-white" />

            <div className="relative rotate-[1deg] w-full">
              <div className="lg:max-w-[900px] customTransition mx-auto h-[150px] sm:h-[300px] md:h-[400px] lg:h-[500px] relative rounded-2xl overflow-hidden">
                <img
                  src="/assets/yt_4.png"
                  alt="yt"
                  className="object-contain size-full"
                />
              </div>

              <div className="bg-[#840000] font-medium font-oswald text-[14px] md:text-[20px] w-fit text-nowrap px-8 py-2 absolute -bottom-8 md:-bottom-10 right-1/2 left-1/2 -translate-x-[48%] rounded-[2px] rotate-[1deg] text-center uppercase">
                4. Finance/Crypto
              </div>
            </div>

            <hr className="w-0.5 h-28 md:h-40 z-2 bg-white" />

            <div className="relative -rotate-[1deg] w-full">
              <div className="lg:max-w-[900px] customTransition mx-auto h-[150px] sm:h-[300px] md:h-[400px] lg:h-[500px] relative rounded-2xl overflow-hidden">
                <img
                  src="/assets/yt_5.png"
                  alt="yt"
                  className="object-contain size-full"
                />
              </div>

              <div className="bg-[#840000] font-medium font-oswald text-[14px] md:text-[20px] w-fit px-8 py-2 absolute -bottom-8 md:-bottom-10 right-1/2 left-1/2 -translate-x-[55%] rounded-[2px] -rotate-[1deg] text-center uppercase text-nowrap">
                5. Economics/News
              </div>
            </div>
            <hr className="w-0.5 h-28 md:h-40 z-2 bg-gradient-to-b from-white to-black" />
          </div>
        </section>

        {/* <!-- Calendly inline widget begin --> */}
        <div
          id="book"
          className="calendly-inline-widget md:-mt-20 min-w-[320px] h-[1200px] overflow-y-hidden"
          data-url="https://calendly.com/maskingmedia01/youtubeautomation"
        ></div>
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="lazyOnload"
        />

        {/* <!-- Calendly inline widget end --> */}

        <footer>
          <hr className="bg-gradient-to-r h-0.5 w-full from-black from-0.5%  border-none via-white mt-6 to-black " />

          <div className="flex flex-col items-center justify-center py-10 space-y-2 text-xs font-semibold text-center md:text-base">
            <div className="flex gap-2">
              <a
                href="https://www.instagram.com/masking.media/"
                target="_blank"
                className="flex items-center gap-1"
              >
                <img
                  src="/assets/ig.png"
                  alt="ig"
                  className="w-3 h-3 md:h-4 md:w-4"
                />
                <span>Masking.Media</span>
              </a>
              <span>|</span>
              <a
                href="mailto:mail@maskingmedia.com"
                target="_blank"
                className="flex items-center gap-2"
              >
                <img
                  src="/assets/mail.png"
                  alt="ig"
                  className="h-3.5 w-3.5 md:h-4 md:w-4"
                />
                <span>Mail@Maskingmedia.Com</span>
              </a>
            </div>

            <div>© Copyright 2024 Masking.Media. All Rights Reserved</div>
          </div>
        </footer>
      </main>
    </>
  );
}

const firstSection = [
  "Complete solution ",
  "Without previous experience",
  "Guaranteed Outcomes",
];

const glimps = [
  {
    title: "Prevent costly mistakes:",
    message: "Avoid common errors that can hinder your channel's growth.",
  },
  {
    title: "Maximize your earnings: ",
    message: "Benefit from our expertise in monetization strategies.",
  },
  {
    title: "Save time and effort: ",
    message: "Let our team handle the technical aspects of YouTube management.",
  },
  {
    title: "Achieve long-term success:",
    message: "Build a sustainable and profitable YouTube channel",
  },
];

// const services = [
//   {
//     title: "Strategic Channel Setup: ",
//     message:
//       "We ensure your channel is aligned with your niche  and target audience.",
//   },
//   {
//     title: "Expert Branding:",
//     message:
//       "Our designers create a professional and memorable brand identity.",
//   },
//   {
//     title: "SEO Optimization:",
//     message:
//       "We optimize your videos for search engines to increase visibility.",
//   },
//   {
//     title: "Engaging Content:",
//     message: "Our skilled creators produce high-quality, viral-prone videos.",
//   },
//   {
//     title: "Data-Driven Insights:",
//     message:
//       "We use analytics to track performance and make data-driven decisions",
//   },
// ];

const chooses = [
  {
    title: "Hands-Off Approach: ",
    message:
      "We handle everything, so you can sit back and watch your earnings grow.",
  },
  {
    title: "Time and Cost Savings: ",
    message:
      "Our automation service saves you time and money compared to DIY methods",
  },
  {
    title: "Expert Video Production: ",
    message:
      "Our team creates high-quality, engaging videos that attract viewers.",
  },
];

const works = [
  {
    title: "Consultation: ",
    message:
      "We begin by understanding your specific goals and preferences. This includes discussing your target audience, niche, and desired outcomes for your YouTube channel.",
  },
  {
    title: "Channel Setup:",
    message:
      "Our team of experts will meticulously set up your YouTube channel, optimizing it for success. We'll ensure your channel has a professional appearance, is properly categorized, and is optimized for search engines.",
  },
  {
    title: "Video Creation:",
    message:
      "We'll create high-quality, engaging videos tailored to your target audience and niche. Our team of skilled content creators will develop scripts, source visuals, and ensure your videos are visually appealing and informative.",
  },
  {
    title: "Optimization:",
    message:
      "To maximize your channel's reach and engagement, we'll optimize your videos for search engines. This includes using relevant keywords, optimizing titles and descriptions, and adding appropriate tags. We'll also focus on improving viewer retention and engagement metrics.",
  },
  {
    title: "Publishing:",
    message:
      "We'll publish your videos on a consistent schedule to maintain viewer interest and build a loyal audience. Our team will ensure that your videos are uploaded at optimal times and accompanied by engaging thumbnails and descriptions.",
  },
];

const accordianItems: AccordionItem[] = [
  {
    title: "What is YouTube Automation: The Faceless Cash Cow Strategy?",
    content:
      "Imagine building a profitable online business without ever appearing on camera. That's the power of YouTube automation. By leveraging stock footage, voiceovers, and expert editing, you can create engaging content that generates substantial revenue via adsense",
    isOpen: false,
  },
  {
    title: "How Can I Monetize My Faceless YouTube Channel?",
    content:
      "Once your channel is monetized (Which will be from Day 1 with us), you can earn income through ads. You can also earn from sponsorships, and affiliate marketing. The more viewers you attract and the longer they stay engaged, the higher your earnings will be.",
    isOpen: false,
  },
  {
    title: "Who Controls the Channel: You or Us?",
    content:
      "You're in complete control. The channel invitation will be sent directly to you, ensuring you have 100% ownership and decision-making authority.",
    isOpen: false,
  },
  {
    title: "When Can I Expect to See Significant Earnings?",
    content:
      "While results can vary, many of our clients start seeing substantial revenue within 6-9 months. The key is consistent content creation and audience engagement.",
    isOpen: false,
  },
  {
    title: "Why Choose Masking Media : The YouTube Automation Experts?",
    content:
      "We're not just another YouTube automation service. We're pioneers in the field, with a proven track record of success. Our expertise, coupled with our commitment to client satisfaction, sets us apart. We're so confident in our abilities that we offer a satisfaction guarantee. If you find a better service, we'll close our doors.",
    isOpen: false,
  },
];
