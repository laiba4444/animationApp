import React, { useState } from "react";


const Contact = () => {
const [data , setData] = useState({

    name:'',
    email:'',
    password: '',
    message:'',


} );
 const InputEvent =(event)=>{
    const { name,value}=event.target;
setData((preval)=> {
    return{
        ...preval,
        [name]: value,
    }
})

 }


   const formSubmit =(e) =>{
    e.preventDefault();
alert(`My name is ${data.name}. my email address is ${data.email} .i want to say ${data.message}`)

   } 
    return (
        <>
            <section className="pt-5 "></section>
            <div className="my-5">
                <h1 className="text-center">Contact Us</h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>


                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">User Name</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1"
                                    name="name"
                                    value={data.name }
                                    onChange={InputEvent}
                                    placeholder="name" />
                            </div>

                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1"
                                    name="email"
                                    value={data.email }
                                    onChange={InputEvent}
                                    placeholder="name@example.com" />
                            </div>

                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Password</label>
                                <input type="password" class="form-control" id="exampleFormControlInput1"
                                    name="password"
                                    value={ data.password}
                                    onChange={InputEvent}
                                    placeholder="Write your password" />
                            </div>

                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1"
                                    name="message"
                                    value={data.message }
                                    onChange={InputEvent}
                                    placeholder=" your message " rows="3"></textarea>
                            </div>


                            <div class="col-12"></div>
                            <button submit type="button " class="btn btn-primary text-center  ">Submit</button>
                            <div />
                        </form>

                    </div>
                </div>
            </div>


            <section />
        </>

    );

};
export default Contact;