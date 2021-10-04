import React from "react";
import Menubar from "../Menubar/Menubar";
import Footer from "../Footer/Footer";
import "./Contact.css";
// set contact section
const Contact = () => {
  return (
    <div>
      <Menubar></Menubar>
      {/* titile */}
      <h2 className="title text-center mt-4">Contact </h2>
      <hr className="w-25 mx-auto text-danger  " />
      <section className="row mb-5">
        {/* left image of contact section */}
        <div className="col-lg-6 pt-5 ps-5">
          <img
            className="img-fluid mt-5 pt-5 ps-5"
            src="https://image.freepik.com/free-vector/music-instrument-cartoon_24640-54663.jpg"
            alt=""
          />
        </div>
        {/* contact form in contact section  */}
        <div className=" col-lg-6 ">
          <form className="contact">
            <div className="dark">
              <h2>Get Admission Now</h2>
              <form class="quote">
                <label>
                  <h6>Name</h6>
                </label>
                <br />
                <input type="text" placeholder="Enter Name" />
                <br />
                <label>
                  <h6>Email</h6>
                </label>
                <br />
                <input type="email" placeholder="Email" />
                <br />
                <label>
                  <h6>Message</h6>
                </label>
                <br />
                <textarea rows="5" placeholder="Your requirement"></textarea>
                <button className="academy-button w-75 mx-auto ">Get Now</button>
              </form>
            </div>
          </form>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default Contact;
