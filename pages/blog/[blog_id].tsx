import { Icon } from "@iconify/react";
import {
  Typography,
  Breadcrumbs,
  Button,
  Textarea,
} from "@material-tailwind/react";
import { useRouter } from "next/router";

import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import Img from "../../components/Image";
import Link from "next/link";
const Post = () => {
  const router = useRouter();
  const { blog_id, title } = router.query;
  return (
    <main>
      <Nav />
      <Breadcrumbs
        fullWidth={true}
        className="lg:pl-40 cursor-pointer py-1.5 lg:py-20 font-bold text-primary text-md lg:text-2xl bg-secondary"
      >
        <Link href="/" className="opacity-60">
          <Icon icon="ant-design:home-filled" color="#000" height="24" />
        </Link>
        <a
          href="#"
          className="text-primary"
          onClick={() => router.push("/blog")}
        >
          Blog
        </a>
        <a href="#" className="text-primary">
          {title}
        </a>
      </Breadcrumbs>
      <div className="px-4 lg:px-40">
        <Typography className="font-bold text-lg py-2 lg:text-3xl text-primary" variant="h1">
          {title}
        </Typography>
        <Img
          src="https://fastly.picsum.photos/id/870/200/300.jpg?blur=2&grayscale&hmac=ujRymp644uYVjdKJM7kyLDSsrqNSMVRPnGU99cKl6Vs"
          width="400"
          height="400"
          styles="rounded-md shadow-md"
        />
        <Typography variant="h6" className="text-primary lg:py-2">
          August 16, 2022
        </Typography>
        <Typography
          className="p-1 font-normal text-black text-md lg:text-lg lg:py-8"
          variant="paragraph"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          suspendisse phasellus enim nulla tortor dui. Massa dictumst massa ut
          sodales. Risus vitae fringilla sagittis lorem libero arcu at massa at.
        </Typography>
        <div className="flex flex-col lg:py-2 lg:my-2 border-primary lg:w-1/3">
          <Textarea color="green" label="Write your comments" className="" />
          <Button color="green" className="my-2 lg:w-32">
            Comment
          </Button>
          <Typography className="font-bold text-black lg:py-4" variant="lead">
            Latest comments here
          </Typography>
          <Typography
            className="p-1 font-normal text-black text-md lg:text-lg "
            variant="small"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            pellentesque elit neque blandit dolor sit leo.
          </Typography>
          <Typography className="font-bold text-primary" variant="small">
            1 min ago, by Serial M
          </Typography>
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </main>
  );
};
export default Post;
