import React from 'react'
import {FaMapMarkerAlt,FaRegHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Feature from '../feature/Feature';

const PropertyCard = ({property}) => {
    // property data structure
    const {img, title, id, price, location, room, bed, bath, sft} = property;
    
  return (
    <div className='bg-white p-3 rounded-lg shadow-sm'>
        <div>
            <div className='relative'>
                <button className='absolute top-2 left-2 bg-white text-blue-600 px-4 py-2 rounded-full text-sm font-medium'>For Rent</button>
                <button className='absolute top-2 right-2 bg-white p-2 rounded-full hover:bg-blue-600 hover:text-white'>
                    <FaRegHeart className='text-lg'></FaRegHeart>
                </button>
                <img className='rounded-lg w-full h-64 object-cover' src={img} alt="Property image" />
            </div>
            <div className='px-4 pt-5'>
                <p className='flex items-center gap-1 text-base font-normal'><FaMapMarkerAlt></FaMapMarkerAlt> {location}</p>
                <h3 className='text-xl text-black font-medium mt-1 mb-3'>{title}</h3>
            </div>
            <div className='grid grid-cols-4 px-4 gap-2 pb-4'>
                <Feature
                    room={room}
                    bed={bed}
                    bath={bath}
                    sft={sft}
                ></Feature>
            </div>
            <div className='px-4 border-dashed border-t pt-2 pb-3'>
                <div className='flex items-center justify-between py-2'>
                    <div>
                        <h4 className='text-blue-600 text-2xl font-semibold'>${price} <small className='text-base text-black font-normal'>/month</small></h4>
                    </div>
                    <div>
                        <Link className='blue-border-btn' to={`/property/${id}`}>Read More</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PropertyCard