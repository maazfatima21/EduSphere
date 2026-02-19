import React from "react";
import useScrollAnimation from "../hooks/useScrollAnimation";

const Faculty = () => {

  useScrollAnimation();

  const facultyData = [
    {
      id: 1,
      name: "Dr. Arjun Mehta",
      designation: "Professor",
      department: "Technology",
      qualification: "PhD in Computer Science",
      experience: "12 Years",
      image: "/images/F1.jpg",
    },
    {
      id: 2,
      name: "Dr. Sneha Reddy",
      designation: "Associate Professor",
      department: "Technology",
      qualification: "PhD in Artificial Intelligence",
      experience: "9 Years",
      image: "/images/F2.jpg",
    },
    {
      id: 3,
      name: "Dr. Lisa",
      designation: "Professor",
      department: "Technology",
      qualification: "PhD in Data Science",
      experience: "15 Years",
      image: "/images/F3.jpg",
    },
    {
      id: 4,
      name: "Dr. Priya Sharma",
      designation: "Professor",
      department: "Management",
      qualification: "PhD in Business Administration",
      experience: "14 Years",
      image: "/images/F4.jpg",
    },
    {
      id: 5,
      name: "Dr. Rohan Gupta",
      designation: "Associate Professor",
      department: "Management",
      qualification: "PhD in Finance",
      experience: "11 Years",
      image: "/images/F5.jpg",
    },
    {
      id: 6,
      name: "Prof. Aditya",
      designation: "Assistant Professor",
      department: "Management",
      qualification: "MBA in Marketing",
      experience: "6 Years",
      image: "/images/F6.jpg",
    },
    {
      id: 7,
      name: "Dr. Neha Kapoor",
      designation: "Professor",
      department: "Science",
      qualification: "PhD in Physics",
      experience: "14 Years",
      image: "/images/F7.jpg",
    },
    {
      id: 8,
      name: "Dr. Amit Banerjee",
      designation: "Associate Professor",
      department: "Science",
      qualification: "PhD in Chemistry",
      experience: "10 Years",
      image: "/images/F8.jpg",
    },
    {
      id: 9,
      name: "Dr. Sandeep Rao",
      designation: "Professor",
      department: "Science",
      qualification: "PhD in Biotechnology",
      experience: "16 Years",
      image: "/images/F9.jpg",
    },
    {
      id: 10,
      name: "Prof. Rahul Verma",
      designation: "Associate Professor",
      department: "Arts",
      qualification: "MA in English Literature",
      experience: "9 Years",
      image: "/images/F10.jpg",
    },
    {
      id: 11,
      name: "Dr. Meera Nair",
      designation: "Professor",
      department: "Arts",
      qualification: "PhD in History",
      experience: "12 Years",
      image: "/images/F11.jpg",
    },
    {
      id: 12,
      name: "Prof. Anjali Desai",
      designation: "Assistant Professor",
      department: "Arts",
      qualification: "MA in Political Science",
      experience: "7 Years",
      image: "/images/F12.jpg",
    },
  ];

  return (
    <div className="faculty-page">

      {/* ================= HERO ================= */}
      <section className="faculty-hero scroll-animate animate-fade">
        <div className="faculty-hero-overlay">
          <h1>Our Distinguished Faculty</h1>
          <p>Expert educators shaping tomorrow’s leaders</p>
        </div>
      </section>


      {/* ================= FACULTY GRID ================= */}
      <section className="faculty-grid">
        {facultyData.map((member, index) => (
          <div
            key={member.id}
            className="faculty-card scroll-animate animate-up"
            style={{ transitionDelay: `${index * 0.05}s` }}
          >
            <img loading="lazy" src={member.image} alt={member.name} />
            <span className="faculty-department">
              {member.department}
            </span>
            <h3>{member.name}</h3>
            <p className="designation">{member.designation}</p>
            <p><strong>Qualification:</strong> {member.qualification}</p>
            <p><strong>Experience:</strong> {member.experience}</p>
          </div>
        ))}
      </section>


      {/* ================= STATS ================= */}
      <section className="faculty-stats">
        {[
          { number: "100+", label: "Faculty Members" },
          { number: "30+", label: "PhD Holders" },
          { number: "10+", label: "Departments" },
          { number: "25+", label: "Years of Excellence" },
        ].map((stat, index) => (
          <div
            key={index}
            className="faculty-stat-box scroll-animate animate-up"
            style={{ transitionDelay: `${index * 0.1}s` }}
          >
            <h3>{stat.number}</h3>
            <p>{stat.label}</p>
          </div>
        ))}
      </section>

    </div>
  );
};

export default Faculty;
