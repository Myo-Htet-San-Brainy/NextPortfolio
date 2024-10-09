/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/dhwwdk7uq/**",
      },
    ],
  },
};

// default img for blog card - https://res.cloudinary.com/dhwwdk7uq/image/upload/v1710056829/blog_pvr9y0.png
// default img for project card -  https://res.cloudinary.com/dhwwdk7uq/image/upload/v1690823157/21daysUserImages/file_bwxexw.jpg

export default nextConfig;
