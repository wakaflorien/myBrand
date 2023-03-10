import { Icon } from "@iconify/react";
import { Breadcrumbs, Typography } from "@material-tailwind/react";
import Link from "next/link";
import { useRouter } from "next/router";
import Footer from "../../components/Footer";
import Img from "../../components/Image";
import Nav from "../../components/Nav";

const SingleProject = () => {
  const router = useRouter();
  const { project_id, title } = router.query;
  console.log(router.query);
  return (
    <>
      <Nav />
      <Breadcrumbs
        fullWidth={true}
        className="bg-secondary lg:pl-40 cursor-pointer py-1.5 lg:py-20 font-bold text-primary text-md lg:text-2x"
      >
        <Link href="/" className="opacity-60">
          <Icon icon="ant-design:home-filled" color="#000" height="24" />
        </Link>
        <a
          href="#"
          className="text-primary"
          onClick={() => router.push("/project")}
        >
          Projects
        </a>
        <a
          href="#"
          className="text-primary"
          // onClick={() => router.push(`/project/${project_id}`)}
        >
          {title}
        </a>
      </Breadcrumbs>
      <div className="px-4 lg:px-40">
        <Typography className="font-bold text-lg py-2 lg:text-3xl" variant="h1">
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
          className="p-1 lg:py-8 font-normal text-md lg:text-lg "
          variant="paragraph"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          suspendisse phasellus enim nulla tortor dui. Massa dictumst massa ut
          sodales. Risus vitae fringilla sagittis lorem libero arcu at massa at.
          Commodo id nec aenean sagittis a ultricies elementum leo. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Vestibulum suspendisse
          phasellus enim nulla tortor dui. Massa dictumst massa ut sodales.
          Risus vitae fringilla sagittis lorem libero arcu at massa at. Commodo
          id nec aenean sagittis a ultricies elementum leo. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Vestibulum suspendisse
          phasellus enim nulla tortor dui. Massa dictumst massa ut sodales.
          Risus vitae fringilla sagittis lorem libero arcu at massa at. Commodo
          id nec aenean sagittis a ultricies elementum leo. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Vestibulum suspendisse
          phasellus enim nulla tortor dui. Massa dictumst massa ut sodales.
          Risus vitae fringilla sagittis lorem libero arcu at massa at. Commodo
          id nec aenean sagittis a ultricies elementum leo.
        </Typography>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default SingleProject;
