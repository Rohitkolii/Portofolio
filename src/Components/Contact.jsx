import React, { useRef, useState } from 'react'
import '../styles/Contact.css'
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {


    const form = useRef()

    const [name, setname] = useState();
    const [mail, setmail] = useState();
    const [message, setmessage] = useState();
    const [err, seterr] = useState(false);


    const sendEmail = (e) => {
      e.preventDefault();

      if(name && mail && message){
          
          emailjs.sendForm('service_unk70pt', 'template_rmhzg26', form.current, 'EoRqXeN9WXwvaf8lr')
        .then((result) => {
            console.log(result.text);
            toast.success('Sent Succesfully!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });

            setmail('')
            setname('')
            setmessage('')
            
            e.target.reset();
        }, (error) => {
            console.log(error.text);
            toast.error('Something went wrong', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        });
        
        e.target.reset();
    } else{
        seterr(true)
        toast.error('Fill all input fields!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }
    };

  return (
    <div id='Contact' className='Contact-container'>
        <ToastContainer />
        <h1>Contact</h1>
        <p>Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</p>
        <div className='inner-contact'>
            <form ref={form} onSubmit={sendEmail}>
                {/* <div> */}
                    <label>Name <span>*</span> :</label> <br />
                    <input onChange={(e)=> setname(e.target.value)} type="text" name="user_name" value={name}  placeholder='Enter Name' />
                {/* </div> */}

                {/* <div> */}
                    <label>Mail <span>*</span> :</label> <br />
                    <input onChange={(e)=> setmail(e.target.value)} type="email" name="user_email" value={mail}  placeholder='Enter Email Id'/>
                {/* </div> */}

                {/* <div> */}
                    <label>Message <span>*</span> :</label> <br />
                    <textarea onChange={(e)=> setmessage(e.target.value)} name="message" cols="30" rows="10" value={message} placeholder='Enter Message Here'></textarea>
                    {err ? <p style={{fontSize: 15, color: 'rgb(255, 37, 37)', textAlign: 'left'}}>Please fill all fields! Message !</p> : '' }
                {/* </div> */}
                <input className='btn' type="submit" value="SUBMIT" />

            </form>
        </div>
    </div>
  )
}

export default Contact