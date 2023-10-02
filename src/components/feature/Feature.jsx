import React from 'react'
import { FaBath, FaBed, FaBuilding } from 'react-icons/fa';
import {FiMove } from 'react-icons/fi';

const Feature = ({room,bed,bath,sft}) => {
  return (
    <>
        <div>
            <FaBuilding className='text-lg mb-2'></FaBuilding>
            <p className='text-base font-normal'>{room} Room</p>
        </div>
        <div>
            <FaBed className='text-lg mb-2'></FaBed>
            <p className='text-base font-normal'>{bed} Bed</p>
        </div>
        <div>
            <FaBath className='text-lg mb-2'></FaBath>
            <p className='text-base font-normal'>{bath} Bath</p>
        </div>
        <div>
            <FiMove className='text-lg mb-2'></FiMove>
            <p className='text-base font-normal'>{sft} sft</p>
        </div>
    </>
  )
}

export default Feature