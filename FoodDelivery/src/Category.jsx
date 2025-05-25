import { FaBorderAll } from "react-icons/fa";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { MdSoupKitchen } from "react-icons/md";
import { FaBurger } from "react-icons/fa6";
import { GiFullPizza } from "react-icons/gi";
import { CiBowlNoodles } from "react-icons/ci";
import { MdOutlineFoodBank } from "react-icons/md";



export const categories = [
    {
    id:1,
    name:"All",
    icon:<FaBorderAll className="text-[60px] text-green-600"/>,
    

},
{
    id:2,
    name:"BreakFast",
    icon:<MdOutlineFreeBreakfast className="text-[60px] text-green-600"/>,


},
{
    id:3,
    name:"Soups",
    icon:<MdSoupKitchen className="text-[60px] text-green-600" />,


},
{
    id:4,
    name:"Noodles",
    icon:<CiBowlNoodles className="text-[60px] text-green-600"/>,

},
{
    id:5,
    name:"Main_course",
    icon:<MdOutlineFoodBank className="text-[60px] text-green-600"/>,


},
{
    id:6,
    name:"Pizza",
    icon:<GiFullPizza className="text-[60px] text-green-600" />,


},
{
    id:7,
    name:"Burger",
    icon:<FaBurger className="text-[60px] text-green-600"/>,


},

]