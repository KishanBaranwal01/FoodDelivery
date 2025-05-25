import React from 'react'
import image1 from "../assets/image1.avif";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { Decrementqty, Incrementqty, RemoveItem } from '../redux/cartSlice';


const Card2 = ({name,id,price,image,qty}) => {
  
  // redux code 
  let dispatch = useDispatch()

  return (
    <div className='w-full h-[120px]  p-2 shadow-lg rounded flex justify-between items-center'>
        <div className='w-[60%] h-full  flex gap-5 '>
            <div className='w-[60%] h-full overflow-hidden rounded-lg'>
                 <img src={image} alt="" className='object-cover'/>
            </div>
            <div className='w-[40%] h-full flex flex-col gap-3'>
                <div className='w-full  text-base text-gray-600 font-semibold sm:text-sm leading-tight '>{name}

                </div>
                
                <div className=' w-[110px] h-[50px] bg-slate-400 flex items-center justify-center rounded-lg overflow-hidden shadow-lg font-semibold border-2 border-green-400 text-xl '>
                    <button className='w-[30%] h-full bg-white flex justify-center items-center text-green-400 hover:bg-slate-200 cursor-pointer  sm:h-10 sm:w-8 active:scale-95 transition-transform 'onClick={()=>{qty>1 ? dispatch(Decrementqty(id)):qty}}>-</button>
                    <span className='w-[40%] h-full bg-slate-200 flex justify-center items-center text-green-400'>{qty}</span>
                    <button className='w-[30%] h-full bg-white flex justify-center items-center text-green-400  hover:bg-slate-200 cursor-pointer sm:h-10 sm:w-8 active:scale-95 transition-transform'onClick={()=>{dispatch(Incrementqty(id))}}>+</button>
                </div>
                {/* <div className='w-[110px] h-[50px] bg-slate-400 flex items-center justify-center rounded-lg overflow-hidden shadow-lg font-semibold border-2 border-green-400 text-xl'>
    <button className='w-[30%] h-full bg-white flex justify-center items-center text-green-400 hover:bg-slate-200 cursor-pointer 
                      sm:h-10 sm:w-8 active:scale-95 transition-transform'>-</button>
    <span className='w-[40%] h-full bg-slate-200 flex justify-center items-center text-green-400'>1</span>
    <button className='w-[30%] h-full bg-white flex justify-center items-center text-green-400 hover:bg-slate-200 cursor-pointer 
                      sm:h-10 sm:w-8 active:scale-95 transition-transform'>+</button>
</div> */}
            </div>
        </div>

          <div className='flex flex-col justify-start items-end gap-6'>
              <span className='text-xl text-green-400 font-semibold'>Rs {price}/- </span>
              <RiDeleteBin6Line className='text-xl text-red-600 font-semibold cursor-pointer'
              onClick={()=>dispatch(RemoveItem(id))}/>

          </div>
    </div>
  )
}

export default Card2