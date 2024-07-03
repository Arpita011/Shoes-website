import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import './About.css'; // Import your global styles here if needed

const About = () => {
  return (
    <>
    <div className="text">
      <Header />
      <br/>
      <br/>
      <br/>
      <main>
        <section className="about-us">
          <div className="container">
            <h1>About Us</h1>
            <p>Welcome to Shoe Store, your number one source for all things footwear...</p>
            <p>Founded in 2024 by Jane Doe, Shoe Store has come a long way...</p>
            <p>We hope you enjoy our products as much as we enjoy offering them to you...</p>
            <p><strong>Sincerely,</strong></p>
            <p><strong>Jane Doe, Founder</strong></p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
    </>
  );
};

export default About;
