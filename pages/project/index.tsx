import { Icon } from "@iconify/react";
import { Breadcrumbs, Typography } from "@material-tailwind/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Img from "../../components/Image";
import Nav from "../../components/Nav";
import projects from "../../utils/projects.json";

interface myProjects {
  title: string;
  description: string;
  image: string;
}

const Projects = () => {
  const [allProjects, setAllProjects] = useState<myProjects[]>([]);
  const router = useRouter();

  useEffect(() => {
    setAllProjects(projects);
  }, []);
  return (
    <>
      <Nav />
      <Breadcrumbs
        fullWidth={true}
        className="bg-secondary lg:pl-40 cursor-pointer py-1.5 lg:py-20 font-bold text-primary text-md lg:text-2x"
      >
        <Link href="/" className="opacity-60">
          <Icon icon="ant-design:home-filled" color="#000" height="24" />
        </Link>
        <Link href="/project" className="text-primary">
          Project
        </Link>
      </Breadcrumbs>
      {projects.map((item, index) => (
        <div
          key={index}
          className="w-full flex flex-col items-start rounded-xl px-2 lg:px-32 my-5 cursor-pointer hover:bg-transparent"
        >
          <div className="p-4 lg:w-1/4">
            <h1 className="text-primary text-sm lg:text-2xl font-bold">
              {item.title}
            </h1>
          </div>
          <div className="font-lato py-4 lg:w-3/4 ml-4">
            <Img
              src={item.image}
              width="400"
              height="400"
              styles="rounded-md shadow-md"
            />

            <Typography
              variant="medium"
              color="blue-gray"
              className="p-1 lg:mt-8 font-normal text-md lg:text-lg "
            >
              {item.description}
            </Typography>
          </div>
          <span
            onClick={() =>
              router.push({
                pathname: `/project/1`,
                query: { title: `Project one` },
              })
            }
            className="text-primary text-lg flex justify-start cursor-pointer font-bold font-lato px-6"
          >
            Read more ...
          </span>
        </div>
      ))}
      <footer className="">
        <Footer />
      </footer>
    </>
  );
};

export default Projects;
