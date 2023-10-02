import React from 'react'
import {FaMapMarkerAlt} from 'react-icons/fa';
import Form from '../../components/form/Form';
import Feature from '../../components/feature/Feature';
import { Carousel } from 'react-responsive-carousel';
import "./slider.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";

const PropertyDetails = ({property}) => {
  // property data structure

 const { title, price, location, description, room, bed, bath, sft, imageGallery} = property || {};
  
  return (
    <div>
      <div>
          <div>
              <h3 className='text-xl text-black font-medium mb-2'>{title}</h3>
              <p className='flex items-center gap-1 text-base font-normal mb-5'><FaMapMarkerAlt></FaMapMarkerAlt> {location}</p>
              <div className='text-center'>
                  <Carousel>
                      {imageGallery?.map((gallery)=><div>
                          <img src={gallery} alt="property gallery" />
                      </div>)}
                  </Carousel>
              </div>
          </div>
          <div className='grid grid-cols-3 gap-10 mt-10'>
              {/* Overview */}
              <div className='col-span-2'>
                  <div className='bg-white p-10 rounded-lg mb-10'>
                      <div className='flex items-center justify-between'>
                          <h3 className='text-2xl text-black font-medium mb-3'>Overview</h3>
                          <h4 className='text-blue-600 text-2xl font-semibold'>${price} <small className='text-base text-black font-normal'>/month</small></h4>
                      </div>
                      <hr />
                      <div className='grid grid-cols-4 mt-5'>
                          <Feature 
                            room={room}
                            bed={bed}
                            bath={bath}
                            sft={sft}
                          ></Feature>
                      </div>
                  </div>
                  <div>
                      <div className='bg-white p-10 rounded-lg'>
                           <h3 className='text-2xl text-black font-medium mb-3'>Description</h3>
                           <hr />
                           <p className='text-base mt-5 font-normal'>{description}</p>
                      </div>
                  </div>
              </div>
              {/* right side */}
              <div className='bg-white p-10 rounded-lg'>
                <h3 className='text-2xl text-black font-medium mb-3'>Contact Us</h3>
                <Form></Form>
              </div>
          </div>
      </div>
    </div>
  )
}

export default PropertyDetails