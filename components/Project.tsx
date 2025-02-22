import { useState, useEffect, useContext } from "react";
import Json from "../utils/projects.json";
import { Typography } from "@material-tailwind/react";
import Img from "./Image";
import { myJson } from "../App.types";
import Link from "next/link";
import { useTheme } from "./ThemeProvider";
import { motion } from "motion/react";

const Project = () => {
  const { theme } = useTheme();
  const [cardData, setCardData] = useState<myJson[]>([]);
  useEffect(() => {
    setCardData(Json);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    },
    hover: {
      scale: 1.05,
      y: -5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  return (
    <>
      <div
        className="flex flex-col py-4"
        id="portifolio"
      >
        <div>
          <Typography className={`text-center font-bold text-2xl py-4 lg:py-6 text-black ${theme === "dark" && "!text-white"}`}>
            Recent work
          </Typography>
        </div>

        <motion.div
          className="w-full p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center cursor-pointer"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {cardData.map(({ id, image, title }) => (
            <motion.div
              key={id}
              variants={itemVariants}
              whileHover="hover"
              className="flex flex-col justify-center"
            >
              <div className="w-full max-w-sm rounded-md overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <motion.div
                    className="relative overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Img
                      src={image}
                      width="300"
                      height="200"
                      styles="w-full rounded-none object-cover shadow-lg hover:scale-95 transition-all ease-in-out duration-500"
                    />
                    <motion.div
                      className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0"
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Link href={`/projects/${title}`}>
                        <p className="text-white text-lg font-semibold">View Project</p>
                      </Link>
                    </motion.div>
                  </motion.div>

                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-primary truncate">
                      {title}
                    </h3>
                  </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </>
  );
};
export default Project;
