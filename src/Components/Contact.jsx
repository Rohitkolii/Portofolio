import React, { useRef, useState } from 'react'
import '../styles/Contact.css'
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import email from "../Images/mail.svg"
import call from "../Images/call.svg"
import linkedin from "../Images/linkedin.png"
import github from "../Images/git1.png"
import { Link } from 'react-router-dom';

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
        <h1 className='heading'>Contact me</h1>
        <p className='para' style={{textAlign:'center' , color: 'rgb(92, 92, 92)'}}>Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</p>
        <div className='inner-contact'>
            <div className='connect'>
                {/* <img src={contact} alt="" /> */}
                <div>
                    <h2 style={{marginBottom:"30px"}}><span style={{color:'#1b56fd'}}>Connect</span> with me</h2>
                    <div>
                        <div className='connect_li'>
                            <img src={email} alt="" />

                            <div>
                            <Link to="mailto:rohitkolisd@gmail.com">rohitkolisd@gmail.com</Link>
                            <p>For Any enquiry mail me at</p>
                            </div>
                        </div>
                        <div className='connect_li'>
                            <img src={call} alt="" />

                            <div>
                            <Link to="tel:9582207407">+91 9582207407</Link>
                            <p>Can get in touch on call if urgent</p>
                            </div>
                        </div>
                        <div className='connect_li'>
                            <img src={linkedin} alt="" />

                            <div>
                            <Link to="https://www.linkedin.com/in/rohit-koli1/" target='_blank'>/rohit-koli1</Link>
                            <p>Connect with me on linkedin for better understanding</p>
                            </div>
                        </div>
                        <div className='connect_li'>
                            <img src={github} alt="" />

                            <div>
                            <Link to="https://github.com/Rohitkolii" target='_blank'>/Rohitkolii</Link>
                            <p>Here's my git repositorie's</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <form ref={form} onSubmit={sendEmail}>
                <h2>Get in <span style={{color: "#1b56fd"}}>Touch</span></h2>
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
                    <textarea onChange={(e)=> setmessage(e.target.value)} name="message" value={message} placeholder='Enter Message Here'></textarea>
                    {err ? <p style={{fontSize: 15, color: 'rgb(255, 37, 37)', textAlign: 'left'}}>Please fill all fields! Message !</p> : '' }
                {/* </div> */}
                <input className='btn' type="submit" value="SUBMIT" />

            </form>
        </div>
    </div>
  )
}

export default Contact