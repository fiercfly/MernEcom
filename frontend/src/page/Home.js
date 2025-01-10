import React, {useRef } from 'react';

import { useSelector } from 'react-redux';
import HomeCard from '../component/HomeCard';
import CardFeature from '../component/CardFeature';
import {GrPrevious} from 'react-icons/gr'
import {GrNext} from 'react-icons/gr'
import AllProduct from '../component/AllProduct';
function Home(){
  const productData= useSelector ((state)=>state.product.productList)
  // console.log(productData)
  const homeProductCartList= productData.slice(0,4)

  //change it as per requirements**************
  const homeProductCartListVegetables= productData.filter(el=>el.category === "vegetable", [])

  const loadingArray= new Array(4).fill(null)
  const loadingArrayFeature= new Array(10).fill(null)

const slideProductRef= useRef()
  const nextProduct=()=>{
    slideProductRef.current.scrollLeft += 200
  }

  const preveProduct=()=>{
    slideProductRef.current.scrollLeft -= 200
  }
  
  return ( 
    <div className='p-2 md:p-4'>
      <div className='md:flex gap-4 py-2'>

        <div className='md:w-1/2 '>
          <div className='flex gap-3 bg-slate-300 w-36 px-2 items-center rounded-full'>
            <p className='text-sm font-medium text-slate-900'>Bike Delivery</p>
            <img src='https://cdn-icons-png.flaticon.com/512/2972/2972185.png' alt='cycleKiPhoto' className='h-7'/>
          </div>
          <h2 className='text-4xl md:text-7xl font-bold py-3'>The Fasttest Delivery in <span className='text-red-600 text-'>Your Home</span></h2>
          <p className='py-3 text-base'>This course is designed for anyone with some basic web development experience who wants to learn how to build a FULLY RESPONSIVE ecommerce site using MERN. By the end of this course, you will have learned how to build a working ecommerce site from scratch, using React, Redux, Nodejs, and MongoDB.</p>
          <button className='font-bold bg-red-500 text-slate-200 px-4 py-2 rounded-md'>Order Now</button>
        </div>


        <div className='md:w-1/2 flex flex-wrap gap-5 p-4 justify-center'>
        { 
          homeProductCartList[0]?
           homeProductCartList.map((el) =>{
            return ( 
              <HomeCard
                key= {el._id}
                id= {el._id}
                image={el.image}
                price={el.price}
                name={el.name}
                category={el.category}
              
              />
            );
          })
          :
          loadingArray.map((el,index)=>{
            return <HomeCard key= {index+ "loading"} loading= {"Loading..."}/>
          })}
        </div>  
      </div>



      <div className=''>
        <div className='flex w-full items-center'>

          <h2 className='font-bold text-2xl text-slate-800 mb-4'>
            Fresh Vegetables
          </h2>

          <div className='ml-auto flex gap-4'>
            <button onClick={preveProduct} className='bg-slate-300 hover:bg-slate-400 text-lg p-1 rounded'><GrPrevious/></button>
            <button onClick={nextProduct} className='bg-slate-300 hover:bg-slate-400 text-lg p-1 rounded'><GrNext/></button>
          </div>

        </div>
        
        <div className='flex gap-5 overflow-scroll scroll-smooth scrollbar-none transition-all' ref={slideProductRef}>
          {
            homeProductCartListVegetables[0]? homeProductCartListVegetables.map(el=>{
              return(
                <CardFeature
                  key= {el._id+"vegetable"}
                  id= {el._id}
                  name={el.name}
                  category={el.category}
                  price={el.price}
                  image={el.image}
                />
              );
            })

            :

            loadingArrayFeature.map((el, index) => <CardFeature loading="Loading..." key={index+ "cartLoading"}/>)
          }
          
        </div>
      </div>

      <AllProduct heading={"Your Product"}/>
  
    </div>
  );
};

export default Home