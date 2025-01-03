import vegBiryani from "../assets/platter-images/biryanies/veg.png";
import chickenBiryani from "../assets/platter-images/biryanies/chicken.png";
import eggBiryani from "../assets/platter-images/biryanies/egg_biryani.png";
import prawnBiryani from "../assets/platter-images/biryanies/prawn_biryani.jpg";
import muttonBiryani from "../assets/platter-images/biryanies/mutton_biryani.jpg";

// Starter images
import starter1 from "../assets/platter-images/starter/starter1.jpg";
import starter2 from "../assets/platter-images/starter/starter2.jpg";
import starter3 from "../assets/platter-images/starter/starter3.jpg";
import starter4 from "../assets/platter-images/starter/starter4.jpg";

// Beverages images
import beverages1 from "../assets/platter-images/beverages/beverages1.jpg";
import beverages2 from "../assets/platter-images/beverages/beverages2.jpg";
import beverages3 from "../assets/platter-images/beverages/beverages3.png";

export const categoriesJson = [
    {
      name: "Starter",
      items: [
        {
          id: 1,
          name: "Paneer 65",
          description: "Crispy fried paneer",
          image: starter1,
        },
        {
          id: 2,
          name: "Crispy Corn",
          description: "Crispy corn",
          image: starter2,
        },
        {
          id: 3,
          name: "Spring Rolls",
          description: "Delicious rolls",
          image: starter4,
        },
        {
          id: 4,
          name: "Manchurian",
          description: "Spicy dish",
          image: starter3,
        },
      ],
    },
    {
      name: "Biryani",
      items: [
        {
          id: 5,
          name: "Chicken Biryani",
          description: "Flavorful Rice",
          image: chickenBiryani,
        },
        {
          id: 6,
          name: "Veg Biryani",
          description: "Vegetarian Rice",
          image: vegBiryani,
        },
        {
          id: 7,
          name: "Mutton Biryani",
          description: "Rich Flavor",
          image: muttonBiryani,
        },
        {
          id: 8,
          name: "Egg Biryani",
          description: "Egg Rice",
          image: eggBiryani,
        },
        {
          id: 9,
          name: "Prawn Biryani",
          description: "Seafood Delight",
          image: prawnBiryani,
        },
      ],
    },
    {
      name: "Beverages",
      items: [
        {
          id: 10,
          name: "Shake",
          description: "Chilled drink",
          image: beverages1,
        },
        {
          id: 11,
          name: "Pepsi",
          description: "Refreshing drink",
          image: beverages2,
        },
        {
          id: 12,
          name: "Lemonade",
          description: "Cool and tangy",
          image: beverages3,
        },
        {
          id: 13,
          name: "Iced Tea",
          description: "Sweetened tea",
          image: beverages3,
        },
      ],
    },
  ];
  

//   Categories --------
export const categories = [
  { name: "Starter", avatar: starter1 },
  { name: "Biryani", avatar: chickenBiryani },
  { name: "Beverages", avatar: beverages1 },
];
