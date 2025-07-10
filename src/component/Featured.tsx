import Image from "next/image";
import React from "react";

const products = [
  {
    id: 1,
    name: "MARGHERITA MAGIC",
    description:
      "Upscale pizzeria’s extra treat, smothering a thin crust with tomato, fresh basil, creamy mozzarella, and olive oil.",
    price: "$24.90",
    image: "/pizza-1.jpg",
  },
  {
    id: 2,
    name: "GARLIC PARMESAN LINGUINE",
    description:
      "A garlic lover’s delight, smothered in creamy Parmesan sauce with garlic, parsley, peppers, and cherry tomatoes.",
    price: "$28.90",
    image: "/pizza-2.jpg",
  },
  {
    id: 3,
    name: "MEDITERRANEAN DELIGHT",
    description:
      "Feta, Kalamata olives, sun-dried tomatoes, and a sprinkle of oregano on a golden crust.",
    price: "$32.90",
    image: "/pizza-3.jpg",
  },
];

const Featured = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md rounded-lg text-center p-4 hover:shadow-xl transition"
          >
            <Image
              src={item.image}
              alt={item.name}
              width={300}
              height={300}
              className="mx-auto rounded object-cover"
            />
            <h3 className="text-lg font-semibold mt-4">{item.name}</h3>
            <p className="text-sm text-gray-600 mt-2">{item.description}</p>
            <p className="text-red-600 font-bold mt-3">{item.price}</p>
            <button className="mt-3 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
