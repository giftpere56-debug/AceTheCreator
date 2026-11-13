
import { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: '',
  });

  const [feedback, setFeedback] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(formData).some((value) => !value.trim())) {
      setFeedback('Please fill in all fields.');
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(formData.email)) {
      setFeedback('Please enter a valid email address.');
      return;
    }

    const mailtoLink = `mailto:giftpere56@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.fullName}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    window.location.href = mailtoLink;
    setFeedback('Your email app will open so you can send your message.');
  };

  return (
    <main className="contact-page">
      <div className="container">
        <div className="contact-heading">
          <p>ACE THE CREATOR / GET IN TOUCH</p>
          <h1>Let's Talk.</h1>
          <span>Have a question or want to work with us? Get in touch.</span>
        </div>

        <div className="contact-layout">
          <div className="contact-info">
            <h2>Contact Information</h2>

            <div className="contact-detail">
              <h3>Email</h3>
              <a href="mailto:giftpere56@gmail.com">
                giftpere56@gmail.com
              </a>
            </div>

            <div className="contact-detail">
              <h3>Phone / WhatsApp</h3>
              <a href="tel:09022682162">09022682162</a>
            </div>

            <div className="contact-detail">
              <h3>Brand</h3>
              <p>ACE THE CREATOR</p>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              required
            />

            <button type="submit">SEND MESSAGE</button>

            {feedback && <p className="form-feedback">{feedback}</p>}
          </form>
        </div>
      </div>
    </main>
  );
}

export default Contact;
