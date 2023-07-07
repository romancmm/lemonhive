// import type { Icon, MEDIA_TYPE, Profile, User } from "@prisma/client"

export type SetState<T> = React.Dispatch<React.SetStateAction<T>>;

export type NavItem = {
  title: string;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  external?: boolean;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  children?: NavItem[];
};

export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  default_logo: string;
  ogImage: string;
  links: {
    twitter: string;
    github: string;
  };
  mainNav: NavItem[];
  socialLinks: NavItem[];
  copyright: string;
  city: string;
  address: string;
  tell: string;
  email: string;
};
