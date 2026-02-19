import React, { useEffect, useState } from "react";

const galleryImages = [
  {
    id: 1,
    title: "Main Campus Building",
    image: "/images/G1.jpg",
    quote: "Where ambition begins its journey. A place where dreams are shaped into achievements."
  },
  {
    id: 2,
    title: "Library",
    image: "/images/G2.jpg",
    quote: "A sanctuary of knowledge and discovery. Every page turned opens a new world of ideas."
  },
  {
    id: 3,
    title: "Auditorium",
    image: "/images/G3.jpg",
    quote: "Where ideas take the stage. A space where voices inspire and talents shine."
  },
  {
    id: 4,
    title: "Annual Fest",
    image: "/images/G4.jpg",
    quote: "Celebrating culture, creativity, and unity. Moments that turn college life into lifelong memories."
  },
  {
    id: 5,
    title: "Cafeteria",
    image: "/images/G5.jpg",
    quote: "Conversations that build lifelong bonds. Every table tells a story of friendship and laughter."
  },
  {
    id: 6,
    title: "Convocation Ceremony",
    image: "/images/G6.jpg",
    quote: "Honoring hard work and achievement. A proud milestone that marks new beginnings."
  },
  {
    id: 7,
    title: "Computer Lab",
    image: "/images/G7.jpg",
    quote: "Innovating the future through technology. Where ideas transform into digital realities."
  },
  {
    id: 8,
    title: "Electronics Lab",
    image: "/images/G8.jpg",
    quote: "Engineering ideas into reality. A hub where circuits spark creativity and innovation."
  },
  {
    id: 9,
    title: "Cricket Ground",
    image: "/images/G9.jpg",
    quote: "Where teamwork meets determination. Every match builds character and confidence."
  },
  {
    id: 10,
    title: "Indoor Sports Complex",
    image: "/images/G10.jpg",
    quote: "Strength, spirit, and sportsmanship. A space where discipline shapes champions."
  },
  {
    id: 11,
    title: "Basketball Court",
    image: "/images/G11.jpg",
    quote: "Energy that drives champions. Every game teaches resilience and teamwork."
  },
  {
    id: 12,
    title: "College Lane",
    image: "/images/G12.jpg",
    quote: "A path filled with memories and moments. Each step carries the spirit of student life."
  }
];

const Gallery = () => {
  const [showCollage, setShowCollage] = useState(false);

  useEffect(() => {
    if (showCollage) return; 

    const elements = document.querySelectorAll(
      ".zigzag-row, .gallery-quote-section"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [showCollage]);

  return (
    <div className="gallery-page">

      <section className="gallery-header">
        <h1>Campus Gallery</h1>
        <p>
          A glimpse into the spaces and experiences that define life at
          EduSphere.
        </p>

        <button
          className="collage-btn"
          onClick={() => setShowCollage(!showCollage)}
        >
          {showCollage ? "Details" : "Overview"}
        </button>
      </section>

      {showCollage ? (
        <section className="collage-section full">
          <div className="collage-grid">
            {galleryImages.map((item) => (
              <div key={item.id} className="collage-card">
                <img src={item.image} alt={item.title} />
                <div className="collage-overlay">
                  <h3>{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>
      ) : (
        <>
          
          <section className="zigzag-gallery">
            {galleryImages.map((item, index) => (
              <div
                key={item.id}
                className={`zigzag-row ${
                  index % 2 === 0 ? "normal" : "reverse"
                }`}
              >
                <div className="zigzag-image">
                  <img src={item.image} alt={item.title} />
                </div>

                <div className="zigzag-text">
                  <h2>{item.title}</h2>
                  <p>{item.quote}</p>
                </div>
              </div>
            ))}
          </section>

          <section className="gallery-quote-section">
            <h2>
              Education is not just about buildings — it’s about the experiences
              that shape who we become.
            </h2>
          </section>
        </>
      )}
    </div>
  );
};

export default Gallery;