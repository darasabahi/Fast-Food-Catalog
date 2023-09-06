const FASTFOOD = [
  {
    id: 3,
    name: "McDonald's Burger",
    categoryId: 1,
    price: 150000,
    ingredients:
      "Fresh beef, McDonald's spices, Gouda cheese, olive oil, onions, McDonald's spices",
    imageUrl:
      "https://course-images.s3.ir-thr-at1.arvanstorage.com/restaurant-1.jpg",
  },
  {
    id: 4,
    name: "Fried Chicken",
    categoryId: 4,
    price: 120000,
    ingredients:
      "Fresh chicken meat, Gouda cheese, fried potatoes, sesame oil, soybeans, special tomato sauce, aromatic vegetables",
    imageUrl:
      "https://course-images.s3.ir-thr-at1.arvanstorage.com/restaurant-2.jpg",
  },
  {
    id: 6,
    name: "American Cheeseburger",
    categoryId: 1,
    price: 160000,
    ingredients:
      "Grilled pure beef, caramelized onions, 2 pieces of cheese, pickled cucumber, signature pink sauce, mayonnaise sauce, round bread",
    imageUrl:
      "https://course-images.s3.ir-thr-at1.arvanstorage.com/restaurant-3.jpg",
  },
  {
    id: 8,
    name: "Mushroom Lover Burger",
    categoryId: 1,
    price: 90000,
    ingredients:
      "Grilled pure beef, mushroom sauce, cheese, signature pink sauce, round bread",
    imageUrl:
      "https://course-images.s3.ir-thr-at1.arvanstorage.com/restaurant-4.jpg",
  },
  {
    id: 10,
    name: "\r\nMushroom Zinger",
    categoryId: 1,
    price: 115000,
    ingredients:
      "Fried chicken breast, mushroom sauce, cheese, signature pink sauce, round bread",
    imageUrl:
      "https://course-images.s3.ir-thr-at1.arvanstorage.com/restaurant-5.jpg",
  },
  {
    id: 11,
    name: "Mega Zingerator",
    categoryId: 1,
    price: 105000,
    ingredients:
      "2 pieces of fried chicken breast, 2 pieces of cheese, ham, lettuce, signature pink sauce, mayonnaise sauce, round bread",
    imageUrl:
      "https://course-images.s3.ir-thr-at1.arvanstorage.com/restaurant-6.jpg",
  },
  {
    id: 12,
    name: "\r\nSmoky Burger",
    categoryId: 1,
    price: 97000,
    ingredients:
      "One handmade grilled veal, Gouda cheese, fried onion, tomato, pickled cucumber, smoky sauce, round bread",
    imageUrl:
      "https://course-images.s3.ir-thr-at1.arvanstorage.com/restaurant-7.jpg",
  },
  {
    id: 14,
    name: "Prime Burger\r\n\r\n",
    categoryId: 1,
    price: 115000,
    ingredients:
      "Grilled pure beef, grilled red bell pepper, 2 pieces of cheese, tomato, signature white sauce, mayonnaise sauce, round bread",
    imageUrl:
      "https://course-images.s3.ir-thr-at1.arvanstorage.com/restaurant-8.jpg",
  },
  {
    id: 15,
    name: "Cheeseburger Nostalgia",
    categoryId: 1,
    price: 135000,
    ingredients:
      "Pure grilled beef, cheese, lettuce, tomato, onion, pickled cucumber, ketchup sauce, mayonnaise sauce, round bread",
    imageUrl:
      "https://course-images.s3.ir-thr-at1.arvanstorage.com/restaurant-9.jpg",
  },
  {
    id: 16,
    name: "\r\nSuper Supreme American Pizza",
    categoryId: 2,
    price: 165000,
    ingredients:
      "23 cm handmade American pizza dough, special sauce, 90% meat ham, 90% chicken ham, bell peppers, mushrooms, olives, special pizza cheese",
    imageUrl:
      "https://course-images.s3.ir-thr-at1.arvanstorage.com/restaurant-10.jpg",
  },
  {
    id: 18,
    name: "Chicken and American Mushroom Pizza",
    price: 155000,
    categoryId: 2,
    ingredients:
      "American pizza dough, shaved chicken breast, mushroom, mixed cheese",
    imageUrl:
      "https://course-images.s3.ir-thr-at1.arvanstorage.com/restaurant-11.jpg",
  },
  {
    id: 19,
    name: "Mushroom and American meat pizza",
    price: 135000,
    categoryId: 2,
    ingredients:
      "American pizza dough, minced meat, mushroom, bell pepper, mixed cheese",
    imageUrl:
      "https://course-images.s3.ir-thr-at1.arvanstorage.com/restaurant-12.jpg",
  },
  {
    id: 21,
    name: "Brottchen Bread Port Sandwich",
    categoryId: 3,
    price: 65000,
    ingredients: "Port, Brotchen bread, pickled cucumber, tomato",
    imageUrl:
      "https://course-images.s3.ir-thr-at1.arvanstorage.com/restaurant-13.jpg",
  },
  {
    id: 22,
    name: "Ban Burger Fillet Sandwich",
    categoryId: 3,
    price: 85000,
    ingredients: "Chicken fillet, round bread, pickled cucumber, tomato",
    imageUrl:
      "https://course-images.s3.ir-thr-at1.arvanstorage.com/restaurant-14.jpg",
  },
  {
    id: 23,
    name: "Tanori ham sandwich, bread burger",
    categoryId: 3,
    price: 75000,
    ingredients: "Tanori ham, round bread, pickled cucumber, tomato",
    imageUrl:
      "https://course-images.s3.ir-thr-at1.arvanstorage.com/restaurant-15.jpg",
  },
  {
    id: 24,
    name: "Jumbo sandwich",
    categoryId: 3,
    price: 150000,
    ingredients:
      "One company burger 90% meat 150 grams, one grilled chicken breast, 2 Gouda cheese, tomato, lettuce, pickled cucumber, round bread",
    imageUrl:
      "https://course-images.s3.ir-thr-at1.arvanstorage.com/restaurant-16.jpg",
  },
  {
    id: 25,
    name: "Fried chicken with vegetables",
    categoryId: 4,
    price: 160000,
    ingredients:
      "Fried chicken, lettuce, cabbage, eating fresh vegetables, tomatoes, cucumbers",
    imageUrl:
      "https://course-images.s3.ir-thr-at1.arvanstorage.com/restaurant-17.jpg",
  },
  {
    id: 26,
    name: "\r\npasta cheese mix",
    categoryId: 5,
    price: 165000,
    ingredients: "Pizza cheese, gouda cheese, cheddar cheese, chicken, meat",
    imageUrl:
      "https://course-images.s3.ir-thr-at1.arvanstorage.com/restaurant-18.jpg",
  },
  {
    id: 31,
    name: "Chicken Cheese Pasta",
    categoryId: 5,
    price: 115000,
    ingredients: "Slice of chicken, pizza cheese",
    imageUrl:
      "https://course-images.s3.ir-thr-at1.arvanstorage.com/restaurant-19.jpg",
  },
  {
    id: 32,
    name: "Chicken Penne Alfredo Pasta",
    categoryId: 5,
    price: 145000,
    ingredients: "Alfredo sauce, piece of chicken",
    imageUrl:
      "https://course-images.s3.ir-thr-at1.arvanstorage.com/restaurant-20.jpg",
  },
];
export default FASTFOOD;
