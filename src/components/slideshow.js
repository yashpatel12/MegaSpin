import React from 'react'
import './slideshow.css'
const SlideShow =()=>{
    return(
        <div class="container">
        <div class="carousel">
            <input type="radio" id="carousel-1" name="carousel[]" checked/>
            <input type="radio" id="carousel-2" name="carousel[]"/>
         <input type="radio" id="carousel-3" name="carousel[]"/>
            <input type="radio" id="carousel-4" name="carousel[]"/>
            <input type="radio" id="carousel-5" name="carousel[]"/>
            <ul class="carousel__items">
                <li class="carousel__item"><img src="https://megaspin.s3.eu-west-3.amazonaws.com/IMG_20190911_114105_8.jpg" alt=""/></li>
                <li class="carousel__item"><img src="https://megaspin.s3.eu-west-3.amazonaws.com/IMG_20190911_132506_6.jpg" alt=""/></li>
                <li class="carousel__item"><img src="https://megaspin.s3.eu-west-3.amazonaws.com/IMG_20190911_132501_0.jpg" alt=""/></li>
                <li class="carousel__item"><img src="https://megaspin.s3.eu-west-3.amazonaws.com/IMG_20190911_144029_1.jpg" alt=""/></li>
                <li class="carousel__item"><img src="https://megaspin.s3.eu-west-3.amazonaws.com/IMG_20190911_114053_1.jpg" alt=""/></li>
            </ul>
         <div class="carousel__prev">
             <label for="carousel-1"></label>
             <label for="carousel-2"></label>
             <label for="carousel-3"></label>
             <label for="carousel-4"></label>
             <label for="carousel-5"></label>
         </div>
         <div class="carousel__next">
           <label for="carousel-1"></label>
           <label for="carousel-2"></label>
           <label for="carousel-3"></label>
           <label for="carousel-4"></label>
           <label for="carousel-5"></label>
         </div>
         <div class="carousel__nav">
           <label for="carousel-1"></label>
           <label for="carousel-2"></label>
           <label for="carousel-3"></label>
           <label for="carousel-4"></label>
           <label for="carousel-5"></label>
         </div>
       </div>
     </div>
 )
}
export default SlideShow