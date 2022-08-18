import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Img from '../components/Image'

import Nav from "../components/Nav"
import { Icon } from '@iconify/react';

import { Typography, Breadcrumbs } from "@material-tailwind/react";
import Footer from '../components/Footer';

const Blog = () => {
    const router = useRouter()
    return (
        <main>
            <Nav />
            <Breadcrumbs 
            fullWidth={true}
            className="lg:pl-40 cursor-pointer py-1.5 lg:py-20 font-bold text-primary text-md lg:text-2xl bg-white">
                <a href="#" className="opacity-60">
                    <Icon icon="ant-design:home-filled" color="#000" height="24" />
                </a>
                <a href="#" className="text-primary">Blog</a>
            </Breadcrumbs>
            <div className="flex flex-col lg:flex-row px-4 lg:px-40 border-b-2">
                <div className="w-full lg:w-1/2">
                    <Typography className="text-md font-bold text-lg lg:text-3xl" variant="h1">Latest Blog Post 1</Typography>
                    <Img 
                    src="https://firebasestorage.googleapis.com/v0/b/mybrand-app-9594a.appspot.com/o/images%2FDSC_4718.JPG?alt=media&token=eb125fd8-3f5e-4dbc-b6f8-f8ff42ebdf6b"
                    width="400"
                    height="500" 
                    styles="rounded-md shadow-md"
                    />
                </div>
                <div className="w-full lg:w-1/2">
                    <Typography className="text-primary lg:pt-12" variant="h6">November, 30, 2021</Typography>
                    <Typography className="lg:py-2" variant="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut quis facilisi amet.
                    </Typography>
                    <Typography className="cursor-pointer hover:text-primary" variant="small" onClick={() => router.push({ 
                        pathname: `/Blog/1`,
                        query: {title: `Post one`}})}>Readmore ...</Typography>
                </div>
            </div>
            <footer className="">
                <Footer />
            </footer>
        </main>
    )
}
export default Blog;