import { FC } from "react";
import { Typography } from "@material-tailwind/react";
import { Icon } from "@iconify/react";
import Skills from "./Skills";

const About: FC = () => {
  return (
    <>
      <section className="px-4 lg:px-44 pb-2">
        <Typography className="text-center text-black font-bold text-2xl py-4">
          About Me
        </Typography>
        <Typography className="p-1 font-thin lg:text-xl text-center text-black text-md">
        Since 2014, I have explored programming languages and technologies like JavaScript, Python, PHP, React, Django, Node.js, and MongoDB. I have worked on educational projects and collaborated on real-world systems for businesses and individuals. Driven by a passion for continuous learning, I embrace new technologies to stay relevant and impactful in the dynamic tech field.
        </Typography>
        
        <Skills />
      </section>
    </>
  );
};
export default About;
