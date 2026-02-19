import React from "react";
import { Link } from "react-router-dom";
import useScrollAnimation from "../hooks/useScrollAnimation";

const Home = () => {
  useScrollAnimation();

  return (
    <div className="home-container">

      {/* ================= HERO SECTION ================= */}
      <section className="home-hero scroll-animate animate-fade">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>
              Unleashing Potential <br /> Fostering Excellence
            </h1>
            <p>
              Experience a transformative education that nurtures critical thinking,
              innovation, and lifelong growth.
            </p>
            <Link to="/Gallery" className="hero-btn">Explore →</Link>
          </div>
        </div>
      </section>


      {/* ================= STATISTICS SECTION ================= */}
      <section className="stats-section">
        {[
          {
            title: "1000+ Students",
            desc: "A thriving academic community."
          },
          {
            title: "50+ Expert Faculty",
            desc: "Experienced educators guiding success."
          },
          {
            title: "30+ Programs",
            desc: "Diverse UG and PG courses."
          },
          {
            title: "95% Placement Rate",
            desc: "Strong placements in top organizations."
          }
        ].map((item, index) => (
          <div
            key={index}
            className="stat-box scroll-animate animate-up"
            style={{ transitionDelay: `${index * 0.1}s` }}
          >
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </section>


      {/* ================= ABOUT PREVIEW ================= */}
      <section className="home-about">
        <div className="home-about-wrapper">

          <div className="home-text scroll-animate animate-left">
            <h2>Welcome to EduSphere</h2>
            <p>
              Established with a vision to transform education, EduSphere
              provides a dynamic learning environment that nurtures creativity,
              leadership, and innovation. Our faculty, modern infrastructure,
              and industry-aligned programs ensure students are future-ready.
            </p>
            <img
              src="/images/arrow.png"
              alt="arrow"
              className="home-arrow"
            />
            <Link to="/about" className="read-more">
              Learn More →
            </Link>
          </div>

          <div className="home-about-images scroll-animate animate-right">
            <div className="img-card tall">
              <img src="/images/H1.jpg" alt="Program" />
            </div>

            <div className="img-card small">
              <img src="/images/H2.jpg" alt="Program" />
            </div>

            <div className="img-card small">
              <img src="/images/H3.jpg" alt="Program" />
            </div>

            <div className="img-card tall">
              <img src="/images/H4.jpg" alt="Program" />
            </div>
          </div>

        </div>
      </section>


      {/* ================= PROGRAMS SECTION ================= */}
      <section className="programs-section">
        <h2 className="section-title scroll-animate animate-up">
          Our Academic Schools
        </h2>

        <div className="programs-grid">
          {[
            {
              title: "School of Engineering",
              desc: "Cutting-edge programs in computer science, AI, and core engineering fields."
            },
            {
              title: "School of Business",
              desc: "Industry-focused management and finance programs for future leaders."
            },
            {
              title: "School of Arts & Humanities",
              desc: "Creative and analytical programs in literature, psychology, and social sciences."
            }
          ].map((item, index) => (
            <div
              key={index}
              className="program-card scroll-animate animate-up"
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <Link to="/courses" className="program-link">
                View Programs →
              </Link>
            </div>
          ))}
        </div>
      </section>


      {/* ================= CALL TO ACTION ================= */}
      <section className="home-cta scroll-animate animate-zoom">
        <div className="container">
          <h2>Ready to Begin Your Journey?</h2>
          <p>
            Join EduSphere University and take the first step toward a successful future.
          </p>
          <Link to="/admissions" className="home-btn">
            Apply for Admission
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Home;