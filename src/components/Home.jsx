import './Home.css';
import devImage from '../assets/lakiiiii.png'; // Adjust path and name if different
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

function Home() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-left">
          <h1>Hi, I'm Lakshay Bhardwaj</h1>
          <h2>Frontend Developer</h2>
          <p>
            A passionate developer focused on crafting responsive and modern web applications.
          </p>
          <div className="hero-buttons">
            <button className="btn primary">Hire Me</button>
            <button className="btn outline">Let's Talk</button>
          </div>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="https://www.linkedin.com/in/Lakshay-Bhardwaj-6b602b2ab/" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
          </div>
        </div>

        <div className="hero-right">
          <img src={devImage} alt="Developer" />
        </div>
      </div>
    </section>
  );
}

export default Home;
