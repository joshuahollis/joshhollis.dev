import { TimelineProjectProps } from '../../components/timeline-project';

export const TimelineProjects: (Omit<
  TimelineProjectProps,
  'isRight' | 'isFirst' | 'isLast' | 'newYear'
> & { date: string })[] = [
  {
    name: 'Generative AI Concierge',
    url: 'https://movez.ai',
    date: new Date('2024-05-23').toISOString(),
    organization: 'Movez AI (movez.ai)',
    description: 'Generative AI Concierge designed to enhance experiences, discover places, and assist with various things, providing personalized recommendations and support.',
    secondaryDescription: '',
  },
  
  {
    name: 'Moves',
    url: 'https://movesapp.io',
    date: new Date('2019-07-01').toISOString(),
    organization: 'Moves',
    description: 'A platform dedicated to Web3 short-form video content, allowing users to create, share, and engage with a vibrant community of content creators.',
    secondaryDescription: '',
  },
  
  {
    name: 'Movez',
    url: 'https://movez.com',
    date: new Date('2017-07-02').toISOString(),
    organization: 'Movez',
    description: 'A web3 vertically integrated experience management and discovery PaaS that streamlines the process of finding and managing experiences across various domains.',
    secondaryDescription: '',
  },
  
  {
    name: 'joshhollis.dev',
    url: 'https://github.com/joshuahollis/joshhollis.dev',
    date: new Date('2023-04-01').toISOString(),
    organization: 'personal',
    description: 'This personal website showcases my portfolio, projects, and experiences, built using modern web technologies including Next.js, Radix UI, and Tailwind CSS.',
    secondaryDescription: 'Designed in Figma, focusing on user experience and aesthetic appeal.',
  },
//   {
//     name: 'Admin Portal Navigation',
//     url: 'https://movez.ai/changelog/improved-navigation-in-admin-portal',
//     date: new Date('2023-02-27').toISOString(),
//     organization: 'Movez AI (movez.ai)',
//     description: '',
//     secondaryDescription: '',
//   },
//   {
//     name: 'Self Serve Slack',
//     url: 'https://movez.ai/changelog/self-serve-creation-of-your-shared-slack-channel',
//     date: new Date('2023-01-13').toISOString(),
//     organization: 'Movez AI (movez.ai)',
//     description: '',
//   },
//   {
//     name: 'Admin Portal Branding',
//     url: 'https://movez.ai/changelog/customize-admin-portal-branding-from-the-dashboard',
//     date: new Date('2022-12-05').toISOString(),
//     organization: 'Movez AI (movez.ai)',
//     description: '',
//     secondaryDescription: '',
//   },
//   {
//     name: 'Admin Portal Feedback',
//     url: 'https://movez.ai/changelog/improved-experience-in-admin-portal',
//     date: new Date('2022-11-10').toISOString(),
//     organization: 'Movez AI (movez.ai)',
//     description: '',
//     secondaryDescription: '',
//   },
//   {
//     name: 'SAML Signing Certificate Docs',
//     url: 'https://movez.ai/docs/sso/signing-certificates',
//     date: new Date('2022-09-01').toISOString(),
//     organization: 'Movez AI (movez.ai)',
//     description: '',
//   },
//   {
//     name: 'Dashboard SCIM',
//     date: new Date('2022-06-01').toISOString(),
//     organization: 'Movez AI (movez.ai)',
//     description: '',
//   },
];