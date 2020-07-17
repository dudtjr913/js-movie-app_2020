import React from "react";
import PropTypes from "prop-types";

const MyFavFood = [
  {
    id: 1,
    rating: 5.0,
    name: "sausage",
    image:
      "https://www.daringgourmet.com/wp-content/uploads/2019/06/Cheddarwurst-7-edited.jpg",
  },
  {
    id: 2,
    rating: 4.9,
    name: "waffle",
    image:
      "https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&w=5184&h=2714&url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F3875444.jpg",
  },
  {
    id: 3,
    rating: 4.8,
    name: "samgyeopsal",
    image:
      "https://i2.wp.com/www.gildedgingerbread.com/wp-content/uploads/2017/08/Samgyeopsal-1.jpg?resize=750%2C600&ssl=1",
  },
];

function Food({ name, image, score }) {
  return (
    <div>
      <h1>I like {name}</h1>
      <h3>{score}/5</h3>
      <img src={image} alt={name}></img>
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};

function App() {
  return (
    <div>
      {MyFavFood.map((food) => (
        <Food
          name={food.name}
          image={food.image}
          key={food.id}
          score={food.rating}
        />
      ))}
    </div>
  );
}

export default App;
