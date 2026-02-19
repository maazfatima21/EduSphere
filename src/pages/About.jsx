import React, { useState } from "react";
import { FaBook, FaGraduationCap, FaUserGraduate } from "react-icons/fa";
import { MdScience } from "react-icons/md";
import { GiTeacher } from "react-icons/gi";
import useScrollAnimation from "../hooks/useScrollAnimation";

const slides = [
  {
    category: "Innovation",
    title: "Cutting-Edge Learning Environment",
    description: "Our campus fosters creativity, collaboration, and innovation, equipped with modern labs and learning spaces for holistic student growth.",
    image: "/images/about1.jpg",
    clipId: "clipOne",
  },
  {
    category: "Excellence",
    title: "Expert Faculty and Mentorship",
    description: "Learn from experienced faculty who combine academic knowledge with real-world experience to guide students to success.",
    image: "/images/about2.jpeg",
    clipId: "clipTwo",
  },
  {
    category: "Community",
    title: "Global Collaboration & Research",
    description: "We encourage students to participate in research, community projects, and industry collaborations to prepare them for a global future.",
    image: "/images/about3.jpg",
    clipId: "clipThree",
  },
];


const About = () => {
  useScrollAnimation();

  const [currentSlide, setCurrentSlide] = useState(0);
  const [showMore, setShowMore] = useState(false);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  const slide = slides[currentSlide];

  return (
    <div className="about-page-wrapper">
      
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <clipPath id="clipOne" clipPathUnits="objectBoundingBox">
            <path d="M0.1,0 L1,0 L1,1 L0,1 Z" />
          </clipPath>
          <clipPath id="clipTwo" clipPathUnits="objectBoundingBox">
            <path d="M0.12,0 L1,0 L0.88,1 L0,1 L0.06,0.55 Z" />
          </clipPath>
          <clipPath id="clipThree" clipPathUnits="objectBoundingBox">
            <path d="M0.32,0 L1,0 L0.7,1 L0,1 Z" />
          </clipPath>
        </defs>
      </svg>

      <section className="about-hero-slider scroll-animate animate-fade">
        <div className="about-hero-left scroll-animate animate-left">
          <p className="about-slide-category">{slide.category}</p>
          <h1 className="about-slide-title">{slide.title}</h1>
          <p className="about-slide-description">{slide.description}</p>

          <div className="about-slider-controls">
            <div className="about-slide-indicator">
              {String(currentSlide + 1).padStart(2, "0")} of{" "}
              {String(slides.length).padStart(2, "0")}
            </div>

            <div className="about-progress-bar">
              <div
                className="about-progress-fill"
                style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
              />
            </div>

            <div className="about-arrow-buttons">
              <button onClick={prevSlide} className="about-arrow-btn">
                ←
              </button>
              <button onClick={nextSlide} className="about-arrow-btn">
                →
              </button>
            </div>
          </div>
        </div>

        <div className="about-hero-right scroll-animate animate-right">
          {slides.map((s, index) => (
            <img
              key={index}
              src={s.image}
              alt={s.title}
              className={`clip-${s.clipId} ${index === currentSlide ? "active" : ""}`}
            />
          ))}
        </div>

      </section>

      <section className="about-intro-section scroll-animate animate-up">
      <div className="about-intro-container">

        <div className="about-intro-heading">
          <span className="about-tag">ABOUT</span>
          <h2>Build Skills From Expert Teachers</h2>
        </div>

        <div className="about-intro-content">
          <p className={`about-intro-text ${showMore ? "expanded" : ""}`}>
            EduSphere is committed to academic excellence, innovation, and holistic student development. 
            Our campus fosters creativity, leadership, and lifelong learning.

            {showMore && (
              <>
                <br /><br />
                Our experienced faculty bring industry knowledge and academic excellence together to ensure 
                students receive world-class education and mentorship. EduSphere University is committed to nurturing 
                innovation, leadership, and creativity through modern teaching methodologies and research-driven programs.
              </>
            )}
          </p>

          <button
            className="about-btn-primary"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "Read Less ←" : "Read More →"}
          </button>
        </div>

      </div>
    </section>

    <section className="about-program-section">
      <h2 className="scroll-animate animate-up">
        Course And Study Program
      </h2>

      <div className="program-timeline">

        <div className="program-item scroll-animate animate-up">
          <div className="program-icon">
            <FaBook/>
          </div>
          <h4>Public Course</h4>
          <p>Flexible learning for everyone.</p>
        </div>

        <div className="program-item scroll-animate animate-up">
          <div className="program-icon">
            <FaGraduationCap />
          </div>
          <h4>Undergraduate Courses</h4>
          <p>Strong foundation programs.</p>
        </div>

        <div className="program-item scroll-animate animate-up">
          <div className="program-icon">
            <FaUserGraduate />
          </div>
          <h4>Master’s Courses</h4>
          <p>Advanced specialized programs.</p>
        </div>

        <div className="program-item scroll-animate animate-up">
          <div className="program-icon">
            <MdScience />
          </div>
          <h4>Postgraduate Research</h4>
          <p>Innovation & industry research.</p>
        </div>

        <div className="program-item scroll-animate animate-up">
          <div className="program-icon">
            <GiTeacher />
          </div>
          <h4>Become Lecturer</h4>
          <p>Join our expert faculty team.</p>
        </div>

      </div>
    </section>

      <section className="about-image-strip">
        <div className="about-strip-card scroll-animate animate-zoom">
          <img src="/images/ab-1.jpg" alt="Undergraduate" />
          <h3>Undergraduate Courses</h3>
        </div>
        <div className="about-strip-card scroll-animate animate-zoom">
          <img src="/images/ab-2.jpg" alt="Courses" />
          <h3>Master Courses</h3>
        </div>
        <div className="about-strip-card scroll-animate animate-zoom">
          <img src="/images/ab-3.jpg" alt="Lecturer" />
          <h3>Become Lecturer</h3>
        </div>
      </section>
      
      <section className="about-vision-section scroll-animate animate-up">
        <div className="vision-wrapper">
          <div className="vision-image-card scroll-animate animate-left">
            <img src="/images/vision.jpg" alt="Rector" />
            <div className="vision-caption">DIRECTOR, EDU SPHERE</div>
          </div>

          <div className="vision-content scroll-animate animate-right">
            <h2>Our Vision For EduSphere</h2>

            <p>
              We aim to be recognized globally for academic excellence, cutting-edge
              research, and producing responsible global citizens. Our mission is to
              empower students with knowledge, integrity, and leadership skills.
            </p>

            <div className="vision-signature">Dr. Sophia Reynolds</div>
          </div>
        </div>

        <div className="vision-stats">
          <div className="vision-stat-card scroll-animate animate-up">
            <h3>4,500+</h3>
            <p>Students</p>
          </div>

          <div className="vision-stat-card scroll-animate animate-up">
            <h3>90+</h3>
            <p>Faculty</p>
          </div>

          <div className="vision-stat-card scroll-animate animate-up">
            <h3>105</h3>
            <p>Programs</p>
          </div>

          <div className="vision-stat-card scroll-animate animate-up">
            <h3>400+</h3>
            <p>Research Papers</p>
          </div>
        </div>

      </section>

    </div>
  );
};

export default About;
