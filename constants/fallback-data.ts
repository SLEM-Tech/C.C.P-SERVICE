export interface ProductType {
  id: number;
  title: string;
  author: string;
  price: string;
  image: string;
  description?: string;
  permalink: string;
}

export const fallbackBooks: ProductType[] = [
  {
    id: 9001,
    title: "Financial Feminist (Sample)",
    author: "Tori Dunlap",
    price: "NGN20.46",
    image: "/ccp-limited/financial_feminist.png",
    description:
      "A bold feminist finance guide that challenges societal norms.",
    permalink: "#", // Use '#' for links in fallback data
  },
  {
    id: 9002,
    title: "No More Police (Sample)",
    author: "Andrea Ritchie",
    price: "NGN17.66",
    image: "/ccp-limited/no_more_police.png",
    description: "An abolitionist’s take on the future of safety and justice.",
    permalink: "#",
  },
  {
    id: 9003,
    title: "I'm Glad My Mom Died (Sample)",
    author: "Jennette McCurdy",
    price: "NGN26.03",
    image: "/ccp-limited/im_glad.png",
    description: "A raw and honest memoir from a former child star.",
    permalink: "#",
  },
  {
    id: 9004,
    title: "Nona the Ninth (Sample)",
    author: "Tamsyn Muir",
    price: "NGN26.96",
    image: "/ccp-limited/nona.png",
    description: "The next book in the dark, gothic necromantic sci-fi series.",
    permalink: "#",
  },
];

export const mustBuyBooks: ProductType[] = [
  {
    id: 9006,
    title: "Financial Feminist",
    author: "Tori Dunlap",
    price: "NGN20.46",
    image: "/ccp-limited/Carrie_Soto Is_Back.png",
    description:
      "A bold feminist finance guide that challenges societal norms.",
    permalink: "",
  },
  {
    id: 9007,
    title: "No More Police",
    author: "Andrea Ritchie",
    price: "NGN17.66",
    image: "/ccp-limited/Book_Lovers.png",
    description: "An abolitionist’s take on the future of safety and justice.",
    permalink: "#",
  },
  {
    id: 9008,
    title: "I'm Glad My Mom Died",
    author: "Jennette McCurdy",
    price: "NGN26.03",
    image: "/ccp-limited/Harlem_Shuffle.png",
    description: "A raw and honest memoir from a former child star.",
    permalink: "#",
  },
  {
    id: 9009,
    title: "Nona the Ninth",
    author: "Tamsyn Muir",
    price: "NGN26.96",
    image: "/ccp-limited/Two_Old_Women.png",
    description: "The next book in the dark, gothic necromantic sci-fi series.",
    permalink: "#",
  },
];
