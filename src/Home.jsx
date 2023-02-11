import React from "react";
import zoe from "../src/Images/careerimg.png";
import Common from "./Common";

const Home = () => {
    return (
        <>
           <Common
            name='Grow your business with' 
             imgsrc={zoe} 
             visit="/service" 
             btName="Get Started" 
           />

        </>

    );

};
export default Home;