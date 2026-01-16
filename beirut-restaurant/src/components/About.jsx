import "./About.css";

function About() {
  return (
    <main className="about">
      {/* ===== HERO SECTION ===== */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>Beirut Restaurant</h1>
          <p className="tagline">
            Authentic Cuisine • Timeless Hospitality • Unforgettable Taste
          </p>
        </div>
      </section>

      {/* ===== INTRODUCTION ===== */}
      <section className="about-section">
        <div className="about-container">
          <p className="intro">
            Beirut Restaurant, proudly located at BBS Mall in Nairobi, is a
            culinary destination dedicated to delivering authentic Middle
            Eastern, Somali, and international flavors. Every dish we serve is
            crafted with precision, tradition, and a deep respect for quality.
          </p>
        </div>
      </section>

      {/* ===== STORY ===== */}
      <section className="about-section light">
        <div className="about-container">
          <h2>Our Story</h2>
          <p>
            Founded on a passion for authentic cuisine and exceptional service,
            Beirut Restaurant was created to bring people together through food.
            Inspired by the rich culinary heritage of Beirut and the diverse
            tastes of East Africa, we blend tradition with modern dining
            standards.
          </p>
          <p>
            From our carefully curated menu to our warm hospitality, every
            detail is designed to provide a refined yet welcoming dining
            experience for families, professionals, and food enthusiasts.
          </p>
        </div>
      </section>

      {/* ===== CORE VALUES ===== */}
      <section className="about-section">
        <div className="about-container">
          <h2>Our Values</h2>

          <div className="values-grid">
            <div className="value-card">
              <h3>Authenticity</h3>
              <p>
                We honor traditional recipes and cooking techniques to preserve
                the true flavors of our cuisine.
              </p>
            </div>

            <div className="value-card">
              <h3>Quality</h3>
              <p>
                Only fresh, premium ingredients are used to ensure consistency,
                taste, and excellence in every meal.
              </p>
            </div>

            <div className="value-card">
              <h3>Hospitality</h3>
              <p>
                We believe great food deserves great service. Our guests are
                welcomed with warmth, respect, and care.
              </p>
            </div>

            <div className="value-card">
              <h3>Consistency</h3>
              <p>
                Every visit delivers the same high standard — from the first
                bite to the final experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== DINING EXPERIENCE ===== */}
      <section className="about-section light">
        <div className="about-container">
          <h2>The Beirut Experience</h2>
          <p>
            Whether you are enjoying a relaxed breakfast, a business lunch, or
            a family dinner, Beirut Restaurant offers a comfortable and elegant
            atmosphere designed to complement every occasion.
          </p>
          <p>
            Our menu caters to a wide range of tastes, featuring main courses,
            Somali cuisine, Italian dishes, burgers, fresh salads, beverages,
            and handcrafted desserts — all prepared with attention to detail.
          </p>
        </div>
      </section>

      {/* ===== COMMITMENT ===== */}
      <section className="about-section">
        <div className="about-container">
          <h2>Our Commitment</h2>
          <p>
            We are committed to excellence in food, service, and customer
            satisfaction. Beirut Restaurant continuously evolves while staying
            true to the traditions that define our identity.
          </p>
          <p>
            Whether dining in, ordering takeaway, or enjoying delivery, our goal
            remains the same — to deliver an exceptional experience every time.
          </p>
        </div>
      </section>
    </main>
  );
}

export default About;
