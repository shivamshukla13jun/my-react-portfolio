import React, { useState } from 'react';



const  ContactForm =()=> {
    const [Name, setName] = useState('')
    const [Email, setEmail] = useState('')
    const [Mesage, setMesage] = useState('')
    const [Subject, setSubject] = useState('')
    const handleSubmit=()=>{
        if(Name==''){
            alert('Please enter your name')
        }
        else if(Email==''){
            alert('Please enter your email')
        }
        else if(Subject==''){
            alert('Please enter your Subject')
        }
        else if(Mesage==''){
            alert('Please enter your Mesage')
        }else{
            alert(Email)
        }

    }
        return (
          
                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s">
                            <input
                                type="text"
                                name="name"
                                id="item01"
                                value={Name}
                                onChange={(e)=>{setName(e.target.value)}}
                                placeholder="Your Name *"
                            />
                        </div>
                        <div className="form-group wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s">
                            <input 
                                type="text"
                                name="email"
                                id="item02"
                                value={Email}
                                onChange={(e)=>{setEmail(e.target.value)}}
                                placeholder="Your email *" 
                            />
                        </div>
                        <div className="form-group wow fadeInUp" data-wow-duration="1s" data-wow-delay=".2s">
                            <input 
                                type="text"
                                name="subject"
                                id="item03"
                                value={Subject}
                                onChange={(e)=>{setSubject(e.target.value)}}
                                placeholder="Write a Subject"
                            />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
                            <textarea 
                                rows="4" 
                                type="text"
                                id="item04"
                                name="message"
                                value={Mesage}
                                onChange={(e)=>{setMesage(e.target.value)}}
                                placeholder="Your Message"
                            ></textarea>
                        </div>
                        <div className="form-group wow fadeInUp" data-wow-duration="1s" data-wow-delay=".4s">
                            <button onClick={handleSubmit} type="submit" className="btn"><span>Submit Message</span><img src="assets/images/icon/btn-2.png" alt="icon" className="img-fluid" /></button>
                        </div>
                    </div>
                </div>
           
        );
    
}

export default ContactForm;






