import { Icon } from '@iconify/react';
import { Typography, Breadcrumbs, Button, Textarea } from "@material-tailwind/react";
import { useRouter } from 'next/router'

import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import Img from '../../components/Image'
const Post = () => {
    const router = useRouter()
    const { blog_id, title } = router.query;
    console.log("blog_id", blog_id, title)
    return (
        <main>
            <Nav />
            <Breadcrumbs 
            fullWidth={true}
            className="lg:pl-40 cursor-pointer py-1.5 lg:py-20 font-bold text-primary text-md lg:text-2xl bg-white">
                <a href="#" className="opacity-60">
                    <Icon icon="ant-design:home-filled" color="#000" height="24" />
                </a>
                <a href="#" className="text-primary" onClick={() => router.push('/Blog')}>Blog</a>
                <a href="#" className="text-primary">{title}</a>
            </Breadcrumbs>
            <div className="px-4 lg:px-40">
                <Typography className="font-bold text-lg py-2 lg:text-3xl" variant="h1">{title}</Typography>
                <Img
                src="https://firebasestorage.googleapis.com/v0/b/mybrand-app-9594a.appspot.com/o/images%2FDSC_4718.JPG?alt=media&token=eb125fd8-3f5e-4dbc-b6f8-f8ff42ebdf6b"
                width="800"
                height="800" 
                styles="rounded-md shadow-md"
                 />
                 <Typography variant="h6" className="text-primary">August 16, 2022</Typography>
                 <Typography variant="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suspendisse phasellus enim nulla tortor dui. Massa dictumst massa ut sodales. Risus vitae fringilla sagittis lorem libero arcu at massa at. Commodo id nec aenean sagittis a ultricies elementum leo.</Typography>
                 <div className="flex flex-col lg:py-2 lg:my-2 lg:border-b-2 border-primary">
                    <Textarea color="green" label="Write your comments" className="lg:w-96" />
                    <Button color="green" className="my-2 lg:w-32">Comment</Button>
                    <Typography className="font-bold" variant="lead">Latest comments here</Typography>
                    <Typography className="" variant="small">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pellentesque elit neque blandit dolor sit leo.</Typography>
                    <Typography className="font-bold text-primary" variant="small">1 min ago, by Serial M</Typography>
                 </div>
            </div>
            <footer>
                <Footer />
            </footer>
        </main>
    )
}
export default Post;