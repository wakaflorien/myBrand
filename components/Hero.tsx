import Img, { imageLoader } from "../components/Image";

import { Typography } from "@material-tailwind/react";
import { FC, useCallback, useEffect, useState } from "react";
import { ImgInterface } from "../App.types";
import Socials from "./Socials";

const Hero: FC = () => {
  const [imgDimensions, setImgDimensions] = useState<ImgInterface>({
    width: "400",
    height: "450",
  });

  const handleResize = useCallback(() => {
    const newDimensions = {
      width: window.innerWidth < 960 ? "200" : "400",
      height: window.innerWidth < 960 ? "200" : "450"
    };

    if (newDimensions.width !== imgDimensions.width ||
      newDimensions.height !== imgDimensions.height) {
      setImgDimensions(newDimensions);
    }
  }, [imgDimensions]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);


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
      <div className="flex flex-col items-center lg:items-start">
        <Typography className="text-primary font-semibold text-2xl lg:text-3xl lg:py-2">
          Florien Niyongabo
        </Typography>
        <Typography className="text-black font-normal text-lg lg:text-xl py-2 uppercase">
          Software Engineer
        </Typography>
        <Typography className="text-black text-md lg:text-xl">
          I’m a software engineer passionate about building interactive web applications that empower users to engage with technology at it’s best.
        </Typography>

        <Socials hasMore={true} color={"text-primary"} />
      </div>
    </div>
  );
};
export default Hero;
