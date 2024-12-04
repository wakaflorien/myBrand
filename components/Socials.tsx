import { Icon } from '@iconify/react'
import { Button } from '@material-tailwind/react'
import Link from 'next/link'
import React, { FC, useContext } from 'react'
import { SocialsTypes } from '../App.types'
import {  useTheme } from './ThemeProvider'

const Socials: FC<SocialsTypes> = ({ hasMore, color }) => {
    const {theme} = useTheme();
    return (
        <div className="flex flex-col items-center lg:items-start space-y-4 lg:space-y-6 py-2 ">

            <div className="flex space-x-4">
                <Link href="https://www.linkedin.com/in/florien-niyongabo-7b7971142/" passHref>
                    <a target="_blank" rel="noopener noreferrer">
                        <Icon icon="iconoir:linkedin" height={24} className={`${color}`} />
                    </a>
                </Link>
                <Link href="https://github.com/wakaflorien" passHref>
                    <a target="_blank" rel="noopener noreferrer">
                        <Icon icon="line-md:github" height={24} className={`${color}`} />
                    </a>
                </Link>
                <Link href="https://www.instagram.com/waka_florien45/" passHref>
                    <a target="_blank" rel="noopener noreferrer">
                        <Icon icon="hugeicons:instagram" height={24} className={`${color}`} />
                    </a>
                </Link>
                <Link href="https://x.com/florienwaka" passHref>
                    <a target="_blank" rel="noopener noreferrer">
                        <Icon icon="proicons:x-twitter" height={24} className={`${color}`} />
                    </a>
                </Link>
            </div>

            {hasMore && (<Button
                variant="filled"
                className={`w-fit bg-primary shadow-none hover:shadow-none my-2 font-normal text-white text-md lg:text-xl normal-case ${theme === "dark" && "!bg-primary/20"}`}
                onClick={() => window.open("https://wa.me/250786461106")}
            >
                {" "}Quick chat
            </Button>)}
        </div>
    )
}

export default Socials