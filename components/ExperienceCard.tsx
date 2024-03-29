import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

type Props = {
  title?: string;
  img: string;
  desc?: string;
  date?: string;
  theme?: boolean;
  code?: string[];
};

export default function ExperienceCard({
  title,
  img,
  desc,
  date,
  theme,
  code,
}: Props) {
  return (
    <motion.article
      initial={{
        y: -50,
        opacity: 0,
      }}
      whileInView={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.3,
      }}
      className="mx-2"
    >
      <div
        style={{
          background: theme ? "rgb(25,25,25)" : "rgb(245,245,245)",
        }}
        className="shadow-2xl flex border border-transparent hover:border-blue-600 rounded-lg max-h-[500px] w-[350px] h-[450px] md:w-[500px] opacity-80 hover:opacity-100 items-center align-middle transition-opacity duration-200 px-4 overflow-hidden"
      >
        <div>
          <div className="flex flex-col md:flex-row">
            <Image
              alt="Experiencia laboral de Diego Arturo Yangua Merino"
              src={img}
              width={200}
              height={200}
              className="rounded-3xl w-[200px] mx-auto h-[200px] object-fill"
            />
            <div className="pl-2">
              <h4 className="font-bold text-start text-2xl">{title}</h4>
              <p className="uppercase ml-2">{date}</p>
              <div className="flex space-x-2 justify-center md:justify-start my-1">
                {code?.map((a, i) => (
                  <Image
                    src={a}
                    alt={a}
                    key={i}
                    width={10}
                    height={10}
                    className="w-10 h-10 rounded-full"
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col text-start   justify-start items-start">
            <p className="font-light py-2">{desc}</p>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
