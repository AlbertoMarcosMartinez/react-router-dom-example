import React from 'react';
import PropTypes from 'prop-types';
import '../../css/Avatar.css'; // Import the Avatar CSS file

const Avatar = ({
  imageUrl,
  name,
  surname,
  size = 'medium',
  showName = true,
  alignment = 'right',
  backgroundColor = 'transparent',
  textColor = '#000',
  // border = 'none',
  onClick,
}) => {
  return (
    <div
      className={`avatar-wrapper ${size}`}
      style={{
        display: 'flex',
        flexDirection: alignment === 'right' ? 'row' : 'column',
        alignItems: 'center',
        backgroundColor,
        padding: '10px',
        borderRadius: '8px',
        // border,
        cursor: onClick ? 'pointer' : 'default',
      }}
      onClick={onClick}
    >
      <img
        className={`rounded-profile ${size}`}
        src={imageUrl}
        alt={`${name} ${surname}`}
        style={{
          marginRight: alignment === 'right' ? '10px' : '0',
          marginBottom: alignment === 'bottom' ? '10px' : '0',
        }}
      />
      {showName && (
        <span
          style={{
            color: textColor,
            fontSize: size === 'small' ? '0.8rem' : size === 'large' ? '1.2rem' : '1rem',
          }}
        >
          {`${surname}, ${name}`}
        </span>
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
  alignment: PropTypes.oneOf(['right', 'bottom']),
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  // border: PropTypes.string,
  onClick: PropTypes.func,
};

export default Avatar;
