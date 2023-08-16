import React, { useReducer, useEffect,useState  } from 'react';
import { AiFillCheckCircle } from "react-icons/ai";

function ContactSection() {
  const [formData, setFormData] = useState([{
    name: '',
    email: '',
    message: ''
  }]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  

  

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:8000/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        // E-posta gönderimi başarılıysa
        alert('Teşekkürler! İletişim bilgileriniz kaydedildi.');
      } else {
        // E-posta gönderimi başarısızsa
        alert('Formu göndermek mümkün olmadı: ' + data.error);
        console.log(data.error);
      }
    } catch (error) {
      // E-posta gönderme işlemi sırasında bir hata oluştu
      alert('Formu göndermek mümkün olmadı: ' + error.message);
      console.log(error.message)
    }
  };
  
  
  

  return (
    <div className="form-section">
      <div className="container">
        <div className="contact-form">
          <form method="post" onSubmit={handleSubmit}>
            <div className="form-col">
              <div className="form-col1">
                <label>
                  Name
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </label>
              </div>
              <div className="form-col1">
                <label>
                  Email
                  <input
                         type="email"
                         name="email"
                         placeholder="Your Email"
                         required
                         value={formData.email}
                         onChange={handleChange}
                  />
                </label>
              </div>
            </div>
            <label>
              Message
              <textarea
                name="message"
                id=""
                placeholder="Your Message"
                cols="30"
                rows="10"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </label>
          
            <button type="submit" className="contactBtn">
              Send Message
            </button>
          </form>
        
        </div>
      </div>
    </div>
  );
}

export default ContactSection;