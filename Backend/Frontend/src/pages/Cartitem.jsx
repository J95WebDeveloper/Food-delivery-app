import React, { useState } from 'react'
import {foodList} from '../assets/assets'


function Cartitem() {

     const [category, setCategory] = useState('All Chicken Dish')

  return (
    <div className='px-8 flex flex-col items-center justify-center'>
           <h1 className='text-4xl font-medium mb-13 lg:mb-10 relative'> Our Special <span className='widget'>Offers</span></h1>
           <div className='flex gap-5 flex-col md:flex-row'>
            { foodList.map((item, index) => {
               return(
                 <div key={index} onClick={() => setCategory((prev) => prev === item.menu_name ? "All Chicken Dish" : item.menu_name)} 
                 className={`${category === item.menu_name ? "bg-white text-primary cart rounded-full" : ""} 
                 flex items-center gap-3 font-medium pr-5 hover:bg-white p-3 hover:text-primary item rounded-full`}> 
                    <div className='w-12 h-12 border-[1px] flex items-center justify-center rounded-full'>
                    <img src={item.menu_image} className='w-8 h-8'/>
                    </div>
                    <p className='text-[20px] md:text-[17px] cursor-pointer'>{item.menu_name}</p>
                 </div>
               )
            })}
           </div>
        </div>
  )
}

export default Cartitem