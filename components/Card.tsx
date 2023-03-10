import { Icon } from "@iconify/react";
import { Typography } from "@material-tailwind/react";
import Img from "./Image";
interface cardProps {
  title: string;
  description: string;
  image: string;
}

const Card = (props: cardProps) => {
  return (
    <div className="w-full flex flex-col lg:flex-row items-start rounded-xl px-2 my-5 cursor-pointer hover:bg-transparent ">
      <div className="p-4 lg:w-1/4">
        <Img
          src={props.image}
          width="400"
          height="400"
          styles="rounded-md shadow-md"
        />
      </div>
      <div className="font-lato py-4 lg:w-3/4 ml-4">
        <h1 className="text-primary text-sm lg:text-2xl font-bold">
          {props.title}
        </h1>

        <Typography
          variant="medium"
          color="blue-gray"
          className="p-1 font-normal text-md lg:text-lg "
        >
          {props.description}
        </Typography>
      </div>
    </div>
  );
};

export default Card;
