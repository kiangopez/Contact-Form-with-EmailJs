import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Result = () => {
  return <p>Your message has been sent. I will contact you soon!</p>;
};

export default function Contact() {
  const [result, showResult] = useState(false);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fyt7kvq",
        "template_jhh2eyf",
        form.current,
        "Fa0lLU1M9IGID3Xem"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    showResult(true);
  };

  return (
    <>
      <form action="" onSubmit={sendEmail} ref={form}>
        <input type="text" name="fullName" placeholder="Full name" required />
        <br />
        <input type="email" name="email" placeholder="Email" required />
        <br />
        <input type="text" name="message" placeholder="Your message" required />
        <br />
        <input type="submit" value="Send" />
      </form>
      <p>{result ? <Result /> : null}</p>
    </>
  );
}
