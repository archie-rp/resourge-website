import type { DocsConfig, SidebarNavItem } from "@/types";

export const Libraries = {
  HomePage: '/',
  ReactForm: 'react-form',
  Vue3HookForm: 'vue3-hook-form',
  Schema: 'schema',
  Router: 'react-router',
  Table: 'react-hook-table',
  ReactSearchParams: 'react-search-params',
  Translations: 'translations',
  Fetch: 'fetch',
};

export const LibrariesValues = Object.values(Libraries);

export const reactFormSidebar: SidebarNavItem[] = [
  {
    title: "Guide",
    items: [
      { title: 'Get Started', href: 'intro' },
    ]
  },
  {
    title: "Documentation",
    items: [
      { title: 'Methods', href: 'actions' },
      { title: 'Schema Validations', href: 'schema-validations' },
    ]
  },
  {
    title: 'Context Form', items: [
      { title: 'Context and Provider', href: 'form-provider-context' },
    ]
  },
  {
    title: 'Hooks', items: [
      { title: 'useFormSplitter', href: 'use-form-splitter' },
      { title: 'useFormStorage', href: 'use-form-storage' },
    ]
  },
  {
    title: 'Advanced/Performance', items: [
      { title: 'Controller', href: 'controller' },
      { title: 'Form Options', href: 'form-options' },
      { title: 'Setup Errors', href: 'setup-errors' },
    ]
  },
  
  {
    title: "Try now",
    items: [
      { title: 'Playground', href: 'playground' }
    ]
  }
];

export const vue3HookFormSidebar: SidebarNavItem[] = [
  {
    title: "Guide",
    items: [
      { title: 'Get Started', href: 'intro' },
    ]
  },
  {
    title: "Documentation",
    items: [
      { title: 'Methods', href: 'methods' },
    ]
  }
];

export const schemaSidebar: SidebarNavItem[] = [
  {
    title: "Guide",
    items: [
      { title: 'Get Started', href: 'intro' },
    ]
  },
  {
    title: "Documentation",
    items: [
      { title: 'General Rules', href: 'rules' },
      { title: 'String', href: 'string' },
      { title: 'Number', href: 'number' },
      { title: 'Boolean', href: 'boolean' },
      { title: 'Object', href: 'object' },
      { title: 'Date', href: 'date' },
      { title: 'Array', href: 'array' },
      { title: 'Any', href: 'any' },
    ]
  }
];

export const reactRouterSidebar: SidebarNavItem[] = [
  {
    title: "Guide",
    items: [
      { title: 'Get Started', href: 'intro' },
    ]
  },
  {
    title: "Documentation",
    items: [
      { title: 'Setup Paths', href: 'paths' },
      { title: 'Components', href: 'components' },
      { title: 'Hooks', href: 'hooks' },
    ]
  }
];

export const reactHookTableSidebar: SidebarNavItem[] = [
  {
    title: "Guide",
    items: [
      { title: 'Get Started', href: 'intro' },
    ]
  },
  {
    title: "Documentation",
    items: [
      { title: 'Hooks', href: 'hooks' },
      { title: 'Methods', href: 'methods' },
    ]
  }
];

export const reactSearchParamsSidebar: SidebarNavItem[] = [
  {
    title: "Guide",
    items: [
      { title: 'Get Started', href: 'intro' },
    ]
  },
  {
    title: "Documentation",
    items: [
      { title: 'Methods', href: 'methods' },
    ]
  }
];

export const fetchSidebar: SidebarNavItem[] = [
  {
    title: "Guide",
    items: [
      { title: 'Get Started', href: 'intro' },
    ]
  },
  {
    title: "Documentation",
    items: [
      { title: 'Hooks', href: 'hooks' },
      { title: 'Loader', href: 'loader' },
      { title: 'Http Service', href: 'http-service' },
    ]
  }
];

export const translationsSidebar: SidebarNavItem[] = [
  {
    title: "Guide",
    items: [
      { title: 'Get Started - React', href: 'intro-react' },
      { title: 'Get Started - Vue', href: 'intro-vue' },
    ]
  },
  {
    title: "Documentation",
    items: [
      { title: 'useTranslation', href: 'hook' },
      { title: 'Typescript', href: 'typescript' },
      { title: 'Plugin Vite', href: 'plugin' },
      { title: 'Html in translations', href: 'html-dom' }
    ]
  }
];

export const docsConfig: DocsConfig = {
  sidebarNav: [],
}