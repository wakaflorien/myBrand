import {
    Typography,
} from '@material-tailwind/react'
import { Icon } from '@iconify/react';

const About = () => {
    return (
        <div>
            <div className="relative bg-primary shadow-md lg:h-80">
                <Typography className="text-center text-white font-bold text-2xl py-4">About Me</Typography>
                <Typography className="text-center text-white text-xl lg:px-44 pb-2">
                    Since beginning my journey as a technology enthusiast nearly 7 years ago,i have studied a lot of programming
                    languages like C, C++, VB, PHP and I have worked on some projects for educational purposes,
                    and collaborated with talented people to real-life systems for both business and individual use.
                    I believe in continous learning and adapting to new things to keep being relevant.
                </Typography>
            </div>
            <div className="lg:absolute bg-secondary lg:w-10/12 flex flex-col lg:flex-row rounded-xl shadow-lg lg:-bottom-80 lg:left-20 lg:mx-12 lg:my-32 lg:py-2">
                <div className="flex flex-col lg:w-1/3 text-center items-center">
                    <Icon icon="bi:code-slash" color="#0fa958" height="24" className="my-2" />
                    <Typography className="text-lg font-bold my-2">
                        Software Development
                    </Typography>
                    <Typography className="text-lg text-primary font-bold">
                        Languages
                    </Typography>
                    <Typography className="text-md my-1">
                        Javascript, PHP,  Django
                    </Typography>
                    <Typography className="text-lg text-primary font-bold">
                        Dev Tools
                    </Typography>
                    <Typography className="text-md my-1">
                        VS Code, Atom
                    </Typography>
                    <Typography className="text-md my-1">
                        Github
                    </Typography>
                    <Typography className="text-md my-1">
                        Terminal
                    </Typography>
                </div>
                <div className="flex flex-col lg:w-1/3 text-center items-center border-t-2 lg:border-t-0 border-b-2 lg:border-b-0 lg:border-l-2 lg:border-r-2">
                    <Icon icon="bi:credit-card-2-front" color="#0fa958" height="24" className="my-2" />
                    <Typography className="text-lg font-bold my-2">
                        Front-end Development
                    </Typography>
                    <Typography className="text-lg text-primary font-bold">
                        Languages
                    </Typography>
                    <Typography className="text-md my-1">
                        HTML, CSS
                    </Typography>
                    <Typography className="text-lg text-primary font-bold">
                        Dev Tools
                    </Typography>
                    <Typography className="text-md my-1">
                        VS Code, Atom
                    </Typography>
                    <Typography className="text-md ">
                        Github
                    </Typography>
                    <Typography className="text-md ">
                        Terminal
                    </Typography>
                    <Typography className="text-md ">
                        Bootstrap
                    </Typography>
                </div>
                <div className="flex flex-col lg:w-1/3 text-center items-center">
                    <Icon icon="iconoir:design-pencil" color="#0fa958" height="24" className="my-2" />
                    <Typography className="text-lg font-bold my-2">
                        Design
                    </Typography>
                    <Typography className="text-lg text-primary font-bold">
                        What i design
                    </Typography>
                    <Typography className="text-md my-1">
                        UI, Web and Mobile
                    </Typography>
                    <Typography className="text-lg text-primary font-bold">
                        Design Tools
                    </Typography>
                    <Typography className="text-md my-1">
                        Figma
                    </Typography>
                </div>
            </div>
        </div>
    )
}
export default About; 
