import Img, { imageLoader } from "../components/Image";

import { Typography } from "@material-tailwind/react";
import { FC, useCallback, useContext, useEffect, useState } from "react";
import { ImgDimensions } from "../App.types";
import Socials from "./Socials";
import { useTheme } from "./ThemeProvider";

const Hero: FC = () => {
  const { theme } = useTheme();
  const [imgDimensions, setImgDimensions] = useState<ImgDimensions>({
    width: "400",
    height: "450"
  });

  useEffect(() => {
    const initialDimensions = {
      width: window.innerWidth < 960 ? "200" : "400",
      height: window.innerWidth < 960 ? "200" : "450"
    };
    setImgDimensions(initialDimensions);
  }, []);

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


  const src = "https://firebasestorage.googleapis.com/v0/b/mybrand-app-9594a.appspot.com/o/images%2Fmesuit1.jpg?alt=media&token=e7c93fb0-f937-414c-ae97-3097635a24bd";

  return (
    <div
      id="about"
      className="flex flex-col lg:flex-row mx-auto items-center lg:justify-between gap-4 lg:gap-20 py-4 lg:py-12 px-4 lg:px-44"
    >
      <div className={`rounded-full border border-primary ${theme === "dark" && "!border-white"}`}>
        <Img
          src={src}
          width={imgDimensions.width}
          height={imgDimensions.height}
          styles="object-cover rounded-full"
        />
      </div>
      <div className="flex flex-col items-center lg:items-start gap-2">
        <Typography className="text-primary font-semibold text-2xl lg:text-3xl ">
          Florien Niyongabo
        </Typography>
        <Typography className={`text-black font-normal text-lg lg:text-xl  uppercase ${theme === "dark" && "!text-white"}`}>
          Software Engineer
        </Typography>
        <Typography className={`text-black text-center lg:text-left text-lg lg:text-xl ${theme === "dark" && "!text-white"}`}>
          I’m a software engineer passionate about building interactive web applications that empower users to engage with technology at it’s best.
        </Typography>

        <Socials hasMore={true} color={"text-primary"} />
      </div>
    </div>
  );
};
export default Hero;
