import Img1 from './Images/design assets svg/Group 19.svg'
import Img2 from './Images/design assets svg/Group 20.svg'
import Img3 from './Images/design assets svg/Group 21.svg'
import React from 'react'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


export default function App() {
  return (
    <div className="home_page">

      <section className="navigation_section">
           <div className="navigation">
           <div className="first_half">
           <a> About </a> 
           <a> Team </a> 
           <a> Pricing </a> 
           <a> Issues </a> 
           <a> Sign in </a> 
     </div>
     <div class="input-group  second_half">
         <div className="navigation_image">
         <img src={Img2} />
         </div>
     
</div>
           </div>
       
      </section>

      <section className="second_section">

            <div className="wrapper">
            <div className="box_1 text-left">
            
            <h2> Digital Marketting</h2>
            <h6> Targetted and interactive Marketting of goods  and services</h6>
            <p>  Sign up and get a discount </p>

             <div className="second_section_image"> <img src={Img3} />   </div> 
            </div>
            <div className="box_2">
            
               
     
            </div>
            </div>
         
      </section>

      <div className="background_image_2">
          
      </div>

      <section className="third_section">
            <div className="wrapper">
               <div className="img_box">
               
               </div>
               <div className="box_2">
                      <div className="box_1">
                          <h6> Design and strategy</h6>
                          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro, deserunt inventore! Laborum, doloribus! Nostrum molestias ab sapiente, commodi suscipit distinctio?</p>
                      </div>
                      <div className="box_1">
                         <h6> Design Marketting Channels</h6>
                         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro, deserunt inventore! Laborum, doloribus! Nostrum molestias ab sapiente, commodi suscipit distinctio?</p>
                      </div>
               </div>
       
            </div>
      </section>

      <section className="footer_section">
        <div className="wrapper">
        <div className="footer_image">
        <img src={Img1}  />
      </div>
        </div>

       
      </section>
      
    </div>
  )
}

