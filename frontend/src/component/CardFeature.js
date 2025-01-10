import React from 'react';
import { Link } from 'react-router';
import { addCartItem } from '../redux/productSlice';
import { useDispatch } from 'react-redux';


function CardFeature({image, name, category, price,loading,id }){ 
    const dispatch= useDispatch();
    const handleAddCartProduct= (e)=>{
    // e.stopPropagation();
    dispatch(addCartItem({
        _id:id,
        name:name,
        price:price,
        category:category,
        image:image,
    }))


  };
  
    return (
    <div className='w-full min-w-[200px] max-w-[200px] bg-white hover:shadow-lg drop-shadow-lg py-5 px-4 cursor-pointer flex flex-col'>
        {
            image ? 
            <>
            <Link to={`/menu/${id}`} onClick={()=>window.scrollTo({top:0, behavior: "smooth"})}>
                <div className='h-28 flex flex-col justify-center items-center'>
                    <img src={image} alt='images' className='h-full' />
                </div>
                    <h3 className='font-semibold text-slate-600 capitalize text-lg mt-4 text-center whitespace-nowrap overflow-hidden'>
                        {name}
                    </h3>
                    <p className='text-slate-500 font-medium text-center'>{category}</p> 
                    <p className= 'font-bold text-center'>
                        <span className='text-red-500'>$</span>
                        <span>{price}</span>
                    </p>
                </Link> 
                <button className='bg-yellow-500 py-1 mt-2 rounded hover:bg-yellow-600 w-full' onClick={handleAddCartProduct}>Add Cart</button>
            
            </>

            :

            (
            <div className='min-h-[150px] flex justify-center items-center'>
                <p>{loading}</p>
            </div>
        )}  
        
    </div>
    
  );
};

export default CardFeature