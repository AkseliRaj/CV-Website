import React from 'react';
import '../styles/contact.css';

function Contact() {
  return (
    <div className="container-fluid">
      <div className="justify-content-center">

        <div className="col-6 mx-auto">
          <div>
            <h1>Haluatko ottaa yhteyttä?</h1>
          </div>
          <div>
            <p>Sepä mahtavaa kuulla!</p>
          </div>
        </div>

        <div className="col-6 mx-auto">
          <div>
            <h3>Voit lähettää minulle viestin alla olevalla lomakkeella:</h3>
          </div>
          <div>
            <p>*Lomake</p>
          </div>
        </div>

        <div className="col-6 mx-auto">
          <div>
            <h1>Voit ottaa minuun yhteyttä myös muilla tavoin!</h1>
          </div>
          <div>
            <p>Ole hyvä ja valitse mieluisin viestintäkanavasi:</p>
          </div>
          <div>
            <p>Puhelin</p>
            <p>+358 044 993 7101</p>
          </div>
          <div>
            <p>Sähköposti</p>
            <p>akseli.rajahalme@gmail.com</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Contact;
