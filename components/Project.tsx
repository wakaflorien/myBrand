import { useState, useEffect } from "react";
import Json from "../utils/projects.json";
import { Typography } from "@material-tailwind/react";
import Img from "./Image";
import { myJson } from "../App.types";
import Link from "next/link";


const Project = () => {
  const [cardData, setCardData] = useState<myJson[]>([]);
  useEffect(() => {
    setCardData(Json);
  }, []);

  return (
    <>
      <div
        className="flex flex-col justify-between"
        id="portifolio"
      >
        <div>
          <Typography className="text-center text-black font-bold text-2xl py-8 lg:py-4">
            What i have worked on ?
          </Typography>
        </div>

        <div className="w-full flex flex-wrap items-center justify-center gap-10 rounded-xl cursor-pointer ">
          {cardData.map(({ id, image, title, owner }) => {
            return (
              <Link href={`/projects/${title}`} className="text-primary" key={id}>
                <div className="p-4 text-black space-y-4" >
                  <Img
                    src={image}
                    width="300"
                    height="300"
                    styles="rounded-md object-cover shadow-lg hover:scale-95 transition-all ease-in-out duration-500"
                  />
                  <div className="flex flex-col">
                    <h1 className="text-sm lg:text-xl text-primary">
                      {title}
                    </h1>
                    <h2 className="text-xs lg:text-lg cursor-pointer hover:text-primary">
                      {owner}
                    </h2>
                  </div>
                </div>
              </Link>
            );
          })}

        </div>
      </div>
    </>
  );
};
export default Project;
