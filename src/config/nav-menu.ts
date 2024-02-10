import type { NavMenuConfig } from "@/types";

export const navMenuConfig: NavMenuConfig = {
  packagesNav: [
    {
      title: "Packages",
      items: [
        {
          title: "React Form",
          description:
            "Build forms easily in React with customizable options and validations.",
          href: "/docs/react-form/intro",
        },
        {
          title: "Vue 3 Hook Form",
          description:
            "Build forms easily in Vue 3 with customizable options and validations.",
          href: "/docs/vue3-hook-form/intro",
        },
        {
          title: "Schemas",
          description:
            "Simplify data validation with nested schemas and custom rules.",
          href: "/docs/schema/intro",
        },
        {
          title: "Translations",
          description:
            "Create multilingual applications with a simple API and translation key handling.",
          href: "/docs/translations/intro",
        },
        {
          title: "React Router",
          description:
            "Enable client-side routing in your app without server requests.",
          href: "/docs/react-router/intro",
        },
        {
          title: "React Hook Table",
          description:
            "Control tables easily with a set of React hooks.",
          href: "/docs/react-hook-table/intro",
        },
        {
          title: "React Search Params",
          description:
            "Manage current URL parameters with a set of React hooks.",
          href: "/docs/react-search-params/intro",
        },
        {
          title: "Fetch",
          description:
            "Fetch data in your React app with a simpler Service, including caching and retrying.",
          href: "/docs/fetch/intro",
        },
      ],
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
