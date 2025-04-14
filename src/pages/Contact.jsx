import React from "react";

const Contact = () => {
  const handleFormSubmit = (formData) => {
    console.log(formData.entries());

    const formInputData = Object.fromEntries(formData.entries());
    console.log(formInputData);
  };

  return (
    <section className="section-contact">
      <h2 className="container-title">Contact Us</h2>

      <div className="container-wraper">
        <form action={handleFormSubmit}>
          <input
            type="text"
            className="form-control"
            placeholder="enter your name"
            name="username"
            required
            autoComplete="false"
          />

          <input
            type="email"
            className="form-control"
            placeholder="enter your email"
            name="email"
            required
            autoComplete="false"
          />

          <textarea
            className="form-control"
            rows="10"
            placeholder="enter your message"
            name="message"
            required
            autoComplete="false"
          ></textarea>

          <button type="submit" value="send" className="btn">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
