import React from 'react'
import image1 from "../assets/image1.avif"
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import { FaRupeeSign } from "react-icons/fa";
import { AddItem } from '../redux/cartSlice';
import { useDispatch } from 'react-redux';



const Card = ({name,image,id,price,type}) => {

  let dispatch = useDispatch();
  
  return (
    <div className='w-[300px] h-[350px] bg-white p-1 flex flex-col gap-3 shadow-xl rounded-lg hover:shadow-green-500 '>
       <div className='w-[100%] h-[60%] overflow-hidden rounded-lg'>
          <img src={image} alt=""  className='object-cover rounded-lg'/>
       </div>
       <div className='text-2xl font-semibold '>
        {name}
       </div>
       <div className='flex justify-between items-center w-full '>
        <div className='text-lg font-semibold text-green-500 flex items-center justify-center gap-2 px-2'>{price}<FaRupeeSign /></div>
        <div className='flex justify-center items-center gap-2 text-green-500 text-lg text-semibold px-2'>{type=="veg"?<LuLeafyGreen />:<GiChickenOven /> }<span>{type}</span></div>
       </div>
          <button className='w-full p-3 bg-green-400 rounded-lg text-white hover:bg-green-600 transition-all font-semibold'
          onClick ={()=>dispatch(AddItem({id:id , name:name , price:price , image:image , qty:1 }))}>Add to Cart</button>
    </div>
  )
}

export default Card