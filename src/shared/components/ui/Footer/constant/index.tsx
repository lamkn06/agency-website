export interface FooterType {
  id: string;
  title: string;
  subData: {
    link: string;
    name: string;
  }[];
}

export const dataFooter: FooterType[] = [
  {
    id: 'shop-online',
    title: 'Shop Online',
    subData: [
      {
        link: '',
        name: 'Digital Catalog',
      },
      {
        link: '',
        name: 'Current Promotions',
      },
      {
        link: '',
        name: 'Shipping',
      },
      {
        link: '',
        name: 'Returns & Refunds',
      },
      {
        link: '',
        name: 'Gift Card Balance Lookup',
      },
      {
        link: '',
        name: 'Request a Catalog',
      },
      {
        link: '',
        name: 'Baker Rewards',
      },
      {
        link: '',
        name: 'Affiliate Program',
      },
    ],
  },
  {
    id: 'for-home-bakers',
    title: 'For Home Bakers',
    subData: [
      {
        link: '',
        name: 'Recipes',
      },
      {
        link: '',
        name: 'Baking Guides',
      },
      {
        link: '',
        name: `Baker's Hotline`,
      },
      {
        link: '',
        name: 'Say No to Raw Dough',
      },
      {
        link: '',
        name: 'Baking Classes',
      },
      {
        link: '',
        name: 'Baking Contests',
      },
      {
        link: '',
        name: 'Our Cookbooks',
      },
    ],
  },
  {
    id: 'for-professional-bakes',
    title: 'For Professional Bakers',
    subData: [
      {
        link: '',
        name: 'Bakery & Food Service Sales',
      },
      {
        link: '',
        name: 'Commercial Product Lines',
      },
      {
        link: '',
        name: 'Foodservice Distributors',
      },
      {
        link: '',
        name: 'Classes & Training',
      },
      {
        link: '',
        name: 'Bakery Formulas',
      },
      {
        link: '',
        name: 'Resources & Reference',
      },
    ],
  },
  {
    id: 'our-company',
    title: 'Our Company',
    subData: [
      {
        link: '',
        name: 'Our Product Lines',
      },
      {
        link: '',
        name: 'Find Products Near You',
      },
      {
        link: '',
        name: 'Visit Us',
      },
      {
        link: '',
        name: 'Jobs & Careers',
      },
      {
        link: '',
        name: 'Our History',
      },
      {
        link: '',
        name: 'Diversity, Equity, and Inclusion',
      },
      {
        link: '',
        name: 'Bake For Good (School Program)',
      },
      {
        link: '',
        name: 'Newsroom',
      },
      {
        link: '',
        name: 'Contact Us',
      },
    ],
  },
];

export const dataInformationBottom: { link: string; name: string }[] = [
  {
    link: '#',
    name: 'Supply Chain Disclosure',
  },
  {
    link: '#',
    name: 'Accessibility',
  },
  {
    link: '#',
    name: 'Privacy Policy',
  },
  {
    link: '#',
    name: 'Terms of Use',
  },
  {
    link: '#',
    name: 'Do Not Sell My Information',
  },
  {
    link: '#',
    name: 'My Privacy Choices',
  },
];
