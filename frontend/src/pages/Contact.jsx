function Contact() {

  const handleMessage = () => {
    alert("Message Sent Successfully!");
  };

  return (
    <div className="contact-container">
      <div className="contact-card">
        <h2>📞 Contact Us</h2>

        <p>
          <strong>📧 Email:</strong> hotelbooking@gmail.com
        </p>

        <p>
          <strong>📱 Phone:</strong> +92 300 1234567
        </p>

        <p>
          <strong>📍 Location:</strong> Islamabad, Pakistan
        </p>

        <button
          className="contact-btn"
          onClick={handleMessage}
        >
          Send Message
        </button>
      </div>
    </div>
  );
}

export default Contact;