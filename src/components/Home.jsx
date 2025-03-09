import React from 'react';

function Home() {
  return (
    <div className="home">
      <h1>Quirky Clubhouse</h1>
      <section>
        <h2>Welcome!</h2>
        <p>
          First of all: This is <mark><b>Peepo</b></mark>. I <em>love</em> peepo! 
          You'll see a lot of Peepo on this website, and he is also happy to see you here, too.
        </p>
        <img src="/src/assets/images/peepo_bio.webp" alt="Peepo" width="280" height="200" />
        <blockquote>
          <i>"Jacqueline is a French name that means "supplanter". It's the feminine version of the name Jacques, which comes from the Hebrew name Jacob."</i>
          <p>My favorite color is <del>red</del> <ins>purple</ins>.</p>
        </blockquote>
      </section>
    </div>
  );
}

export default Home; 