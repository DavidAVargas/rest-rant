const React = require('react');
const Def = require('./default');

function Home() {
  return (
    <Def>
      <main>
        <h1>HOME</h1>
        <div>
        <img src='/images/food-img.jpg' alt="food" />
        <div>
          Photo by <a href='https://unsplash.com/@pwign'>Anh Nguyen</a> on <a href='https://unsplash.com/photos/vegetable-and-meat-on-bowl-kcA-c3f_3FE'>Upsplash</a>
        </div>
        </div>

        <a href="/places">
          <button className="btn-primary">Places Page</button>
        </a>
      </main>
    </Def>
  );
}

module.exports = Home;
