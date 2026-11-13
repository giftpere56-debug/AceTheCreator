
import './About.css';

function About() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <p>OUR STORY</p>
        <h1>More Than Fashion.<br />It's An Identity.</h1>
      </section>

      <section className="about-content">
        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1000"
            alt="Fashion clothing collection"
          />
        </div>

        <div className="about-text">
          <p className="about-label">ABOUT ACE THE CREATOR</p>
          <h2>Creativity Without Limits.</h2>
          <p>
            Ace the Creator is a fashion brand built around
            individuality, creativity and self-expression.
            We believe clothing is more than something you wear.
            It is a way to communicate your identity.
          </p>
          <p>
            Our goal is to create distinctive pieces that
            combine thoughtful design, quality and personal style.
          </p>
        </div>
      </section>
    </main>
  );
}

export default About;
