import { Icon } from "@iconify/react";
import {
  Typography,
  Button,
  Tooltip,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input, Checkbox, Textarea, Select, Option
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
        <DialogHeader className='flex items-center justify-center'>I’m excited to learn about your project. Ready to get started?</DialogHeader>
        <DialogBody divider>
          <form className="mt-8 mb-2 w-full">
            <div className="flex flex-row gap-6 ">
              <Input size="lg" label="Name" />
              <Input size="lg" label="Email" />
            </div>
            <div className="flex flex-row gap-6 mt-10">
              <Select variant="standard" label="Type of project">
                <Option>Responsive design</Option>
                <Option>Web app</Option>
                <Option>Mobile app</Option>
                <Option>APIs development</Option>
                <Option>Integration</Option>
              </Select>
              <Select variant="standard" label="Budget">
                <Option>$200 - 300</Option>
                <Option>$300 - 500</Option>
                <Option>$500 - 1000 </Option>
              </Select>
            </div>
            <div className="mt-10">
              <Textarea size='lg' label="Message" />
            </div>
            <div className="flex flex-col">
              <Checkbox
                  label="I agree the
                          &nbsp;Terms and Conditions" />
              <Button className="mt-6 rounded-full" size='lg' variant='outlined' >
                Submit
              </Button>
            </div>
          </form>
        </DialogBody>
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
          content="Interested in working together? let's chat over a coffee"
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
            <Typography className="text-center text-sm lg:text-md lowercase" variant="h2">
              let &apos; s do this
            </Typography>
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
