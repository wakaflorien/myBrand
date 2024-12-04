import { useState, useEffect, FC, useContext } from "react";
import Link from "next/link";
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Icon } from "@iconify/react";
import { useTheme } from "./ThemeProvider";

const Nav: FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      window.innerWidth >= 960 && setOpenNav(false);
    });
  }, []);

  const navList = (
    <ul className={`mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 text-black ${theme === "dark" && "!text-white"}`}>
      <Typography
        as="li"
        variant="small"
        className="p-1 font-normal text-md lg:text-lg"
      >
        <Link href="/#about">About</Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="p-1 font-normal text-md lg:text-lg"
      >
        <Link href="/#portifolio">Projects</Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="p-1 font-normal text-md lg:text-lg "
      >
        <Link href="/#contact">Contact</Link>
      </Typography>
      <IconButton
        variant="text"
        className="ml-0 h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent "
        ripple={false}
        onClick={toggleTheme}
      >
        {theme === "dark" ? (
          <Icon icon="si:clear-day-line" width={18} />
        ) : (
          <Icon icon="mdi:weather-night" width={18} />
        )}
      </IconButton>
    </ul>
  );

  return (
    <Navbar className={`bg-secondary ${theme === "dark" && "bg-darkSecondary"} border-none shadow-none rounded-none py-2 lg:py-4 sticky top-0 z-40`}>
      <div className="container flex items-center justify-between">
        <Typography
          as="li"
          variant="small"
          className={`mr-4 cursor-pointer py-1.5 font-bold text-md lg:text-2xl text-primary`}
        >
          <Link href="/">FN</Link>
        </Typography>
        <div className="hidden lg:block">{navList}</div>

        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6 text-primary"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-primary"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav} className="bg-transparent">
        {navList}
      </MobileNav>
    </Navbar>
  );
};
export default Nav;
