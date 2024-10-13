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
  "https://drive.google.com/file/d/1eAOJMsFaPEkk5FbOoLWIhujbpwZohO1B/view?usp=drive_link";
