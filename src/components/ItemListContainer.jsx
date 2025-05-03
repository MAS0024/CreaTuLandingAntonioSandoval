import React from 'react';

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="container text-center mt-5">
      <h2>{greeting}</h2>
      <p className="text-muted">Aparicion de los productos.</p>
    </div>
  );
};

export default ItemListContainer;
