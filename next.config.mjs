/** @type {import('next').NextConfig} */
// import path from "path";
// import { fileURLToPath } from "url";
// const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
// const __dirname = path.dirname(__filename); // get the name of the directory

const nextConfig = {
  output: "export",
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "thumbnailer.mixcloud.com" },
    ],
  },
};

export default nextConfig;
