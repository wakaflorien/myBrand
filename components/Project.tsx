import { useState, useEffect } from "react";
import Card from "./Card";
import Json from "../utils/projects.json";
import { Typography } from "@material-tailwind/react";
interface myJson {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

const Project = () => {
  const [cardData, setCardData] = useState<myJson[]>([]);
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
          <Typography className="text-center text-primary font-bold text-2xl py-8 lg:py-4">
            What i have worked on ?
          </Typography>
        </div>
        {cardData.map((card, index) => {
          return (
            <>
              <Card
                key={index}
                title={card.title}
                description={card.description}
                image={card.image}
                link={card.link}
              />
              {index !== cardData.length - 1 && <hr className="border-primary" />}
            </>
          );
        })}
      </div>
    </>
  );
};
export default Project;
