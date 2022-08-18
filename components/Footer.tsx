import { Icon } from '@iconify/react';
import {
    Typography,
    Button,
    Tooltip
} from '@material-tailwind/react'

const Footer = () => {
    const currentYear = () => {
        const year = new Date().getFullYear();
        return year;
    }
    return (
        <div className="flex flex-col items-center justify-center bg-primary shadow-md lg:h-80">
            <Typography className="text-center text-white font-bold text-md lg:text-lg py-2">Contact Me</Typography>
            <Typography className="text-center text-white font-bold text-md lg:text-lg">Email me: @waka.florien45@gmail.com</Typography>
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
              }}>
                <Button 
                variant="filled"
                color="white"
                className="flex items-center justify-center lg:w-1/6 my-2 font-bold text-primary"
                fullWidth
                ><Icon icon="ic:baseline-coffee" height="24" className="" />
                </Button>
            </Tooltip>
             <Typography className="text-center text-white text-md lg:text-lg pt-8">
             Copyright Florien Niyongabo {currentYear()}
            </Typography>
        </div>
    )
}
export default Footer; 