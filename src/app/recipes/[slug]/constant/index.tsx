export interface RecipesDetailType {
  slug: string;
  name: string;
  description: string;
  numberReviews: number;
  author: string;
  prep: string;
  bake: string;
  total: string;
  YIELD: string;
  images: string[];
}

export const dataRecipesDetailType: RecipesDetailType[] = [
  {
    slug: 'buttery-sourdough-biscuits',
    name: 'Buttery Sourdough Biscuits',
    numberReviews: 589,
    author: 'PJ HAMEL',
    bake: '20 to 23 mins',
    description:
      'These big, palm-sized biscuits are perfect for a breakfast sandwich. Their sourdough tang pairs nicely with egg, ham, sausage, or whatever you choose to stuff them with. Better yet — the recipe uses your "discard" sourdough, the extra starter you might otherwise throw away during the feeding process.',
    images: ['/assets/recipes-detail-1.1.png', '/assets/recipes-detail-1.2.png'],
    prep: '10 mins',
    total: '30 mins',
    YIELD: '6 to 7 large biscuits',
  },
  {
    slug: 'buttermilk-biscuits',
    name: 'Buttermilk Biscuits',
    numberReviews: 400,
    author: 'KING ARTHUR TEST KITCHEN',
    bake: '15 to 20 mins',
    description:
      'Buttermilk biscuits are a classic American treat. Mix together just a few simple ingredients and in less than 30 minutes, you can have fresh, warm biscuits on the table — perfect for a leisurely breakfast, savory supper, or served with jam and a cup of afternoon tea. Formerly known as "Baking Powder Biscuits," this recipe is now called Buttermilk Biscuits to reflect the historical and beloved nature of biscuits made with buttermilk.',
    images: [
      '/assets/recipes-detail-2.1.png',
      '/assets/recipes-detail-2.2.png',
      '/assets/recipes-detail-2.3.png',
    ],
    prep: '20 mins',
    total: '40 mins',
    YIELD: '12 biscuits',
  },
  {
    slug: 'easy-self-rising-biscuits',
    name: 'Easy Self-Rising Biscuits',
    numberReviews: 322,
    author: '',
    bake: '10 to 14 mins',
    description:
      'There is always time to make biscuits with this easy self-rising biscuits recipe! Just add a few pantry staples and you will have these 3-ingredient biscuits coming out of your oven in no time. Best of all, they are pleasantly crunchy on the outside yet moist and tender on the inside. You will be making biscuits every day of the week once you try this recipe.',
    images: [
      '/assets/recipes-detail-3.1.png',
      '/assets/recipes-detail-3.2.png',
      '/assets/recipes-detail-3.3.png',
    ],
    prep: '10 mins',
    total: '20 mins',
    YIELD: 'about 1 dozen 2" biscuits',
  },
  {
    slug: 'buttered-biscuits',
    name: 'Buttered Biscuits',
    numberReviews: 223,
    author: 'PJ HAMEL',
    bake: '20 mins',
    description:
      'Here it is! The very easiest way to make tender, buttered biscuits. Rather than cutting or rubbing butter into flour, then adding liquid, these biscuits are a simple matter of stirring cream into the flour and other dry ingredients. Pat into a round, cut, bake, and enjoy (with an additional pat of butter on top, of course!). ',
    images: [
      '/assets/recipes-detail-4.1.png',
      '/assets/recipes-detail-4.2.png',
      '/assets/recipes-detail-4.3.png',
    ],
    prep: '15 mins',
    total: '1 hr 5 mins',
    YIELD: '9 to 11 biscuits, depending on size',
  },
  {
    slug: 'caramelized-onion-sourdough-biscuits',
    name: 'Caramelized Onion Sourdough Biscuits',
    numberReviews: 435,
    author: 'CHARLOTTE RUTLEDGE',
    bake: '18 to 20 mins',
    description:
      'These biscuits are perfectly balanced, taste-wise: the tanginess of sourdough complements the sweetness of caramelized onions. End result: total deliciousness!',
    images: ['/assets/recipes-detail-5.1.png'],
    prep: '45 mins',
    total: '4 hrs 33 mins',
    YIELD: 'eight 2 1/2" biscuits',
  },
  {
    slug: 'gluten-free-biscuits-made-with-baking-mix',
    name: 'Gluten-Free Biscuits made with baking mix',
    numberReviews: 124,
    author: 'FRANK TEGETHOFF',
    bake: '14 to 18 mins',
    description:
      'These gluten-free biscuits are tender and light, perfect for breakfast sandwiches or dinner. And, come berry season — wonderful for shortcake.',
    images: ['/assets/recipes-detail-6.1.png'],
    prep: '10 mins',
    total: '24 mins',
    YIELD: '8 medium (2 1/2") biscuits',
  },
  {
    slug: 'maple-bacon-biscuit-bake',
    name: 'Maple Bacon Biscuit Bake',
    numberReviews: 163,
    author: 'PJ HAMEL',
    bake: '15 to 20 mins',
    description:
      'Here is one of the easiest, tastiest "sticky buns" you will ever enjoy. Simple biscuit dough is dropped atop a sweet/salty maple-bacon-brown sugar syrup. Once baked, the biscuits are turned out of the pan upside down, so the sticky topping drips down their sides. Trust us; this is a breakfast treat you will find yourself making over and over again.',
    images: ['/assets/recipes-detail-7.1.png'],
    prep: '20 mins',
    total: '1 hr 5 mins',
    YIELD: '16 small biscuit',
  },
  {
    slug: 'buttermilk-biscuits',
    name: 'Buttermilk Biscuits',
    numberReviews: 400,
    author: 'KING ARTHUR TEST KITCHEN',
    bake: '15 to 20 mins',
    description:
      'Buttermilk biscuits are a classic American treat. Mix together just a few simple ingredients and in less than 30 minutes, you can have fresh, warm biscuits on the table — perfect for a leisurely breakfast, savory supper, or served with jam and a cup of afternoon tea. Formerly known as "Baking Powder Biscuits," this recipe is now called Buttermilk Biscuits to reflect the historical and beloved nature of biscuits made with buttermilk.',
    images: [
      '/assets/recipes-detail-2.1.png',
      '/assets/recipes-detail-2.2.png',
      '/assets/recipes-detail-2.3.png',
    ],
    prep: '20 mins',
    total: '40 mins',
    YIELD: '12 biscuits',
  },
  {
    slug: 'easy-self-rising-biscuits',
    name: 'Easy Self-Rising Biscuits',
    numberReviews: 322,
    author: '',
    bake: '10 to 14 mins',
    description:
      'There is always time to make biscuits with this easy self-rising biscuits recipe! Just add a few pantry staples and you will have these 3-ingredient biscuits coming out of your oven in no time. Best of all, they are pleasantly crunchy on the outside yet moist and tender on the inside. You will be making biscuits every day of the week once you try this recipe.',
    images: [
      '/assets/recipes-detail-3.1.png',
      '/assets/recipes-detail-3.2.png',
      '/assets/recipes-detail-3.3.png',
    ],
    prep: '10 mins',
    total: '20 mins',
    YIELD: 'about 1 dozen 2" biscuits',
  },
  {
    slug: 'buttered-biscuits',
    name: 'Buttered Biscuits',
    numberReviews: 223,
    author: 'PJ HAMEL',
    bake: '20 mins',
    description:
      'Here it is! The very easiest way to make tender, buttered biscuits. Rather than cutting or rubbing butter into flour, then adding liquid, these biscuits are a simple matter of stirring cream into the flour and other dry ingredients. Pat into a round, cut, bake, and enjoy (with an additional pat of butter on top, of course!). ',
    images: [
      '/assets/recipes-detail-4.1.png',
      '/assets/recipes-detail-4.2.png',
      '/assets/recipes-detail-4.3.png',
    ],
    prep: '15 mins',
    total: '1 hr 5 mins',
    YIELD: '9 to 11 biscuits, depending on size',
  },
];
