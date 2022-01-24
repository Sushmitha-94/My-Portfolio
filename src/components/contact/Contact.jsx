import "./contact.scss";

export default function Contact() {
  return (
  <div className="contact" id="contact">
    <div className="container">
      <h2>Contact</h2>
      <form action="">
        <input type="text" placeholder="Email"/>
        <textarea placeholder="Message"></textarea>
        <button type="Submit">Send</button>
      </form>
    </div>
  </div>
  );
}
