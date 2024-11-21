import { Icon } from "@iconify/react";
import {
  Typography,
  Button,
  Tooltip,
  Popover,
  PopoverHandler,
  PopoverContent,
} from "@material-tailwind/react";
import Link from "next/link";
import { useState } from "react";

const Footer = () => {
  const [open, setOpen] = useState(false);

  const currentYear = () => {
    const year = new Date().getFullYear();
    return year;
  };
  return (
    <>

      <div
        id="contact"
        className=" bg-primary  flex flex-col items-center justify-center space-y-2 lg:space-y-4 lg:h-80 w-full lg:w-11/12	mx-auto lg:rounded-xl lg:mb-12"
      >
        <Typography className="text-center text-white font-bold text-md lg:text-lg py-2">
          Contact Me
        </Typography>
        <Typography className="text-center text-white font-bold text-md lg:text-lg">
          Email me: waka.florien45@gmail.com
        </Typography>
        <Typography className="text-center text-white font-bold text-md lg:text-lg pb-2">
          Tel: +250786461106
        </Typography>

        <Popover placement="bottom">
          <PopoverHandler>
            <Button
              variant="filled"
              color="white"
              className="flex items-center justify-center lg:w-1/6 my-2 font-bold text-primary"
              fullWidth
            >
              <Icon icon="ic:baseline-coffee" height="24" className="" />
              <Typography className="text-center text-sm lg:text-md lowercase" variant="h2">
                let’s do this
              </Typography>
            </Button>
          </PopoverHandler>
          <PopoverContent>
            <Typography variant="p" className="text-black text-center text-sm lg:text-md font-semibold">
              Interested in working together? let’s chat over a coffee.
            </Typography>
            <div className="flex items-center justify-center space-x-4">
            <Link href="https://www.linkedin.com/in/florien-niyongabo-7b7971142/" passHref>
              <a target="_blank" rel="noopener noreferrer">
                <Icon icon="iconoir:linkedin" height={24} className="text-primary" />
              </a>
            </Link>
            <Link href="https://www.instagram.com/waka_florien45/" passHref>
              <a target="_blank" rel="noopener noreferrer">
                <Icon icon="hugeicons:instagram" height={24} className="text-primary" />
              </a>
            </Link>
            <Link href="https://x.com/florienwaka" passHref>
              <a target="_blank" rel="noopener noreferrer">
                <Icon icon="arcticons:x-twitter" height={24} className="text-primary" />
              </a>
            </Link>
            </div>
          </PopoverContent>
        </Popover>

        <Typography className="text-center text-white text-md lg:text-lg py-4">
          Copyright Florien Niyongabo {currentYear()}
        </Typography>
      </div>
    </>
  );
};
export default Footer;
