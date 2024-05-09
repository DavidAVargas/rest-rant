const React = require('react');
const Def = require('../default'); // Assuming 'default' is the name of your default component

function index(data) {
    let placesFormatted = data.places.map((place, index) => (
        <div key={index}>
            <h2>{place.name}</h2>
            <img src={place.pic} alt={place.name} />
        </div>
    ));

    return (
        <Def>
            <main>
                <h1>PLACES INDEX PAGE</h1>
                {placesFormatted}
            </main>
        </Def>
    );
}

module.exports = index;

  