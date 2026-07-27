import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
    text: 'Home',
    href: '/',
  },
  {
      text: 'Services',
      href: '#services',
    },
    {
      text: 'Clients',
      href: '#clients',
    },
    {
      text: 'Portfolio',
      href: '#portfolio',
    },
    {
      text: 'Contact',
      href: '#contact',
    },
  ],

  actions: [
    {
      text: "Let's Talk",
      href: '#contact',
    },
  ],
};

export const footerData = {
  links: [],
  secondaryLinks: [],
  socialLinks: [],
  footNote: `© 2026 Tehreem. All rights reserved.`,
};