import React, { useState } from "react";
import { Link } from "react-router-dom";
import useScrollAnimation from "../hooks/useScrollAnimation";

const Courses = () => {
  const [category, setCategory] = useState("all");

  useScrollAnimation();

  const coursesData = [
    {
      id: 1,
      title: "B.Tech Computer Science",
      category: "technology",
      duration: "4 Years",
      description:
        "Learn software development, AI, Data Science, and Cybersecurity with hands-on projects.",
    },
    {
      id: 2,
      title: "BCA",
      category: "technology",
      duration: "3 Years",
      description:
        "Focus on programming, database management, and web development fundamentals.",
    },
    {
      id: 3,
      title: "B.Tech Artificial Intelligence & Machine Learning",
      category: "technology",
      duration: "4 Years",
      description:
        "Master AI, ML, deep learning, and intelligent systems development.",
    },
    {
      id: 4,
      title: "B.Tech Data Science",
      category: "technology",
      duration: "4 Years",
      description:
        "Learn big data analytics, visualization, and predictive modeling.",
    },
    {
      id: 5,
      title: "B.Tech Information Technology",
      category: "technology",
      duration: "4 Years",
      description:
        "Study networking, cloud computing, cybersecurity, and system administration.",
    },
    {
      id: 6,
      title: "B.Tech Electronics & Communication Engineering",
      category: "technology",
      duration: "4 Years",
      description:
        "Understand electronics, communication systems, and embedded technology.",
    },
    {
      id: 7,
      title: "B.Tech Mechanical Engineering",
      category: "technology",
      duration: "4 Years",
      description:
        "Learn design, manufacturing, robotics, and thermal engineering.",
    },
    {
      id: 8,
      title: "MBA",
      category: "management",
      duration: "2 Years",
      description:
        "Develop leadership, finance, marketing, and strategic management skills.",
    },
    {
      id: 9,
      title: "BBA",
      category: "management",
      duration: "3 Years",
      description:
        "Build strong foundations in business operations and entrepreneurship.",
    },
    {
      id: 10,
      title: "BA English",
      category: "arts",
      duration: "3 Years",
      description:
        "Explore literature, communication, and critical thinking skills.",
    },
    {
      id: 11,
      title: "B.Sc Physics",
      category: "science",
      duration: "3 Years",
      description:
        "Gain deep understanding of theoretical and applied physics concepts.",
    },
  ];

  const filteredCourses =
    category === "all"
      ? coursesData
      : coursesData.filter((course) => course.category === category);

  return (
    <div className="courses-page">

      {/* ================= HERO ================= */}
      <section className="courses-hero scroll-animate animate-fade">
        <div className="courses-hero-overlay">
          <h1>Discover Your Path to Success</h1>
          <p>Empowering Minds. Shaping Futures</p>
        </div>
      </section>

      {/* ================= HEADER ================= */}
      <header className="courses-header scroll-animate animate-up">
        <h2>Our Programs</h2>
        <p>
          Explore a wide range of undergraduate and postgraduate programs
          designed to shape your future.
        </p>
      </header>

      {/* ================= FILTER ================= */}
      <section className="filter-section scroll-animate animate-up">
        <button
          className={category === "all" ? "active" : ""}
          onClick={() => setCategory("all")}
        >
          All
        </button>

        <button
          className={category === "technology" ? "active" : ""}
          onClick={() => setCategory("technology")}
        >
          Technology
        </button>

        <button
          className={category === "management" ? "active" : ""}
          onClick={() => setCategory("management")}
        >
          Management
        </button>

        <button
          className={category === "arts" ? "active" : ""}
          onClick={() => setCategory("arts")}
        >
          Arts
        </button>

        <button
          className={category === "science" ? "active" : ""}
          onClick={() => setCategory("science")}
        >
          Science
        </button>
      </section>

      {/* ================= COURSES GRID ================= */}
      <section className="courses-grid">
        {filteredCourses.map((course) => (
          <div key={course.id} className="course-card scroll-animate animate-up">
            <h3>{course.title}</h3>
            <p className="duration">{course.duration}</p>
            <p>{course.description}</p>

            <Link to="/register" className="btn-primary">
              Apply Now
            </Link>
          </div>
        ))}
      </section>

      {/* ================= CTA ================= */}
      <section className="courses-cta croll-animate animate-zoom">
        <h2>Not Sure Which Program Fits You?</h2>
        <p>Contact our academic advisors for personalized guidance.</p>

        <Link to="/contact" className="btn-secondary">
          Talk to Advisor
        </Link>
      </section>

    </div>
  );
};

export default Courses;
