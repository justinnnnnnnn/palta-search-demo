import React from 'react';
import { jackets } from '../data/jackets'; // Make sure the path is correct

const Index = () => {
  return (
    <div>
      {jackets.map((jacket, index) => (
        <div key={index}>
          <h2>{jacket.name}</h2>
          <p>{jacket.description}</p>
          <div>{jacket.image}</div>
        </div>
      ))}
    </div>
  );
};

export default Index;
