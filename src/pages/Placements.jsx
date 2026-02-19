import React from "react";
import useScrollAnimation from "../hooks/useScrollAnimation";

const Placements = () => {

  useScrollAnimation();

  const recruiters = [
    "TCS","Infosys","Wipro","Accenture","Cognizant",
    "Amazon","Google","Capgemini","IBM","HCL",
  ];

  const testimonials = [
    {
      id: 1,
      name: "Aisha Khan",
      company: "Accenture",
      package: "12 LPA",
      message:
        "The placement training and mock interviews helped me gain confidence and secure my dream job.",
    },
    {
      id: 2,
      name: "Rahul Sharma",
      company: "TCS",
      package: "10 LPA",
      message:
        "Our faculty and placement cell provided continuous guidance throughout the recruitment process.",
    },
  ];

  return (
    <div className="pl-page">

      {/* ================= INTRO ================= */}
      <section className="pl-intro">
        <div className="pl-intro-left scroll-animate animate-left">
          <h1>Placements That Shape Careers</h1>
          <p>
            Our placement cell focuses on transforming students into skilled
            professionals through industry-oriented training, internships,
            and strong recruiter partnerships.
          </p>
          <ul>
            <li>✔ Dedicated Placement Cell</li>
            <li>✔ Industry Aligned Curriculum</li>
            <li>✔ Career-Focused Training</li>
            <li>✔ Strong Corporate Network</li>
          </ul>
        </div>

        <div className="pl-intro-right">
          {[
            { value: "95%", label: "Placement Rate" },
            { value: "12 LPA", label: "Highest Package" },
            { value: "150+", label: "Recruiters" },
            { value: "5000+", label: "Alumni Placed" },
          ].map((item, index) => (
            <div
              key={index}
              className="pl-intro-stat scroll-animate animate-up"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <h2>{item.value}</h2>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ================= RECRUITERS ================= */}
      <section className="pl-recruiters">
        <h2 className="scroll-animate animate-up">Top Recruiters</h2>

        <div className="pl-recruiter-grid">
          {recruiters.map((company, index) => (
            <div
              key={index}
              className="pl-recruiter-card scroll-animate animate-up"
              style={{ transitionDelay: `${index * 0.05}s` }}
            >
              {company}
            </div>
          ))}
        </div>
      </section>

      {/* ================= SUPPORT ================= */}
      <section className="pl-support">
        <div className="pl-support-wrapper">

          <div className="pl-support-left scroll-animate animate-left">
            <img src="/images/PS.png" alt="Placement Support" />
          </div>

          <div className="pl-support-right scroll-animate animate-right">
            <h2>Placement Program</h2>
            <p className="pl-support-sub">
              End-to-end career assistance designed to prepare students for success.
            </p>

            <div className="pl-support-list">
              {[
                "Resume Building",
                "Mock Interviews",
                "Aptitude Training",
                "Coding Bootcamps",
                "Soft Skills Training",
                "Career Counseling",
              ].map((item, index) => (
                <div
                  key={index}
                  className="pl-support-item scroll-animate animate-up"
                  style={{ transitionDelay: `${index * 0.08}s` }}
                >
                  <span>✔</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="pl-process">
        <h2 className="scroll-animate animate-up">Placement Journey</h2>

        <div className="pl-timeline">
          {[
            {
              no: "01",
              title: "Pre-Placement Training",
              desc: "Aptitude, coding practice, soft skills & mock interviews."
            },
            {
              no: "02",
              title: "Company Registration",
              desc: "Students register through placement portal."
            },
            {
              no: "03",
              title: "Recruitment Drive",
              desc: "Online test, technical & HR interview."
            },
            {
              no: "04",
              title: "Offer Letter",
              desc: "Selected students receive offer letter."
            }
          ].map((step, index) => (
            <div
              key={index}
              className="pl-step scroll-animate animate-up"
              style={{ transitionDelay: `${index * 0.12}s` }}
            >
              <span className="pl-step-no">{step.no}</span>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="pl-testimonials">
        <h2 className="scroll-animate animate-up">Student Success Stories</h2>

        <div className="pl-testimonial-grid">
          {testimonials.map((student, index) => (
            <div
              key={student.id}
              className="pl-testimonial-card scroll-animate animate-zoom"
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <div className="pl-avatar">
                {student.name.charAt(0)}
              </div>

              <p className="pl-quote">"{student.message}"</p>

              <div className="pl-student-info">
                <h3>{student.name}</h3>
                <span>{student.company} • {student.package}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="pl-cta">
        <div className="pl-cta-left scroll-animate animate-left">
          <h2>Build Your Career With Confidence</h2>
          <p>
            Step into a future shaped by confidence, competence, and clarity.
            <br /> Learn today to lead tomorrow.
          </p>
          <span className="pl-signature">-EduSphere</span>
        </div>

        <div className="pl-cta-right scroll-animate animate-right">
          <img src="/images/home-bg.jpg" alt="Career Growth" />
        </div>
      </section>

    </div>
  );
};

export default Placements;
