import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Img from "../../components/Image";

import Nav from "../../components/Nav";

import { Typography, Breadcrumbs, Button, Popover, PopoverHandler, PopoverContent } from "@material-tailwind/react";
import Footer from "../../components/Footer";

import projects from "../../utils/projects.json";
import { myJson } from "../../App.types";
import { Icon } from "@iconify/react";
import Link from "next/link";

const Blog = () => {
  const [allProjects, setAllProjects] = useState<myJson[]>([]);
  const router = useRouter();

  useEffect(() => {
    setAllProjects(projects);
  }, []);
  return (
    <main className="max-w-screen-2xl mx-auto space-y-20">
      <Nav />
      <section className="mx-2 lg:mx-32">
        <div
          className="flex items-center gap-2 text-black px-2 lg:px-4 cursor-pointer hover:text-primary"
          onClick={() => router.push("/#portifolio")}
        >
          <Icon icon="material-symbols:arrow-back-rounded" />
          {" "}Back to projects
        </div>
        {projects && projects.filter((item => item.title === router.query.project_name)).map((item, index) => (
          <div
            key={index}
            className="w-full flex flex-col items-start p-2 lg:p-4 space-y-2 rounded-xl cursor-pointer hover:bg-transparent"
          >
            <h1 className="text-lg lg:text-4xl text-primary">
              {item.title}
            </h1>

            <Typography
              variant="medium"
              color="blue-gray"
              className="font-normal text-md lg:text-lg "
            >
              {item.summary}
            </Typography>
            <Typography
              variant="medium"
              className="flex items-center space-x-2 font-normal text-black hover:text-primary  text-md lg:text-lg"
            >
              <Link href={item.link} passHref>
                <a target="_blank" rel="noopener noreferrer">
                  View the project
                </a>
              </Link>
              <Icon icon="iconamoon:link-bold" className="-rotate-45" height="22" />

            </Typography>
            
            <div className="w-full flex flex-col items-center justify-center lg:gap-8 lg:py-8">
              <Img
                src={item.image}
                width="800"
                height="500"
                styles="rounded-md shadow-md object-cover"
              />
              {item.isPrivate ? (<Popover placement="bottom">
                <PopoverHandler>
                  <Button variant="outlined" color="green" className="lg:ml-4 rounded-full capitalize text-primary">View the source code</Button>
                </PopoverHandler>
                <PopoverContent>
                  <Typography variant="h6" color="blue-gray">
                    This project belongs to a private repository organization.
                  </Typography>
                  <Link href="https://fixahr.com" passHref>
                    <a target="_blank" rel="noopener noreferrer">
                      Visit the website here
                    </a>
                  </Link>
                </PopoverContent>
              </Popover>) : (<Button variant="outlined" color="green" className="lg:ml-4 rounded-full capitalize text-primary" onClick={() => window.open(item.repo)}>View the source code</Button>)}

              <div className="w-full flex flex-col items-start justify-around">
                <Typography
                  as="p"
                  variant="small"
                  className="py-1.5 font-normal text-black text-md lg:text-lg"
                >
                  <strong>Timeline</strong>{" "}{":"}{" "} {item.timeline}
                </Typography>
                <Typography
                  as="p"
                  variant="small"
                  className="py-1.5 font-normal text-black text-md lg:text-lg"
                >
                  <strong>Role</strong>{" "}{":"}{" "} {item.role}
                </Typography>
                <Typography
                  as="p"
                  variant="small"
                  className="py-1.5 font-normal text-black text-md lg:text-lg"
                >
                  <strong>Stack</strong>{" "}{":"}{" "} {item.stack}
                </Typography>
                <Typography
                  as="p"
                  variant="small"
                  className="py-1.5 font-normal text-black text-md lg:text-lg"
                >
                  <strong>Project description</strong>{" "}{":"}{" "} {item.description}
                </Typography>
              </div>
            </div>

          </div>
        ))}
      </section>
      <footer className="">
        <Footer />
      </footer>
    </main>
  );
};
export default Blog;
