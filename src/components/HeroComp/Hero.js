import React from "react";
import  "./Hero.css"

const Hero = () => {

    return (

        <div>
            <div className="header">
                <h1> Wakatipu Film</h1>
            </div>
            <h2> Services</h2>
            <div className="services">
                <div className="service" id="scan-service">
                    <h3> Scan and Print</h3>
                </div>
                <div className="service" id="develop-service">
                    <h3>Develop Film</h3>
                    <h6>coming soon</h6>
                </div>
            </div>
            <h2> Scan and Print </h2>
            <div className="info">
                Use our 20MP scanner to produce a quality scan of your film and then (optionally) print each
                photo on a 4" x 6" photo
            </div>
            <h2 > Pricing </h2>
            <div className="info">
                Get digital copies of your photos for $1
                Get the photos printed on gloss photo paper for an additional 50c each
            </div>
            <h2> Contact </h2>
            <div className="info">
                Frankton Road, 9300
                Text 021-xxxxxxx for enquiries
            </div>
        </div>
     );
}
 
export default Hero;
