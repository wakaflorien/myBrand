import { useState, useEffect } from "react";
import Card from "./Card";
import Json from "../utils/projects.json";
import { useRouter } from "next/router";
import { Typography } from "@material-tailwind/react";
interface myJson {
  id: number;
  title: string;
  description: string;
  image: string;
}

const Project = () => {
  const [cardData, setCardData] = useState<myJson[]>([]);
  const router = useRouter();
  useEffect(() => {
    setCardData(Json);
  }, []);
  return (
    <>
      <div
        className="flex flex-col justify-between lg:mt-80 lg:mb-12 lg:mx-32"
        id="portifolio"
      >
        <div>
          <Typography className="text-center text-primary font-bold text-2xl py-4">
            What i have worked on ?
          </Typography>
        </div>
        {cardData.map((card, index) => {
          return (
            <Card
              key={index}
              title={card.title}
              description={card.description}
              image={card.image}
            />
          );
        })}
        <span
          onClick={() => router.push(`/project`)}
          className="text-primary text-lg flex justify-start cursor-pointer font-bold font-lato px-8"
        >
          Read more ...
        </span>
      </div>
    </>
  );
};
export default Project;
