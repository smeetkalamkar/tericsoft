import React from 'react'
import Category from './Category'
import "./Header.css";
import "./Category.css"
import { useDispatch } from 'react-redux';
import { getCategory } from '../Redux/action';
const Header = () => {

  const dispatch = useDispatch();

  return (
    <div className='header'>
       <div className='category' >
      <i class="fa-sharp fa-solid fa-star icons"></i>
      <p>Featured</p>
    </div>

    <div className='category'>
    <i class="fa-solid fa-person-rifle icons"></i>
      <p>Armoury</p>
    </div>

    <div className='category'>
    <i class="fa-solid fa-person-swimming icons"></i>
      <p>Aquatics</p>
    </div>

    <div className='category' onClick={()=>dispatch(getCategory(1))}>
    <i class="fa-solid fa-person-biking icons"></i>
      <p>Cycling</p>
    </div>


    <div className='category'>
    <i class="fa-solid fa-horse icons"></i>
      <p>Equestrian</p>
    </div>


    <div className='category'>
    <i class="fa-solid fa-person-skating icons"></i>
      <p>Extreme</p>
    </div>



    <div className='category'>
    <i class="fa-solid fa-flag icons"></i>
      <p>Golf</p>
    </div>

    
    <div className='category'>
    <i class="fa-solid fa-dumbbell icons"></i>
      <p>Gymnastics</p>
    </div>


    <div className='category'>
    <i class="fa-solid fa-sailboat icons"></i>
      <p>Lake & Sea</p>
    </div>



    </div>
  )
}

export default Header