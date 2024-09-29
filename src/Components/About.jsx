import React from 'react';
import aboutimage from "../images/about.png";

const About = () => {
    return (
        <div id ='about'>
            
            <div className = 'about-image'>
               <img src={aboutimage} alt = 'img'/>
            </div>
            
            <div className='about-text'>
                <h1>LEARN MORE ABOUT US</h1>
                <p>Lorem, ipsum dolor sit amet consectetur 
                    adipisicing elit. Voluptate  delectus
                     nemo repellat repudiandae commodi. Placeat.</p>
                <button>READ MORE</button>
            </div>
        </div>
    );
};

export default About;