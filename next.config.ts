import type {NextConfig} from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "source.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "graph.facebook.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "storage.googleapis.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "d2asf7zu02rn6g.cloudfront.net",
        port: "",
        pathname: "/**",
      },
    ],
  },
  trailingSlash: true,
  async rewrites() {
    return [
      {
        source: "/auth/:path*",
        destination:
          "https://baptizo-user-management-and-auth.onrender.com/auth/:path*",
      },
      {
        source: "/user/:path*",
        destination:
          "https://baptizo-user-management-and-auth.onrender.com/user/:path*",
      },
      {
        source: "/billing/:path*",
        destination:
          "https://baptizo-billing-and-subscription.onrender.com/billing/:path*",
      },
      {
        source: "/content/:path*",
        destination:
          "https://baptizo-access-control-microservice.onrender.com/content/:path*",
      },
      {
        source: "/metadata/:path*",
        destination:
          "https://baptizo-content-delivery-and-metadata.onrender.com/metadata/:path*",
      },
      {
        source: "/search/:path*",
        destination:
          "https://baptizo-search-and-recommendation.onrender.com/search/:path*",
      },
      {
        source: "/wishlist/:path*",
        destination:
          "https://baptizo-user-preferences-and-wishlist.onrender.com/wishlist/:path*",
      },
      {
        source: "/activity/:path*",
        destination:
          "https://baptizo-user-preferences-and-wishlist.onrender.com/activity/:path*",
      },
      {
        source: "/reviews/:path*",
        destination:
          "https://baptizo-reviews-ratings-and-comments.onrender.com/reviews/:path*",
      },
      {
        source: "/comments/:path*",
        destination:
          "https://baptizo-reviews-ratings-and-comments.onrender.com/comments/:path*",
      },
    ];
  },
};

export default nextConfig;
