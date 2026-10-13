// src/components/App.tsx

import Product from "./Product";

export default function App() {
  return (
    <>
      <h1>Best selling</h1>

      <Product
        name="Best taco ever"
        imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?w=640"
        price={12.3}
      />
      <Product
        name="Fries and Burger"
        imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?w=640"
        price={12.3}
      />
    </>
  );
}
