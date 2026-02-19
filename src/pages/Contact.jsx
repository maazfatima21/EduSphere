import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import {
  LuUserCheck,
  LuBriefcase,
  LuWallet,
  LuClipboardList,
  LuHeadphones
} from "react-icons/lu";
import useScrollAnimation from "../hooks/useScrollAnimation";

const Contact = () => {

  useScrollAnimation();

  return (
    <div className="contact-page">

      {/* ================= HERO ================= */}
      <section className="contact-hero scroll-animate animate-fade">
        <h1>Contact EduSphere</h1>
        <p>
          Reach out to us for admissions, placements, accounts, or general
          enquiries. We’re happy to assist you.
        </p>
      </section>


      {/* ================= HIGHLIGHTS ================= */}
      <section className="contact-highlight">
        {[
          {
            icon: <FaMapMarkerAlt />,
            title: "Visit Us",
            text: "EduSphere College Campus, Knowledge Avenue, Bengaluru"
          },
          {
            icon: <FaPhoneAlt />,
            title: "Call Us at",
            text: "+91 98765 43210"
          },
          {
            icon: <FaEnvelope />,
            title: "Email Us",
            text: "contact@edusphere.edu"
          },
          {
            icon: <FaClock />,
            title: "Working Hours",
            text: "Mon – Fri : 9:00 AM – 5:00 PM"
          }
        ].map((item, index) => (
          <div
            key={index}
            className="highlight-item scroll-animate animate-up"
            style={{ transitionDelay: `${index * 0.1}s` }}
          >
            <div className="highlight-icon">{item.icon}</div>
            <h4>{item.title}</h4>
            <p>{item.text}</p>
          </div>
        ))}
      </section>


      {/* ================= MODERN CONTACT ================= */}
      <section className="contact-modern">
        <div className="contact-wrapper">

          <div className="contact-images scroll-animate animate-left">
            <div className="img-main">
              <img src="/images/contact1.jpg" alt="Campus" />
            </div>
            <div className="img-small">
              <img src="/images/contact2.jpg" alt="Students" />
            </div>
          </div>

          <div className="contact-glass scroll-animate animate-right">
            <h2>Get in Touch with EduSphere</h2>
            <p>
              For admissions, academic inquiries, or student support, our team is here to assist you.
            </p>

            <form>
              <input type="text" placeholder="Full Name" required />
              <input type="email" placeholder="Email Address" required />
              <input type="text" placeholder="Phone Number" />
              <textarea placeholder="Your Message" rows="4"></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>

        </div>
      </section>


      {/* ================= DEPARTMENTS ================= */}
      <section className="department-section">
        <h2 className="scroll-animate animate-up">Department Contacts</h2>

        <div className="department-grid">
          {[
            {
              icon: <LuUserCheck />,
              title: "Admissions Office",
              email: "admissions@edusphere.edu",
              phone: "+91 98765 43218"
            },
            {
              icon: <LuBriefcase />,
              title: "Placement Cell",
              email: "placement@edusphere.edu",
              phone: "+91 98765 43214"
            },
            {
              icon: <LuWallet />,
              title: "Accounts",
              email: "accounts@edusphere.edu",
              phone: "+91 98765 43216"
            },
            {
              icon: <LuClipboardList />,
              title: "Examination Cell",
              email: "exams@edusphere.edu",
              phone: "+91 98765 43222"
            },
            {
              icon: <LuHeadphones />,
              title: "Student Support",
              email: "support@edusphere.edu",
              phone: "+91 98765 43224"
            }
          ].map((dept, index) => (
            <div
              key={index}
              className="dept-card scroll-animate animate-up"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="dept-icon">{dept.icon}</div>
              <h4>{dept.title}</h4>
              <p><MdEmail /> {dept.email}</p>
              <p><MdPhone /> {dept.phone}</p>
            </div>
          ))}
        </div>
      </section>


      {/* ================= MAP ================= */}
      <section className="map scroll-animate animate-zoom">
        <h2>Get Directions</h2>
        <div className="map-strip">
          <iframe
            title="EduSphere Location"
            src="https://www.google.com/maps?q=Bengaluru&output=embed"
            loading="lazy"
          ></iframe>
        </div>
      </section>


      {/* ================= FOOTER MESSAGE ================= */}
      <section className="contact-footer scroll-animate animate-fade">
        <h2>
          We’re here to guide you — every question, every step,
          every dream.
        </h2>
      </section>

    </div>
  );
};

export default Contact;
