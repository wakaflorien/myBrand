import Link from "next/link";

import Nav from "../components/Nav"
import { Typography, Breadcrumbs, Button, Input } from "@material-tailwind/react";
import { Icon } from "@iconify/react";
const Login = () => {
    return (
        <main>
            <Nav />
            <Breadcrumbs 
            fullWidth={true}
            className="lg:pl-40 cursor-pointer py-1.5 lg:py-20 font-bold text-primary text-md lg:text-2xl bg-white">
                <Link href="/" className="opacity-60">
                    <Icon icon="ant-design:home-filled" color="#000" height="24" />
                </Link>
                <a href="#" className="text-primary">Login</a>
            </Breadcrumbs>
            <div className="flex flex-col px-4 lg:mx-40 border lg:border-primary lg:rounded-2xl">
                <Typography variant="h1" className="py-2 text-center text-md lg:text-3xl font-bold text-primary lg:mt-8">Login here</Typography>
                <div className="flex flex-col items-center justify-center lg:my-10">
                    <div className="text-center w-full lg:w-1/2 my-2 lg:my-2">
                        <Input type="email" label="Email" variant="outlined" size="lg" color="green" className="lg:mb-2" />
                    </div>
                    <div className="text-center w-full lg:w-1/2 my-2 lg:my-2">
                        <Input type="password" label="Password" variant="outlined" size="lg" color="green" />
                    </div>
                        <Button color="green" className="w-full lg:w-1/6 my-2 lg:my-4">Login</Button>
                </div>
            </div>
        </main>
    )   
}
export default Login
