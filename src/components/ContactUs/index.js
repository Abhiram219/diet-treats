import React, { useState } from 'react';
import Header from '../../common-components/Header';
import Footer from '../../common-components/Footer';
import {consultationTypes} from '../../common-components/constants/JsonData';
import {EMAIL_ID,CONTACT_NO} from '../../common-components/constants';

import './app.scss'


function ContactUs() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [consultation, setConsultation] = useState('');
  const [comments, setcomments] = useState('');

  const validateForm = () => {


  }

  const submitForm = () => {

    if( validateForm() ) return;
    
    var body = {
      name: name,
      email: email,
      phone: phone,
      consultationFor: consultation,
      comments: comments
    };

    console.log(body);
  }

  return (
    <React.Fragment>
      
        <Header />

        <div className="contactUs__container">

            <div className="contactUs__subContainer1">
              
              <h1 class="contactUs__heading">Request a Call Back</h1>
              <div class="contactUs__description">Tell us about your requirements and our expert will contact you soon. </div>
              
              <form className="contactUs__form">

                <div class="contactUs__inputItem">
                  <label>Name</label>
                  <input type="text" name="name" value={name} onChange={ e => setName(e.target.value) } />
                  <div class="contactUs__errorMessage"><p></p> </div>
                </div>

                <div class="contactUs__inputItem">
                  <label>Phone No</label>
                  <input type="number" name="phone" value={email} onChange={ e => setEmail(e.target.value) } />
                  <div class="contactUs__errorMessage"><p></p> </div>
                </div>

                <div class="contactUs__inputItem">
                  <label>Email Id</label>
                  <input type="text" name="emailId" value={phone} onChange={ e => setPhone(e.target.value) } />
                  <div class="contactUs__errorMessage"><p></p> </div>
                </div>

                <div class="contactUs__inputItem">
                  <label>Consultation For</label>
                  <select type="text" name="contactUs" value={consultation} onChange={ e => setConsultation(e.target.value) } >
                    <option  value='' defaultChecked disabled> Select </option>
                    {consultationTypes.map( (item,index) => 
                      <option key={index} value={item.vale} > {item.name} </option>
                     )}
                  </select>

                  <div class="contactUs__errorMessage"><p></p> </div>
                </div>

                <div class="contactUs__inputItem-extended">
                  <label>Comments (Optional)</label>
                  <textarea type="textarea" name="comments" value={comments} onChange={ e => setcomments(e.target.value) } />
                  <div class="contactUs__errorMessage"><p></p> </div>
                </div>

                <button className="contactUs__submit" onClick={submitForm}> Submit </button>


              </form>

             </div>

            <div className="contactUs__subContainer2">

              <div class="reachUs">

                <div class="reachUs__header">Reach us out Directly</div>

                <div class="reachUs__call">
                  <span class="default-icon-style">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                      <path fill="#ba913d" fill-rule="evenodd" d="M6.974 11.144a.5.5 0 0 1-.708-.708l2.2-2.2a.5.5 0 0 0 .13-.51A11.86 11.86 0 0 1 8 4c0-.274-.226-.5-.5-.5H4c-.274 0-.5.226-.5.5 0 9.114 7.386 16.5 16.5 16.5.274 0 .5-.226.5-.5v-3.49c0-.274-.226-.5-.5-.5-1.278 0-2.541-.204-3.756-.606a.517.517 0 0 0-.48.13l-2.2 2.2a.5.5 0 0 1-.708-.708l2.21-2.208c.29-.277.663-.428 1.054-.428.178 0 .339.023.467.075 1.084.358 2.242.545 3.413.545.826 0 1.5.674 1.5 1.5V20c0 .826-.674 1.5-1.5 1.5-9.666 0-17.5-7.834-17.5-17.5 0-.826.674-1.5 1.5-1.5h3.5C8.326 2.5 9 3.174 9 4c0 1.177.185 2.325.547 3.42a1.503 1.503 0 0 1-.373 1.524l-2.2 2.2z"></path>
                    </svg>
                    </span>

                    <a rel="noopener" href={`tel:${CONTACT_NO}`} > {CONTACT_NO} </a>
                  </div>

                  <hr />

                  <div class="reachUs__mail">
                    <span class="default-icon-style">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path fill="#ba913d" fill-rule="evenodd" d="M20 5a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h16zm1 3.6L12 14 3 8.6V17a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V8.6zM20 6H4a1 1 0 0 0-1 1v.434l9 5.4 9-5.4V7a1 1 0 0 0-1-1z"></path>
                      </svg>
                    </span>

                    <a rel="noopener" href={`mailto:${EMAIL_ID}`}> {EMAIL_ID} </a>
                </div>

              </div>
            </div>
        </div>


        <div className="contactUs__footer"> <Footer /> </div>

      </React.Fragment>
  );
}

export default ContactUs;
