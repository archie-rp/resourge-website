import { mainMenuOfLibraries } from "@/lib/consts";
import type { NavMenuConfig } from "@/types";

export const navMenuConfig: NavMenuConfig = {
  packagesNav: [
    {
      title: "Packages",
      items: mainMenuOfLibraries,
    },
  ],
  links: [
    {
      title: "FAQ",
      href: "/faq",
    },
    {
      title: "About",
      href: "/about",
    },
  ],
};
