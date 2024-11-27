import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

export const projectDetailsPageBreadcrumbs = [
  {
    href: "/",
    displayText: "Home",
  },
  {
    href: "/projects",
    displayText: "Projects",
  },
];

export const blogDetailsPageBreadcrumbs = [
  {
    href: "/",
    displayText: "Home",
  },
  {
    href: "/blogs",
    displayText: "Blogs",
  },
];

export const navLinks = [
  {
    id: 1,
    pathname: "/",
    name: "Home",
  },
  {
    id: 2,
    pathname: "/blogs",
    name: "Blogs",
  },
  {
    id: 3,
    pathname: "/projects",
    name: "Projects",
  },
  // {
  //   id: 4,
  //   pathname: "/amessagetomyfellow",
  //   name: "A message to my fellow",
  // },
];

export const socialLinks = [
  {
    id: 1,
    link: "https://www.facebook.com/myo.h.san.754",
    Component: FaFacebook,
  },
  {
    id: 2,
    link: "https://github.com/Myo-Htet-San-Brainy",
    Component: FaGithub,
  },
  {
    id: 3,
    link: "https://www.linkedin.com/in/myo-htet-san-brainy-a4b680239/",
    Component: FaLinkedin,
  },
];

export const resumeLink =
  "https://drive.google.com/file/d/11z6JV4atNg73HmN0ZFzBXqyLJl3H9Bs3/view?usp=sharing";

export const warningIconSVG = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 shrink-0 stroke-current"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
    />
  </svg>
);
