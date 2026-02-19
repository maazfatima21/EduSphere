import React from "react";
import { Link } from "react-router-dom";
import { FaUniversity, FaUserGraduate, FaBriefcase, FaGlobe } from "react-icons/fa";
import useScrollAnimation from "../hooks/useScrollAnimation";

const testimonials = [
  {
    text: "Excellent faculty and great placement support. The learning environment is motivating and practical.",
    name: "Rahul, B.Tech CSE"
  },
  {
    text: "Modern campus, strong academics, and very supportive faculty members. I gained both confidence and industry exposure.",
    name: "Ananya, MBA"
  },
  {
    text: "Great infrastructure and friendly teachers. Practical sessions helped me develop confidence and strong technical skills.",
    name: "Sneha, BCA"
  }
];

const Admission = () => {
  useScrollAnimation();

  const [currentIndex, setCurrentIndex] = React.useState(0);

const nextTestimonial = () => {
  setCurrentIndex((prev) => (prev + 1) % testimonials.length);
};

const prevTestimonial = () => {
  setCurrentIndex(
    (prev) => (prev - 1 + testimonials.length) % testimonials.length
  );
};

  return (
    <div className="admission-container">

      <section className="admission-hero scroll-animate animate-fade">
        <h1>Admissions 2026</h1>
        <p>
          Begin your academic journey at Edusphere University — where innovation,
          research, and excellence shape future leaders.
        </p>
      </section>

      {/* HIGHLIGHTS */}
      <section className="admission-highlights">
        {[FaUniversity, FaUserGraduate, FaBriefcase, FaGlobe].map((Icon, index) => (
          <div
            key={index}
            className="highlight-card scroll-animate animate-up"
            style={{ transitionDelay: `${index * 0.1}s` }}
          >
            <Icon className="highlight-icon" />
            <span>
              {[
                "NAAC Accredited",
                "50,000+ Alumni",
                "95% Placement Rate",
                "International Collaborations"
              ][index]}
            </span>
          </div>
        ))}
      </section>
      
      <section className="admission-programs-fees">
        <h2 className="admission-title scroll-animate animate-up">
          Programs & Fee Structure
        </h2>
        <p className="fees-note">
          *Fees may vary depending on specialization, lab requirements, and facilities.
        </p>
        <div className="program-fee-grid">

          <div className="program-fee-card scroll-animate animate-up">
            <h3>B.Tech</h3>
            <p className="price">₹1,20,000 / Semester</p>
            <p>Duration: 4 Years</p>
            <span>CSE, AI & ML, Data Science, ECE, Mechanical</span>
          </div>

          <div className="program-fee-card scroll-animate animate-up">
            <h3>MBA</h3>
            <p className="price">₹1,10,000 / Semester</p>
            <p>Duration: 2 Years</p>
            <span>Finance, Marketing, HR, Business Analytics</span>
          </div>

          <div className="program-fee-card scroll-animate animate-up">
            <h3>BCA</h3>
            <p className="price">₹78,000 / Semester</p>
            <p>Duration: 3 Years</p>
            <span>Cloud Computing, Cyber Security, Data Analytics</span>
          </div>

          <div className="program-fee-card scroll-animate animate-up">
            <h3>M.Tech</h3>
            <p className="price">₹1,78,000 / Semester</p>
            <p>Duration: 2 Years</p>
            <span>CSE, AI, Structural Engineering, Power Systems</span>
          </div>
        </div>
      </section>

      <section className="admission-eligibility scroll-animate animate-left">
        <h2 className="admission-title">Eligibility Criteria</h2>
        <div className="eligibility-grid">

          <div className="eligibility-left">
            <ul className="admission-list">
              <li>✔ 10+2 from a recognized board (UG)</li>
              <li>✔ Bachelor’s degree from a recognized university (PG)</li>
              <li>✔ Minimum 50% aggregate marks</li>
              <li>✔ Valid entrance exam score (if applicable)</li>
            </ul>
          </div>

          <div className="international-inside">
            <h3>International Applicants</h3>
            <p>
              We welcome students from across the globe. International applicants must
              provide equivalent academic credentials and proof of English proficiency
              (IELTS/TOEFL if applicable).
            </p>
          </div>

        </div>
      </section>

      <section className="admission-process">
        <h2 className="admission-title scroll-animate animate-up">Admission Process</h2>

        <div className="process-timeline">

          <div className="timeline-step scroll-animate animate-up">
            <span className="step-circle">1</span>
            <h3>Online Application</h3>
            <p>Fill and submit the online form</p>
          </div>

          <div className="timeline-step scroll-animate animate-up">
            <span className="step-circle">2</span>
            <h3>Document Verification</h3>
            <p>Upload & verify required documents</p>
          </div>

          <div className="timeline-step scroll-animate animate-up">
            <span className="step-circle">3</span>
            <h3>Entrance / Interview</h3>
            <p>Attend test or interview if applicable</p>
          </div>

          <div className="timeline-step scroll-animate animate-up">
            <span className="step-circle">4</span>
            <h3>Admission Confirmation</h3>
            <p>Pay fees and confirm your seat</p>
          </div>

        </div>
      </section>

      <section className="dates-testimonial-combo">

        <div className="combo-images scroll-animate animate-left">
          <div className="img-one">
            <img src="/images/Ad-1.jpg" alt="student" />
          </div>
          <div className="img-two">
            <img src="/images/Ad-2.jpg" alt="student" />
          </div>
          <div className="img-three">
            <img src="/images/Ad-3.jpg" alt="student" />
          </div>
        </div>

        <div className="combo-content scroll-animate animate-right">
          <section className="dates-section">
            <h2 className="dates-title">Key Dates</h2>
            <ul className="dates-list">
              <li><strong>Application Opens:</strong> 1st March 2026</li>
              <li><strong>Last Date to Apply:</strong> 30th June 2026</li>
              <li><strong>Entrance Exam:</strong> July 2026</li>
              <li><strong>Merit List Announcement:</strong> August 2026</li>
              <li><strong>Session Begins:</strong> September 2026</li>
            </ul>
          </section>
        </div>

      </section>

      <section className="testimonials-section scroll-animate animate-zoom">
        <h2 className="testimonial-title">Testimonials</h2>

        <div className="testimonial-slider">
          <button className="arrow-btn left" onClick={prevTestimonial}>
            ❮
          </button>

          <div className="paper-testimonial">
            <div className="paper-pin"></div>
            <div className="paper-stars">★★★★★</div>

            <p className="paper-text">
              {testimonials[currentIndex].text}
            </p>

            <h4 className="paper-name">
              — {testimonials[currentIndex].name}
            </h4>
          </div>

          <button className="arrow-btn right" onClick={nextTestimonial}>
            ❯
          </button>
        </div>
      </section>

      <section className="admission-cta scroll-animate animate-up">
        <h2>Start Your Application Today</h2>
        <p>
          Take the first step toward a world-class education at Edusphere University.
        </p>

        <Link to="/contact" className="admission-btn">Apply Now</Link>
      </section>

    </div>
  );
};

export default Admission;