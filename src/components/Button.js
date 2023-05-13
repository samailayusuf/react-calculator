import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ value, onClick, className}) => {
    return (
        <button onClick={() => onClick(value)} className={className==='operator'?'operator':''}>
            {value}
        </button>
    );
};

Button.propTypes = {
    value: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default Button;
