import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const {name, job, image, text} = people[index];

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      if (newIndex < 0) {
        newIndex = people.length - 1;
      }
      return newIndex;
    });
  }

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      if (newIndex >= people.length) {
        newIndex = 0;
      }
      return newIndex;
    });
  }

  const randomPerson = () => {
    setIndex(() => {
      let randomIndex = Math.random() * people.length;
      randomIndex = Math.floor(randomIndex);
      if (randomIndex === index) {
        randomIndex = randomIndex - 1;
        if (randomIndex < 0) {
          randomIndex = people.length - 1;
        } else if (randomIndex >= people.length) {
          randomIndex = 0;
        }
      }
      return randomIndex;
    });
  }

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img"/>
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">
        {name}
      </h4>
      <p className="job">
        {job}
      </p>
      <p className="info">
        {text}
      </p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomPerson}>
          Surprise Me
      </button>
    </article>
   );
};

export default Review;
