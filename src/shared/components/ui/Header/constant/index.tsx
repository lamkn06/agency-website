import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';

export interface SubNavType {
  id: string;
  name: string;
  link?: string;
  subNav?: SubNavType[];
}

const subNavShop: SubNavType[] = [
  {
    id: 'flours',
    name: 'Flours',
  },
  {
    id: 'ingredients',
    name: 'Ingredients',
  },
  {
    id: 'mixes',
    name: 'Mixes',
  },
  {
    id: 'gluten-free',
    name: 'Gluten-free',
  },
  {
    id: 'tools',
    name: 'Tools',
  },
];

const subNavRecipes: SubNavType[] = [
  {
    id: 'categories',
    name: 'Categories',
  },
  {
    id: 'features',
    name: 'Features',
  },
  {
    id: 'collections',
    name: 'Collections',
  },
  {
    id: 'resources',
    name: 'Resources',
  },
];

const subLearn: SubNavType[] = [
  {
    id: 'blog',
    name: 'Blog',
  },
  {
    id: 'baking-guides',
    name: 'Baking guides',
  },
  {
    id: 'videos',
    name: 'Videos',
  },
  {
    id: 'bake-for-good',
    name: 'Bake for good',
  },
  {
    id: 'resources',
    name: 'Resources',
  },
];

const subBankingSchool: SubNavType[] = [
  {
    id: 'classes-by-category',
    name: 'Classes By Category',
  },
  {
    id: 'classes-by-location',
    name: 'Classes by location',
  },
  {
    id: 'class-calendar',
    name: 'Class calendar',
  },
  {
    id: 'What-to-expect',
    name: 'What to expect',
  },
  {
    id: 'contact-us',
    name: 'Contact us',
  },
];

const subImpact: SubNavType[] = [
  {
    id: 'for-people',
    name: 'For people',
  },
  {
    id: 'for-planet',
    name: 'For planet',
  },
  {
    id: 'food-justice',
    name: 'Food justice',
  },
  {
    id: 'Grains-for-good',
    name: 'Grains for good',
  },
  {
    id: 'impact-report',
    name: 'Impact report',
  },
];

export const dataNavbar: SubNavType[] = [
  {
    id: 'shop',
    link: '/shop',
    name: 'Shop',
    subNav: subNavShop,
  },
  {
    id: 'recipes',
    link: '/recipes',
    name: 'Recipes',
    subNav: subNavRecipes,
  },
  {
    id: 'learn',
    link: '/learn',
    name: 'Learn',
    subNav: subLearn,
  },
  {
    id: 'banking-school',
    name: 'Banking School',
    subNav: subBankingSchool,
  },
  {
    id: 'impact',
    name: 'Impact',
    subNav: subImpact,
  },
];

export const listIconNavbar = [
  {
    id: 'search',
    icon: (
      <SearchRoundedIcon
        fontSize="medium"
        style={{
          fill: 'black',
        }}
      />
    ),
  },
  {
    id: 'user',
    icon: (
      <PersonRoundedIcon
        fontSize="medium"
        style={{
          fill: 'black',
        }}
      />
    ),
  },
  {
    id: 'cart',
    icon: (
      <ShoppingCartRoundedIcon
        fontSize="medium"
        style={{
          fill: 'black',
        }}
      />
    ),
  },
];
