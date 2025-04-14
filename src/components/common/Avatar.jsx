import React from 'react';
import PropTypes from 'prop-types';
import '../../css/Avatar.css'; // Import the Avatar CSS file

const Avatar = ({ imageUrl, name, surname, size = 'medium', showName = true }) => {
  return (
    <div className={`avatar-wrapper ${size}`}>
      <img
        className={`rounded-profile ${size}`}
        src={imageUrl}
        alt={`${name} ${surname}`}
      />
      {showName && (
        <span aria-hidden="true">{`${surname}, ${name}`}</span>
      )}
    </div>
  );
};

Avatar.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  showName: PropTypes.bool,
};

export default Avatar;
