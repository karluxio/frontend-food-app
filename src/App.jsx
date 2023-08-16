import { Category, Food, HeadLineCards, Hero, Navbar } from "./components";

export const App = () => {
  return (
    <>
      <div className="">
        <Navbar />
        <Hero />
        <HeadLineCards />
        <Food />
        <Category />
      </div>
    </>
  );
};
