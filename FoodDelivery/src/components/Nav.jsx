import React, { useContext, useEffect } from "react";
import { MdFastfood } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { dataContext } from "../Context/UserContext";
import { food_items } from "../food";
import { useSelector } from "react-redux";

const Nav = () => {
  let { input, setInput, cate, setCate, showCart, setShowCart } =
    useContext(dataContext);

  // for input filter

  useEffect(
    (item) => {
      let newList = food_items.filter(
        (item) =>
          item.food_name.includes(input) ||
          item.food_name.toLowerCase().includes(input)
      );
      setCate(newList);
    },
    [input]
  );

  // redux code
  let items = useSelector((state) => state.cart);
  console.log(items);

  return (
    <>
      <div className="w-full h-[100px] flex justify-between items-center px-5 md:px-8">
        <div className="w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-md">
          <MdFastfood className="w-[40px] h-[40px] text-green-400 " />
        </div>

        <form
          className="w-[45%] h-[60px] md:w-[70%] bg-white flex items-center px-5 gap-5  rounded-md shadow-md"
          onSubmit={(e) => e.preventDefault()}
        >
          <FaSearch className="text-green-500 w-[20px] h-[20px] cursor-pointer" />
          <input
            type="text"
            placeholder="Search Items.."
            className="w-[100%] outline-none text-[16px] md:text-[18px]"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
        </form>

        <div
          className="w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-md relative cursor-pointer"
          onClick={() => {
            setShowCart(true);
          }}
        >
          <span className="absolute top-0 right-0.5 text-green-500 font-bold text-[18px]">
            {items.length}
          </span>
          <FiShoppingBag className="w-[40px] h-[40px] text-green-400 " />
        </div>
      </div>
    </>
  );
};

export default Nav;
