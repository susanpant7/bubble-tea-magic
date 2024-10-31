import mammoth from "mammoth";

const bubbleTeaImages = [
  "/items/bt-1.jpeg",
  "/items/bt-2.jpeg",
  "/items/bt-3.jpeg",
  "/items/bt-4.jpeg",
  "/items/bt-5.jpeg",
  "/items/bt-6.jpeg",
  "/items/bt-7.jpeg",
  "/items/bt-8.jpeg",
];

const getRandomImage = () => {
  const randomIndex = Math.floor(Math.random() * bubbleTeaImages.length);
  return bubbleTeaImages[randomIndex];
};

export const fetchMenuFromDrive = async () => {
  const GOOGLE_DOC_URL =
    //"https://docs.google.com/document/d/1A9kocMAlMvXGGMHWBZBis3JY_7HjRvXHq48ktAhpCr8/edit?usp=sharing";
    "https://docs.google.com/document/d/1A9kocMAlMvXGGMHWBZBis3JY_7HjRvXHq48ktAhpCr8/export?format=docx";
  console.log("inside fetch menu");
  const response = await fetch(GOOGLE_DOC_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch the document");
  }
  // Convert the response to an ArrayBuffer
  const arrayBuffer = await response.arrayBuffer();

  const result = await mammoth.extractRawText({ arrayBuffer });

  try {
    let jsonString = result.value;
    var jsonObj = JSON.parse(jsonString);
    return jsonObj.map((menuItem) => ({
      id: menuItem.id,
      imgPath: menuItem.img ?? getRandomImage(),
      title: menuItem.title,
      description: menuItem.description,
      price: menuItem.price,
    }));
  } catch (error) {
    console.error("Error parsing JSON: " + error.message);
    return [];
  }
};

// const MenuItems = [
//   {
//     id: 1,
//     img: "/items/bt-1.jpeg",
//     title: "Classic Milk Tea",
//     description:
//       "A smooth and creamy base with a hint of black tea. The perfect foundation for any bubble tea adventure.",
//     price: 5.0,
//   },
//   {
//     id: 2,
//     img: "/items/bt-2.jpeg",
//     title: "Taro Milk Tea",
//     description:
//       "A delicious blend of creamy milk tea infused with the sweet and nutty flavor of taro. A popular and comforting choice.",
//     price: 5.5,
//   },
//   {
//     id: 3,
//     img: "/items/bt-3.jpeg",
//     title: "Mango Green Tea",
//     description:
//       "A refreshing twist on classic green tea. Bursting with the sweetness of mango chunks and balanced with the subtle bitterness of green tea.",
//     price: 6.0,
//   },
//   {
//     id: 4,
//     img: "/items/bt-4.jpeg",
//     title: "Strawberry Milk Tea",
//     description:
//       "A delightful combination of sweet strawberries and creamy milk tea. Perfect for those who love a fruity and refreshing drink.",
//     price: 5.75,
//   },
//   {
//     id: 5,
//     img: "/items/bt-5.jpeg",
//     title: "Wintermelon Milk Tea",
//     description:
//       "A unique and refreshing drink made with wintermelon syrup. The sweet and slightly floral notes are a delightful surprise.",
//     price: 6.25,
//   },
//   {
//     id: 6,
//     img: "/items/bt-6.jpeg",
//     title: "Coconut Milk Tea",
//     description:
//       "A creamy and tropical treat. The subtle sweetness of coconut milk pairs perfectly with your choice of tea base.",
//     price: 5.25,
//   },
//   {
//     id: 7,
//     img: "/items/bt-7.jpeg",
//     title: "Passion Fruit Green Tea",
//     description:
//       "A tangy and refreshing green tea infused with the exotic flavor of passion fruit. A perfect choice for a hot summer day.",
//     price: 6.5,
//   },
//   {
//     id: 8,
//     img: "/items/bt-8.jpeg",
//     title: "Chocolate Milk Tea",
//     description:
//       "A decadent treat for chocolate lovers. Rich and creamy milk tea with a hint of chocolatey goodness.",
//     price: 6.0,
//   },
//   {
//     id: 9,
//     img: "/items/bt-1.jpeg",
//     title: "Thai Tea Milk Tea",
//     description:
//       "A unique and flavorful blend of Thai tea and creamy milk tea. The perfect balance of sweet, spicy, and creamy.",
//     price: 6.75,
//   },
//   {
//     id: 10,
//     img: "/items/bt-2.jpeg",
//     title: "Coffee Milk Tea",
//     description:
//       "A delicious pick-me-up for coffee lovers. A smooth blend of coffee and creamy milk tea for a perfect afternoon treat.",
//     price: 6.25,
//   },
// ];

//export { MenuItems, fetchMenuFromDrive };
