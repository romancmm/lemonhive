import type { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Lemon Hive",
  description: `Innovative Solutions for a Digital World Trusted Agency`,
  default_logo: "/images/logo.svg",
  url: "https://lemonhive-weld.vercel.app/",
  ogImage: "https://lemonhive-weld.vercel.app/opengraph-image.png",
  copyright: `© ${new Date().getFullYear()} Lemin Hive. All rights reserved.`,
  city: "London",
  address: "20-22 Wenlock Road, London, N1 7GU",
  tell: "+44 207 1188550",
  email: "career@lemonhive.com",
  links: {
    twitter: "https://twitter.com/lemonhive",
    github: "https://github.com/lemonhive",
  },

  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Services",
      href: "#",
      children: [],
    },
    {
      title: "Projects",
      href: "#",
      children: [],
    },
    {
      title: "Blog",
      href: "/blogs",
    },
  ],

  socialLinks: [
    {
      title: "Facebook",
      href: "https://www.facebook.com/lemonhive",
    },
    {
      title: "Twitter",
      href: "https://www.twitter.com/lemonhive",
    },
    {
      title: "Linkedin",
      href: "https://linkedin.com/lemonhive",
    },
    {
      title: "Instagram",
      href: "https://www.instagram.com/lemonhive",
    },
  ],
};
