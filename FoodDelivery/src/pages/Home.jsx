import React, { useContext } from "react";
import Nav from "../components/Nav";
import { categories } from "../Category";
import Card from "../components/Card";
import { food_items } from "../food";
import { useState } from "react";
import { dataContext } from "../Context/UserContext";
import { ImCancelCircle } from "react-icons/im";
import { MdTranslate } from "react-icons/md";
import Card2 from "../components/Card2";
import { useSelector } from "react-redux";

const Home = () => {
  let { cate, setCate, input, setInput, showCart, setShowCart } =
    useContext(dataContext);

  function filter(category) {
    if (category === "All") {
      setCate(food_items);
    } else {
      let newList = food_items.filter(
        (item) => item.food_category.toLowerCase() === category.toLowerCase()
      );
      setCate(newList);
    }
  }
  //   redux code

  let items = useSelector((state) => state.cart);

  let subtotal = items.reduce((total, item) => total + item.qty * item.price, 0);
  let deliveryFee = 20;
  let taxes = (subtotal * 0.5) / 100;
  let total = Math.floor(subtotal + deliveryFee + taxes);

  console.log(total);

  return (
    <div className="bg-slate-200 w-full min-h-screen">
      <Nav />

      {!input ? (
        <div className="flex flex-wrap justify-center items-center gap-5 w-[100%]">
          {categories.map((item) => {
            return (
              <div
                className="w-[140px] h-[130px] bg-white flex flex-col items-start gap-5 p-5 justify-start text-[18px] text-gray-600 font-semibold rounded-md shadow-md hover:bg-green-200 cursor-pointer transition-all duration-200 "
                onClick={() => filter(item.name)}
              >
                {item.icon}
                {item.name}
              </div>
            );
          })}
        </div>
      ) : null}

      <div className="w-full flex flex-wrap gap-5 px-5 pt-8 pb-8 justify-center items-center">
       {cate.length >1 ? cate.map((item) => (
          <Card
            name={item.food_name}
            image={item.food_image}
            price={item.price}
            id={item.id}
            type={item.food_type}
          />
        )) : <div className="text-red-400 text-[20px] font-semibold flex flex-col justify-center items-center pt-8 font-serif ">
          Item Not Found 
          <img className="w-[280px] h-[350px] pt-3  " src="micky.png" alt="not found " /></div>}
        
      </div>

      <div
        className={`w-full md:w-[40vw] h-[100%] fixed top-0 right-0 bg-white shadow-xl p-6 transition-all duration-500 flex flex-col overflow-auto
          ${
          showCart ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <header className="w-[full] flex justify-between items-center">
          <span className="text-green-400 text-[18px] font-semibold">
            Orderd Items{" "}
          </span>
          <ImCancelCircle
            className="w-[20px] h-[20px] text-green-400 text-[18px] font-semibold cursor-pointer hover:text-red-500"
            onClick={() => {
              setShowCart(false);
            }}
          />
        </header>

        {/* Conditional bases display the slide cart section  */}

         {items.length > 0 ?  <>

        {/* showing data By using redux  */}
        <div className="w-full mt-9 flex flex-col gap-8">
          {items.map((item) => (
            <Card2
              key={item.id}
              name={item.name}
              price={item.price}
              image={item.image}
              id={item.id}
              qty={item.qty}
            />
          ))}
        </div>

        {/* Price Section   */}
        <div className="w-full border-t-2 border-b-2  border-gray-400 mt-7 flex flex-col gap-2 p-8">
          <div className=" w-full flex items-center justify-between">
            <span className="font-semibold text-gray-600 text-lg">
              Subtotal
            </span>
            <span className="font-semibold text-green-400 text-lg">
              Rs {subtotal}/-
            </span>
          </div>
          <div className=" w-full flex items-center justify-between">
            <span className="font-semibold text-gray-600 text-lg">
              DeliveryFee
            </span>
            <span className="font-semibold text-green-400 text-lg">
              Rs {deliveryFee}/-
            </span>
          </div>
          <div className=" w-full flex items-center justify-between">
            <span className="font-semibold text-gray-600 text-lg">Taxes </span>
            <span className="font-semibold text-green-400 text-lg">
              Rs {taxes}/-
            </span>
          </div>
        </div>
       
         
          <div className=" w-full flex items-center justify-between p-8">
            <span className="font-bold text-gray-600 text-xl">Total Pay  </span>
            <span className="font-semibold text-green-400 text-xl">
              Rs {total}/-
            </span>
          </div>

           <button className='w-full p-3 bg-green-400 rounded-lg text-white hover:bg-green-600 transition-all font-semibold cursor-pointer'>Place Order</button>
        </> :<div className="text-red-400 text-[20px] font-semibold flex flex-col justify-center items-center pt-8 font-serif ">  Empty Card <img className="w-[280px] h-[350px] pt-3 " src="micky.jpg" alt="not found " /></div>}
        
      </div>
      
    </div>
  );
};

export default Home;
