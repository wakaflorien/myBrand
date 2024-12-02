
import {
  Typography
} from "@material-tailwind/react";
import Socials from "./Socials";

const Footer = () => {
  return (
    <footer
      id="contact"
      className=" bg-primary  flex flex-col items-center justify-center space-y-2 lg:space-y-4 lg:h-80 w-full lg:rounded-xl lg:my-12"
    >
      <Typography className="text-center text-white font-bold text-md lg:text-lg py-2">
        Contact Me
      </Typography>
      <Typography className="text-center text-white font-bold text-md lg:text-lg">
        Email me: waka.florien45@gmail.com
      </Typography>
      <Typography className="text-center text-white font-bold text-md lg:text-lg pb-2">
        Phone number: +250786461106
      </Typography>

      <Socials hasMore={false} color={"text-white"} />

    </footer>
  );
};
export default Footer;
