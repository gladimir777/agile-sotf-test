import React from 'react';

const Header = ({ name }) => {
  return (
    <div className="title-container">
      <h2 className="title">{name ? 'Wave' : 'Jimmy'}</h2>
    </div>
  );
};

export default Header;
