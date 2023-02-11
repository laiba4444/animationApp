import React from "react";
import web from "../src/Images/about.png"
import Common from "./Common";

const About = () => {
    return (
        <>
         <Common 
            name=' Welcome To  About Page '
             imgsrc={web} 
             visit="/contact" 
             btName="Contact Now" />
        </>

    );

};
export default About;