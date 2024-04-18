import React from 'react';
import "./style.css"

function Home() {
  return (
    <section className="home" id="home">
      <div className="content">
        <h3>Unlocking Knowledge, Empowering Minds.</h3>
        <p>Discover a world of learning opportunities at our educational platform, where knowledge meets innovation. Explore diverse courses, engage with expert educators, and embark on a journey of intellectual growth. Join us and redefine your learning experience.</p>
        <a href="#" className="btn">
          <span className="text text-1">learn more</span>
          <span className="text text-2" aria-hidden="true">learn more</span>
        </a>
      </div>
    </section>
  );
}

export default Home;
