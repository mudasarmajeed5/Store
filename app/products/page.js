"use client"
import { Ultra } from 'next/font/google'
import React from 'react'
import Data from "./Products.json"
import { FaSearch } from "react-icons/fa";
import { useState } from 'react';

const page = () => {
  const [search, setsearch] = useState("")
  const Products = Data;

  const Filters = [
    {
      "filter": "Makeup"
    },
    {
      "filter": "Unstitched"
    }
  ]

  const Ptypes = [
    {
      "ilter": "Foundation"
    },
    {
      "ilter": "Concelers"
    }
  ]
  return (<>
    <div className="contman p-2 flex justify-center items-center w-full gap-3">
    <input onChange={(e) => { setsearch(e.target.value); filterSearch(e) }} value={search} className='rounded-2xl md:rounded-full bg-[#af245e] text-black text-lg py-1 md:text-[16px] px-3 md:px-2 md:py-0 w-[90vw] md:w-[70vw]' type="search" placeholder='Search for Something' />
    <FaSearch />
    </div>
    <div className='flex md:flex-row flex-col'>
      <div className='Filters border-red-600 w-full md:w-1/5 text-[--secondary-color]'>
        <div className='Listings'>
          {Filters.map((item, index) => {
            return (
              <>
                <div key={index} className='font-bold md:flex-col md:p-2 flex justify-around'>
                  {item.filter}
                </div>
                <ul className='md:ml-8 ml-0'>
                  {Ptypes.map((it, index) => (
                    <li className='text-[--text-color] bg-[--secondary-color] px-2 py-1 hover:bg-[--navbar-color] hover:cursor-pointer transition-all duration-300 mt-2' key={index}>{it.ilter}</li>
                  ))}
                </ul>
              </>
            )
          })}
        </div>
      </div>
      <div className='Products border-red-600 w-full md:w-4/5 '>
        <div className="new-arrivals text-center mt-4 p-2 text-lg md:text-xl xl:text-2xl 2xl:text-4xl font-[Poppins] text-[--navbar-color]">Hot Deals</div>
        <div className="cards md:flex-row flex flex-wrap items-center justify-around w-full">
          {Products.map((item) => {
            return (
              <div key={item.title} className='card w-[200px] md:w-[250px] flex flex-col justify-between relative rounded-lg shadow-red-400 shadow-xl p-2 text-[--body-color]'>
                <div className="image relative py-2">
                  <img className='w-[180px] md:w-[220px] m-1 mx-auto h-[200px] object-cover text-center rounded-md' src={item.image} alt="" />
                </div>
                <div className="item-desc flex justify-between flex-col pl-2">
                  <div className='text-lg font-[Poppins]'>{item.title}</div>
                  <div className='font-bold text-black' >{item.price}</div>
                  <div className="flex justify-between "><button className="hover:bg-black mr-1 w-4/5 text-sm transition-all px-2 py-1 rounded-md text-white bg-gray-900 ">Add item</button><button className='hover:bg-black transition-all px-2 py-1 rounded-md text-sm text-white bg-gray-900'>Details</button></div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  </>
  )
}

export default page
