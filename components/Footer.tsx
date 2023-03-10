import { Icon } from "@iconify/react";
import {
  Typography,
  Button,
  Tooltip,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useState } from "react";

const Footer = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);
  const currentYear = () => {
    const year = new Date().getFullYear();
    return year;
  };
  return (
    <>
      <Dialog
        open={open}
        size="lg"
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader>Its a simple dialog.</DialogHeader>
        <DialogBody divider>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus ad
          reprehenderit omnis perspiciatis aut odit! Unde architecto
          perspiciatis, dolorum dolorem iure quia saepe autem accusamus eum
          praesentium magni corrupti explicabo!
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Close</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleOpen}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>

      <div
        id="contact"
        className="flex flex-col items-center justify-center bg-primary shadow-md lg:h-80"
      >
        <Typography className="text-center text-white font-bold text-md lg:text-lg py-2">
          Contact Me
        </Typography>
        <Typography className="text-center text-white font-bold text-md lg:text-lg">
          Email me: @waka.florien45@gmail.com
        </Typography>
        <Typography className="text-center text-white font-bold text-md lg:text-lg pb-2">
          Tel: +250786461106
        </Typography>
        <Tooltip
          content="Click here to buy me a coffee"
          className="bg-transparent text-white text-md font-bold"
          placement="bottom"
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0, y: 25 },
          }}
        >
          <Button
            onClick={handleOpen}
            variant="filled"
            color="white"
            className="flex items-center justify-center lg:w-1/6 my-2 font-bold text-primary"
            fullWidth
          >
            <Icon icon="ic:baseline-coffee" height="24" className="" />
          </Button>
        </Tooltip>
        <Typography className="text-center text-white text-md lg:text-lg pt-8">
          Copyright Florien Niyongabo {currentYear()}
        </Typography>
      </div>
    </>
  );
};
export default Footer;
