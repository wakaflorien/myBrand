import { Typography } from "@material-tailwind/react";
import { Icon } from "@iconify/react";

const About = () => {
  return (
    <>
      <section className="relative bg-primary shadow-md lg:h-96">
        <Typography className="text-center text-white font-bold text-2xl py-4">
          About Me
        </Typography>
        <Typography className="p-1 font-thin lg:text-xl text-center text-white text-md lg:px-44 pb-2"
        >
          Since beginning my journey as a technology enthusiast in 2014, I have delved into learning various programming languages and technologies, including JavaScript, Python, PHP, React, Django, Node.js, MongoDB, and more. Over the years, I have worked on numerous educational projects and collaborated with talented individuals to create real-world systems for businesses and individuals. I am passionate about continuous learning and embracing new technologies to remain relevant and make a meaningful impact in this ever-evolving field.
        </Typography>
        <div
          id="skills"
          className="lg:absolute inset-x-0 mx-auto lg:my-4 lg:py-2 bg-secondary lg:w-10/12 flex flex-col lg:flex-row rounded-none lg:rounded-xl shadow-lg"
        >
          <div className="flex flex-col lg:w-1/3 text-center items-center">
            <Icon
              icon="bi:code-slash"
              color="#0fa958"
              height="24"
              className="my-2"
            />
            <Typography className="text-lg text-black font-bold my-2">
              Back-end
            </Typography>
            <Typography className="text-lg text-primary font-bold my-2">
              Languages
            </Typography>
            <Typography className="text-md text-black my-1">
              NodeJs, Django, PHP
            </Typography>
            <Typography className="text-lg text-primary font-bold my-2">
              Databases
            </Typography>
            <Typography className="text-md font-thin text-black my-1">
              MongoDB, MySQL, PostgresSQL
            </Typography>

            <Typography className="text-lg text-primary font-bold my-2">
              Development Tools / IDEs
            </Typography>
            <Typography className="text-md text-black my-1">
              VS Code, Webstorm, Postman, Git
            </Typography>
            <Typography className="text-md text-black my-1">Github</Typography>
            <Typography className="text-md text-black my-1 pb-4 lg:pb-0">Terminal</Typography>
          </div>

          <div className="flex flex-col lg:w-1/3 text-center items-center border-primary border-t-2 lg:border-t-0 border-b-2 lg:border-b-0 lg:border-x">
            <Icon
              icon="bi:credit-card-2-front"
              color="#0fa958"
              height="24"
              className="my-2"
            />
            <Typography className="text-lg text-black font-bold my-2">
              Front-end Development
            </Typography>
            <Typography className="text-lg text-primary font-bold my-2">
              Languages
            </Typography>
            <Typography className="text-md text-black my-1">
              HTML5, JavaScript, TypeScript
            </Typography>
            <Typography className="text-lg text-primary font-bold my-2">
              Frameworks / Tools
            </Typography>
            <Typography className="text-md text-black my-1">
              React, Next, Redux
            </Typography>
            <Typography className="text-lg text-primary font-bold my-2">
              Styling
            </Typography>
            <Typography className="text-md text-black my-1">
              CSS, SASS, Styled-components, Tailwind CSS, Bootstrap
            </Typography>
            <Typography className="text-lg text-primary font-bold my-2">
              Development Tools / IDEs
            </Typography>
            <Typography className="text-md text-black my-1">
              VS Code, Webstorm, Git
            </Typography>
            <Typography className="text-md text-black my-1">Github</Typography>
            <Typography className="text-md text-black my-1 pb-4 lg:pb-0">
              Terminal
            </Typography>
          </div>
          <div className="flex flex-col lg:w-1/3 text-center items-center">
            <Icon
              icon="iconoir:design-pencil"
              color="#0fa958"
              height="24"
              className="my-2"
            />
            <Typography className="text-lg text-black font-bold my-2">
              Design
            </Typography>
            <Typography className="text-lg text-primary font-bold my-2">
              What i design
            </Typography>
            <Typography className="text-md text-black my-1">
              UI/UX for Web and Mobile
            </Typography>
            <Typography className="text-lg text-primary font-bold">
              Design Tools
            </Typography>
            <Typography className="text-md text-black my-1 pb-4 lg:pb-0">
              Figma , FigJam
            </Typography>
          </div>
        </div>
      </section>
    </>
  );
};
export default About;
