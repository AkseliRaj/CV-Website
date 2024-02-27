import React from 'react';
import '../styles/contact.css';
import ContactForm from '../components/ContactForm';

function Contact() {
  return (
    <div className="container-fluid pt-4">
      <div className="justify-content-center">

        <div className="col-6 pb-5 mx-auto">
          <div className='pb-3'>
            <h2>Haluatko ottaa yhteyttä?</h2>
          </div>
          <div>
            <p>Sepä mahtavaa kuulla!</p>
          </div>
        </div>

        <div className="col-6 pb-5 mx-auto">
          <div className='pb-4'>
            <h2>Voit lähettää minulle viestin tällä lomakkeella:</h2>
          </div>
          <div>
            <ContactForm/>
          </div>
        </div>

        <div className="col-6 pt-4 mx-auto">
          <div className='pb-3'>
            <h2>Voit ottaa minuun yhteyttä myös muilla tavoin!</h2>
          </div>
          <div className='pb-5'>
            <p>Ole hyvä ja valitse mieluisin viestintäkanavasi:</p>
          </div>
          <div className='pb-3'>
            <p id='header'>Puhelin</p>
            <p>+358 044 993 7101</p>
          </div>
          <div>
            <p id='header'>Sähköposti</p>
            <p>akseli.rajahalme@gmail.com</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Contact;
