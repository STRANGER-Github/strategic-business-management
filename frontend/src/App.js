import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import { ArrowRight, Mail, Circle, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

function App() {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const scrollSliderRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show nav when scrolling up, hide when scrolling down
      if (currentScrollY < lastScrollY && currentScrollY > 100) {
        setShowNav(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNav(false);
      } else if (currentScrollY <= 100) {
        setShowNav(true);
      }
      
      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollPrograms = (direction) => {
    if (scrollSliderRef.current) {
      const scrollAmount = 400;
      scrollSliderRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="App">
      {/* Premium Container Wrapper */}
      <div className="premium-container">
        {/* Navigation */}
        <nav className={`navbar !mt-[20px] !ml-[20px] !mr-[20px] !rounded-t-[20px] ${showNav ? 'nav-visible' : 'nav-hidden'}`}>
        <div className="nav-container">
          <div className="nav-logo">
            <Circle size={40} strokeWidth={2} color="#FFFFFF" />
          </div>
          
          <div className="nav-links">
            <a href="#about" className="nav-link">About Us</a>
            <a href="#academics" className="nav-link">Academics</a>
            <a href="#people" className="nav-link">People</a>
            <a href="#slrtsbc" className="nav-link">SLRTCI&E</a>
            <a href="#welfare" className="nav-link">Student Welfare</a>
            <a href="#admissions" className="nav-link">Admissions</a>
          </div>
          
          <div className="nav-actions">
            <button className="btn-apply-nav">Apply Now</button>
            <div className="profile-icon">
              <Circle size={36} strokeWidth={2} color="#FFFFFF" />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section !mt-[20px] !ml-[20px] !mr-[20px] !rounded-t-[20px]">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">Not Your Average<br />B-School</h1>
            <div className="hero-statement">
              <p className="statement-text !text-left">"Education must be Liberate,<br />Not Domesticate"</p>
            </div>
          </div>
          <button className="btn-enroll">
            ENROLL NOW
          </button>
        </div>
      </section>

      {/* Featured Program Card */}
      <section className="featured-section">
        <div className="featured-container">
          <div className="featured-card">
            <div className="program-badge">PGDM</div>
            <h3 className="program-title">PGDM (Multi-Specialisation)</h3>
            <p className="program-description">
              A comprehensive postgraduate program designed to shape versatile business leaders
            </p>
            <button className="btn-enroll-small">Enroll Now</button>
          </div>
          
          <div className="featured-quote">
            <h2 className="quote-text">
              "We Don't Produce Graduates;<br />
              We Nurture Thinkers Who<br />
              Redefine The Future."
            </h2>
            <button className="btn-explore">
              Explore More Courses <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="trust-section">
        <div className="trust-container">
          <div className="partner-logo">Nietzsche</div>
          <div className="partner-logo">GlobalBank</div>
          <div className="partner-logo">Spherule</div>
          <div className="partner-logo">FeatherDev</div>
          <div className="partner-logo">Lightbox</div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="programs-section">
        <div className="programs-container">
          <div className="programs-header">
            <h2 className="programs-title">Programs</h2>
            <p className="programs-subtitle">Undergraduate/Postgraduate</p>
          </div>
          
          <div className="programs-grid">
            <div className="program-card">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop"
                alt="BBA Program"
                className="program-image" />

              <div className="program-overlay">
                <h3 className="program-name">BBA (Hons.)</h3>
                <button className="btn-apply-program">Apply Now</button>
              </div>
            </div>
            
            <div className="program-card">
              <img
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop"
                alt="B.Sc. Management"
                className="program-image" />

              <div className="program-overlay">
                <h3 className="program-name">B.Sc. Management</h3>
                <button className="btn-apply-program">Apply Now</button>
              </div>
            </div>
            
            <div className="program-card">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                alt="PGDM Finance"
                className="program-image" />

              <div className="program-overlay">
                <h3 className="program-name">PGDM Finance</h3>
                <button className="btn-apply-program">Apply Now</button>
              </div>
            </div>
            
            <div className="program-card">
              <img
                src="https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600&h=400&fit=crop"
                alt="PGDM Business Analytics"
                className="program-image" />

              <div className="program-overlay">
                <h3 className="program-name">PGDM Business Analytics</h3>
                <button className="btn-apply-program">Apply Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophical Banner */}
      <section className="philosophy-section">
        <div className="philosophy-container">
          <h2 className="philosophy-text">
            Education must be Liberate,<br />
            Not Domesticate
          </h2>
          <div className="newsletter-section">
            <p className="newsletter-label">Subscribe to our newsletter</p>
            <div className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your email"
                className="newsletter-input" />

              <button className="btn-subscribe">Subscribe</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-column">
            <h4 className="footer-heading">About</h4>
            <a href="#" className="footer-link">Our Management</a>
            <a href="#" className="footer-link">Who We Are</a>
            <a href="#" className="footer-link">Vision & Mission</a>
            <a href="#" className="footer-link">About SLRTSBM</a>
            <a href="#" className="footer-link">Quality Assurance & Accreditation</a>
            <a href="#" className="footer-link">Recognitions</a>
            <a href="#" className="footer-link">People</a>
          </div>
          
          <div className="footer-column">
            <h4 className="footer-heading">Academics</h4>
            <a href="#" className="footer-link">Academic Programs</a>
            <a href="#" className="footer-link">Curriculum</a>
            <a href="#" className="footer-link">Faculty</a>
            <a href="#" className="footer-link">Research & Innovation</a>
            <a href="#" className="footer-link">Academic Calendar</a>
            <a href="#" className="footer-link">Examinations</a>
          </div>
          
          <div className="footer-column">
            <h4 className="footer-heading">Programs</h4>
            <a href="#" className="footer-link">Undergraduate</a>
            <a href="#" className="footer-link">BBA (Hons.)</a>
            <a href="#" className="footer-link">B.Sc. Management</a>
            <a href="#" className="footer-link">Postgraduate</a>
            <a href="#" className="footer-link">PGDM (Multi-Specialisation)</a>
            <a href="#" className="footer-link">PGDM Business Analytics</a>
            <a href="#" className="footer-link">PGDM Finance</a>
            <a href="#" className="footer-link">PGDM Digital Marketing</a>
            <a href="#" className="footer-link">PGDM Cyber Law</a>
          </div>
          
          <div className="footer-column">
            <h4 className="footer-heading">SLRTSBC</h4>
            <a href="#" className="footer-link">Frontline Health Director</a>
            <a href="#" className="footer-link">Advisory Board</a>
            <a href="#" className="footer-link">Campus</a>
            <a href="#" className="footer-link">Events</a>
          </div>
          
          <div className="footer-column">
            <h4 className="footer-heading">Student Welfare</h4>
            <a href="#" className="footer-link">Anti-Ragging Info</a>
            <a href="#" className="footer-link">Scholarships</a>
            <a href="#" className="footer-link">Internal Complaints</a>
          </div>
          
          <div className="footer-column">
            <h4 className="footer-heading">Admissions</h4>
            <a href="#" className="footer-link">Admission Process</a>
            <a href="#" className="footer-link">How to Apply</a>
            <a href="#" className="footer-link">FAQ</a>
          </div>
        </div>
      </footer>
    </div>);

}

export default App;