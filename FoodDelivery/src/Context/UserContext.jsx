import React, { createContext , useState } from 'react'
import { food_items } from '../food';


export const dataContext = createContext()



const UserContext = ({children}) => {
    const [cate, setCate] = useState(food_items)  
  const [input, setInput] = useState('');
  let [showCart, setShowCart] = useState(false);
  

  let data = {
    input , 
    setInput,
    cate , 
    setCate,
    showCart , 
    setShowCart,
}

  return (
    <div>
        <dataContext.Provider value={data}>
         {children}
        </dataContext.Provider>
    </div>
  )
}

export default UserContext