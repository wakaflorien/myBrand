import { FC, useContext } from "react";
import { Typography } from "@material-tailwind/react";
import { Icon } from "@iconify/react";
import Skills from "./Skills";
import { ThemeContext } from "../utils/Contexts";

const About: FC = () => {
  const theme = useContext(ThemeContext)
  return (
    <>
      <section className="px-4 lg:px-44">
        <Typography className={`text-center  font-bold text-2xl py-4 text-black ${theme === "dark" && "!text-white"}`}>
          About Me
        </Typography>
        <Typography className={`p-1 font-thin lg:text-xl lg:text-center  text-lg text-black ${theme === "dark" && "!text-white"}`}>
        Since 2014, I have explored programming languages and technologies like JavaScript, Python, PHP, React, Django, Node.js, and MongoDB. I have worked on educational projects and collaborated on real-world systems for businesses and individuals. Driven by a passion for continuous learning, I embrace new technologies to stay relevant and impactful in the dynamic tech field.
        </Typography>
        
        <Skills />
      </section>
    </>
  );
};
export default About;
