import Image from "next/image";
import Img, { imageLoader } from "../components/Image";

import { Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { ImgInterface } from "../App.types";

const Hero = () => {
  const [imgDimensions, setImgDimensions] = useState<ImgInterface>({
    width: "400",
    height: "450",
  });

  useEffect(() => {
    window.addEventListener("resize", () => {
      window.innerWidth < 960 && setImgDimensions({ width: "200", height: "200" });
    });
  }, []);

  const src = "https://firebasestorage.googleapis.com/v0/b/mybrand-app-9594a.appspot.com/o/images%2Fnewme.jpg?alt=media&token=19ac8be5-fee0-4b9c-b959-efe0faedb63f";

  return (
    <div
      id="about"
      className="flex flex-col lg:flex-row mx-auto items-center lg:justify-between gap-4 lg:gap-20 py-4 lg:py-12 px-4 lg:px-44"
    >
      <div className="rounded-full border border-primary">
        <Img
          src={src}
          width={imgDimensions.width}
          height={imgDimensions.height}
          styles="object-cover rounded-full"
        />
      </div>
      <div className="flex flex-col">
        <Typography className="text-primary font-bold text-2xl lg:text-3xl lg:py-2 text-center">
          Florien Niyongabo
        </Typography>
        <Typography className="text-black font-bold text-lg lg:text-xl py-2 text-center">
          Software Engineer
        </Typography>
        <Typography className="text-black text-center text-md lg:text-xl">
          I’m a software engineer passionate about building interactive web applications that empower users to engage with technology at its best.
        </Typography>
      </div>
    </div>
  );
};
export default Hero;
