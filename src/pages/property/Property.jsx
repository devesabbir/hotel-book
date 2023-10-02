import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PropertyDetails from './PropertyDetails';

const Property = () => {

  const {property_id} = useParams();
  const [propertyData, setPropertyData] = useState()


  const loadSingleProperty = () => {
     const data = JSON.parse(localStorage.getItem('data'))
     if (data) {
        const single = data.find((item)=> item.id === property_id);
        setPropertyData(single)
     }
  }

  useEffect(() => {
    loadSingleProperty()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <div className='py-20 bg-neutral-100'>
      <div className='container mx-auto xl:px-20 md:px-10 sm:px-2 px-4'>
          <PropertyDetails property={propertyData}/>
      </div>
    </div>
  )
}

export default Property