import { ContactLink } from '../models/contact-link';

export const CONTACT_LINKS: ContactLink[] = [
  {
    label: 'Email',
    value: 'nabinkhanal027@gmail.com',
    url: 'mailto:nabinkhanal027@gmail.com',
    actionLabel: 'Send Email',
  },
  {
    label: 'LinkedIn',
    value: 'Nabin Khanal',
    url: 'https://www.linkedin.com/in/nabin-khanal-490877164/',
    actionLabel: 'Connect on LinkedIn',
    external: true,
  },
  {
    label: 'GitHub',
    value: 'nabinkhanaldotcom',
    url: 'https://github.com/nabinkhanaldotcom',
    actionLabel: 'View GitHub',
    external: true,
  },
];