import React, { useEffect, useState } from 'react'
import PropertyCard from '../../components/property-card/PropertyCard'
import { BsArrowRight } from 'react-icons/bs';

// city name list
const cityName=[
  "London",
  "New York",
  "Mumbai",
  "Paris",
]

const PropertyDataLoad = () => {

  const [properties, setProperties] = useState([]); //all properties data
  const [selectedCity, setSelectedCity] = useState('London'); // active data
  const [filteredProperties, setFilteredProperties] = useState([]); // filter data and send display
  const [displayedProperties, setDisplayedProperties] = useState(6); // Number of properties to display
  const [showMoreDisabled, setShowMoreDisabled] = useState(false);

  // property data load form public folder
  useEffect(()=>{
    fetch(`propertyData.json`)
    .then((res)=>res.json())
    .then((data)=> {
      setProperties(data)
      localStorage.setItem('data', JSON.stringify(data))
    })
    .catch((err)=>console.log(err.message))
  },[])

  // filter using cityName
  useEffect(()=>{
    const filtered = properties.filter((property) => property.cityName === selectedCity);
    setFilteredProperties(filtered);
  },[selectedCity, properties])

  // city name target value
  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
    setDisplayedProperties(6);
    setShowMoreDisabled(false); 
  };

  // show more button
  const handleShowMore =()=>{
    const newDisplayedProperties = displayedProperties + 3;
    setDisplayedProperties(newDisplayedProperties);

    if (newDisplayedProperties >= filteredProperties.length) {
      setShowMoreDisabled(true); // Disable the button when all data is displayed
    }
  }

  return (
    <div className='bg-neutral-100 py-20'>
        <div className='container mx-auto'>
          <div className='mb-10'>
              <h1 className='text-4xl font-semibold text-center mb-4'>Featured Listed Property</h1>
              <p className='text-center w-1/3 mx-auto'>Real estate can be bought, sold, leased, or rented, and can be a valuable investment opportunity. The value of real estate can be...</p>
          </div>
          <div className='flex items-center justify-between'>
              {/* city name list show */}
              <div className='flex gap-3 mb-5'>
                  {cityName && cityName.map((cName,index)=><button
                    key={index} 
                    value={cName}
                    onClick={handleCityChange}
                    className={`px-10 py-2 rounded-full text-lg font-medium ${selectedCity === cName ? "bg-blue-600 text-white":"bg-[#EBEBFB]"}`}
                    >{cName}</button>
                  )}
              </div>
              <div>
                  <button className='blue-border-btn flex items-center gap-2'>View All <BsArrowRight></BsArrowRight></button>
              </div>
          </div>
            {/* Property Card data pass */}
            <div className='grid grid-cols-3 gap-10'>
                {filteredProperties && 
                    filteredProperties.slice(0,displayedProperties).map((property,index)=><PropertyCard 
                        key={index} 
                        property={property}
                    ></PropertyCard>
                )}
            </div>
            {/* show more button */}
            <div>
              <div className='text-center mt-10'>
                {!showMoreDisabled && (
                    <button 
                    onClick={handleShowMore}
                    className='blue-btn'>Show More</button>
                )}
              </div>
            </div>
        </div>
    </div>
  )
}

export default PropertyDataLoad
