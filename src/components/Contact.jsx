import React, {  useState } from 'react'
import Heading from './Heading'
import emailjs from 'emailjs-com';

function Contact() {

    const [ formData, setFormData ] = useState({
        email: '', 
       name: '',
        message: ''
      });

      const handleChange = (e) => setFormData({...formData, [e.target.name]: e.target.value})

    const sendEmail = (e) => {
        e.preventDefault();
        console.log(formData);
        emailjs
          .send(
            "service_pr40nt2",
            "template_pztjkvm",
            formData,
            "pYdHL4TFZEN5uTgcA"
          )
          .then(
            (result) => {
              console.log(result.text);
              alert("SUCCESS!");
              setFormData({
                email: '', 
               name: '',
                message: ''
              })
            },
            (error) => {
              console.log(error.text);
              alert("FAILED...", error);
            }
          );
      };

    const heading = {
        title : "CONTACT ME",
        description : "Go ahead and contact me using the form below, i'll make sure to reply as soon as possible"
    }
  return (
    <div id='Contact' className='p-8'>
        <Heading heading={heading} />
        <div className='w-full flex flex-col bg-white p-8 rounded-md md:w-[60%] mx-auto'>
        <form  onSubmit={sendEmail}>
                <div>
                    <label htmlFor="" className='text-[#666]'>Name :</label>
                    <input
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    type="text" className='w-full bg-[#f0f0f0] py-2 px-4 rounded-md mt-3 placeholder:text-sm' placeholder='type your name' />
                </div>
                <div className='my-6'>
                    <label htmlFor="" className='text-[#666]'>Email :</label>
                    <input
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    type="text" className='w-full bg-[#f0f0f0] py-2 px-4 rounded-md mt-3 placeholder:text-sm' placeholder='type your Email' />
                </div>
                <div>
                <label htmlFor="" className='text-[#666]'>Message :</label>
                <textarea
                onChange={handleChange}
                value={formData.message}
                name="message" cols="30" rows="5" className='w-full bg-[#f0f0f0] py-2 px-4 rounded-md mt-3 placeholder:text-sm' placeholder='type your Message'></textarea>

                </div>
            </form>
            <button onClick={sendEmail} className='bg-[#facf0f] my-5 py-2 px-6 md:px-10 rounded-lg shadow-md font-bold hover:bg-[#facf0f8b] transition-all duration-200'>SUBMIT</button>
        </div>
    </div>
  )
}

export default Contact