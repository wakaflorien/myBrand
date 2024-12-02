import { Icon } from '@iconify/react'
import { Typography } from '@material-tailwind/react'
import React, { FC, useContext } from 'react'
import { LogosReactQuery } from './CustomIcons'
import { ThemeContext } from '../utils/Contexts'

const Skills: FC = () => {
    const theme = useContext(ThemeContext)
    return (
        <>
            <Typography className={`text-center text-black font-bold text-2xl py-4 ${theme === "dark" && "!text-white"}`}>
                Skills / Tools
            </Typography>
            <div className="relative flex items-center justify-center overflow-x-hidden text-black">
                <div className="py-12 animate-marquee whitespace-nowrap">
                    <div className={`flex text-primary ${theme === "dark" && "!text-primary/70"}`}>
                        <Icon icon="raphael:nodejs" width="64" height="64" className='mx-8 rounded-md' />
                        <Icon icon="akar-icons:javascript-fill" width="64" height="64" className='mx-8 rounded-md' />
                        <Icon icon="file-icons:typescript-alt" width="64" height="64" className='mx-8 rounded-md' />
                        <Icon icon="devicon-plain:django-wordmark" width="64" height="64" className='mx-8 rounded-md' />
                        <Icon icon="fontisto:html5" width="64" height="64" className='mx-8 rounded-md' />
                        <Icon icon="devicon-plain:css3" width="64" height="64" className='mx-8 rounded-md' />
                    </div>

                </div>

                <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
                    <div className={`flex text-primary ${theme === "dark" && "!text-primary/70"}`}>
                        <Icon icon="nonicons:react-16" width="64" height="64" className='mx-8 rounded-md' />
                        <Icon icon="akar-icons:nextjs-fill" width="64" height="64" className='mx-8 rounded-md' />
                        <Icon icon="ion:logo-sass" width="64" height="64" className='mx-8 rounded-md' />
                        <Icon icon="lineicons:tailwindcss" width="64" height="64" className='mx-8 rounded-md' />
                        <Icon icon="simple-icons:styledcomponents" width="64" height="64" className='mx-8 rounded-md' />
                        <Icon icon="simple-icons:bootstrap" width="64" height="64" className='mx-8 rounded-md' />
                    </div>

                </div>
            </div>
            <div className="relative flex items-center justify-center overflow-x-hidden text-black">
                <div className="py-12 animate-reverseMarquee whitespace-nowrap">
                    <div className={`flex text-primary ${theme === "dark" && "!text-primary/70"}`}>
                        <Icon icon="mdi:firebase" width="64" height="64" className='mx-8 rounded-md' />
                        <Icon icon="mdi:graphql" width="64" height="64" className='mx-8 rounded-md' />
                        <Icon icon="akar-icons:redux-fill" width="64" height="64" className='mx-8 rounded-md' />
                        <Icon icon="lineicons:mysql" width="64" height="64" className='mx-8 rounded-md' />
                        <Icon icon="devicon-plain:mongodb-wordmark" width="64" height="64" className='mx-8 rounded-md' />
                        <LogosReactQuery />
                    </div>
                </div>

                <div className="absolute top-0 py-12 animate-reverseMarquee2 whitespace-nowrap">
                    <div className={`flex text-primary ${theme === "dark" && "!text-primary/70"}`}>
                        <Icon icon="akar-icons:postgresql-fill" width="64" height="64" className='mx-8 rounded-md' />
                        <Icon icon="simple-icons:git" width="64" height="64" className='mx-8 rounded-md' />
                        <Icon icon="lineicons:postman" width="64" height="64" className='mx-8 rounded-md' />
                        <Icon icon="file-icons:vscode" width="64" height="64" className='mx-8 rounded-md' />
                        <Icon icon="meteor-icons:figma" width="64" height="64" className='mx-8 rounded-md' />
                        <Icon icon="ion:terminal" width="64" height="64" className='mx-8 rounded-md' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills