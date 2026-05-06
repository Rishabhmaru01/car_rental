import React, { useState } from 'react'
import Title from '../../components/owner/Title'
import {assets} from "../../assets/assets"

const AddCar = () => {
 
  const currency = import.meta.env.VITE_CURRENCY
  const [image,setImage] = useState(null)
  const [car,setCar] = useState({
    brand: "",
    model: "",
    year: 0,
    PricePerDay: 0,
    category: "",
    transmission: "",
    fuelType: "",
    seatingCapacity: 0,
    location: "",
    description: ""
  })

  function handleSubmit(e){
    e.preventDefault()
  }

  return (
    <div className='px-4 py-10 md:px-10 flex-1'>

      <Title title='Add New Car' subTitle='Fill in details to list a new car for booking, including pricing, availability, and car specifications.' />

      <form onSubmit={handleSubmit} className='flex flex-col gap-5 text-gray-500 text-sm mt-6 max-w-xl'>

        {/* car image */}
        <div className='flex items-center gap-2 w-full'>
          <label htmlFor="carImage">
            <img src={image ? URL.createObjectURL(image) : assets.upload_icon} alt="" className='h-14 rounded cursor-pointer'/>
            <input type="file" id='carImage' accept='image/*' hidden onChange={(e)=>setImage(e.target.files[0])} />
          </label>
          <p className='text-sm text-gray-500'>Upload a picture of your car</p>
        </div>

        {/* car brand and model */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className='flex flex-col w-full'>
            <label>Brand</label>
            <input type="text" placeholder='e.g. BMW, Audi, TATA...' required className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none' value={car.brand} onChange={(e)=>setCar({...car, brand: e.target.value})} />
          </div>

          <div className='flex flex-col w-full'>
            <label>Model</label>
            <input type="text" placeholder='e.g. X5, Audi-300, SIEARA...' required className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none' value={car.model} onChange={(e)=>setCar({...car, model: e.target.value})} />
          </div>
          
        </div>

        {/* car year, price, category */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
          <div className='flex flex-col w-full'>
            <label>Year</label>
            <input type="number" placeholder='2025' required className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none' value={car.year} onChange={(e)=>setCar({...car, year: e.target.value})} />
          </div>

          <div className='flex flex-col w-full'>
            <label>Daily Price ({currency})</label>
            <input type="number" placeholder='100' required className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none' value={car.PricePerDay} onChange={(e)=>setCar({...car, PricePerDay: e.target.value})} />
          </div>

          <div className='flex flex-col w-full'>
            <label>Category</label>
            <select className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none' onChange={(e)=> setCar({...car, category: e.target.value})} value={car.category}>
              <option value="">Select a category</option>
              <option value="Sedan">Sedan</option>
              <option value="Van">Van</option>
              <option value="SUV">SUV</option>
            </select>
          </div>
        </div>

        {/* car transmission, fuel type, seating capacity */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
          <div className='flex flex-col w-full'>
            <label>Transmission</label>
            <select className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none' onChange={(e)=> setCar({...car, transmission: e.target.value})} value={car.transmission}>
              <option value="">Select a transmission</option>
              <option value="Automatic">Automatic</option>
              <option value="Manual">Manual</option>
              <option value="Semi-automatic">Semi-automatic</option>
            </select>
          </div>

          <div className='flex flex-col w-full'>
            <label>Fuel Type</label>
            <select className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none' onChange={(e)=> setCar({...car, fuelType: e.target.value})} value={car.fuelType}>
              <option value="">Select a Fuel Type</option>
              <option value="Diesel">Diesel</option>
              <option value="Petrol">Petrol</option>
              <option value="Gas">Gas</option>
              <option value="Electric">Electric</option>
            </select>
          </div>

          <div className='flex flex-col w-full'>
            <label>Seating Capacity</label>
            <input type="number" placeholder='4' required className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none' value={car.seatingCapacity} onChange={(e)=>setCar({...car, seatingCapacity: e.target.value})} />
          </div>
        </div>

        {/* Car location */}
        <div className='flex flex-col w-full'>
           <div className='flex flex-col w-full'>
            <label>Location</label>
            <select className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none' onChange={(e)=> setCar({...car, location: e.target.value})} value={car.location}>
              <option value="">Select a Location</option>
              <option value="Delhi">Delhi</option>
              <option value="Jaipur">Jaipur</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Pune">Pune</option>
            </select>
          </div>
        </div>

        {/* car description */}
        <div className='flex flex-col w-full'>
          <label>Description</label>
          <textarea rows={5} placeholder='e.g. A luxurious SUV a spacious interior and a powerful engine.' required className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none' value={car.description} onChange={(e)=>setCar({...car, description: e.target.value})}>
          </textarea>
        </div>

        <button className='flex items-center gap-2 px-4 py-2.5 mt-4 bg-blue-500 text-white rounded-md font-medium w-max cursor-pointer hover:bg-blue-400'>
          <img src={assets.tick_icon} alt="" />
          <p>Add Your Car</p>
        </button>

      </form>
      
    </div>
  )
}

export default AddCar
