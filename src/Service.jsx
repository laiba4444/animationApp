import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";



const Service = () => {
    return (
        <>
            <section className="pt-5 ">
                <div className="my-5">
                    <h1 className="text-center">Our Service</h1>
                </div>



                <div className="container-fluid   mb-5  "  >
                    <div className="row cards">
                        <div className="  serv  col-10 ms-auto  ">
                            <div className="   ser  row gy-4  ">

                                {
                                    Sdata.map((val, ind) => {
                                    return <Card key= {ind} imgsrc={val.imgsrc}  title={val.title}
                                    />

                                })};
                            </div>

                        </div>
                    </div>
                </div>
            </section>

        </>

    );

};
export default Service;