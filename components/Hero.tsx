import Img from "../components/Image";

import { Typography } from "@material-tailwind/react";

const Hero = () => {
  const myLoader = () => {
    return `https://firebasestorage.googleapis.com/v0/b/mybrand-app-9594a.appspot.com/o/images%2FDSC_4718.JPG?alt=media&token=eb125fd8-3f5e-4dbc-b6f8-f8ff42ebdf6b`;
  };

  return (
    <div
      id="about"
      className="flex flex-col lg:flex-row mx-auto items-center lg:justify-between gap-20 py-4 lg:py-12 px-4 lg:px-44 lg:py-4"
    >
      <div>
        <Img
          src="https://firebasestorage.googleapis.com/v0/b/mybrand-app-9594a.appspot.com/o/images%2FDSC_4718.JPG?alt=media&token=eb125fd8-3f5e-4dbc-b6f8-f8ff42ebdf6b"
          width="400"
          height="500"
          styles="rounded-full shadow-md"
        />
      </div>
      <div className="flex flex-col">
        <Typography className="text-primary font-bold text-3xl lg:py-2 text-center">
          Florien Niyongabo ,
        </Typography>
        <Typography className="text-black font-bold text-xl py-2 text-center">
          Web, Software Developer/Designer
        </Typography>
        <Typography className="text-black text-center text-xl">
          I’m a software/web developer who is passionate about creating
          interactive web, android applications and helping users interact with
          different technologies at the highest level.
        </Typography>
      </div>
    </div>
  );
};
export default Hero;
