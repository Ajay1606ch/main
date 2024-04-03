import React, { useState } from 'react';

// Header component
function Header() {
  return (
    <header>
      <h1>Zomato</h1>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

// Restaurant component
function Restaurant({ name, cuisine, rating }) {
  return (
    <div className="restaurant">
      <h2>{name}</h2>
      <p>Cuisine: {cuisine}</p>
      <p>Rating: {rating}</p>
    </div>
  );
}

// Main component
function App() {
  const [restaurants, setRestaurants] = useState([
    { id: 1, name: 'Restaurant A', cuisine: 'Italian', rating: 4.5 },
    { id: 2, name: 'Restaurant B', cuisine: 'Mexican', rating: 4.0 },
    { id: 3, name: 'Restaurant C', cuisine: 'Indian', rating: 4.2 },
  ]);

  return (
    <div className="App">
      <Header />
      <div className="restaurants">
        {restaurants.map(restaurant => (
          <Restaurant
            key={restaurant.id}
            name={restaurant.name}
            cuisine={restaurant.cuisine}
            rating={restaurant.rating}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
