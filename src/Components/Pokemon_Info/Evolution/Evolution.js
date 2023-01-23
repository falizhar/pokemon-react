import React from 'react';
import PropTypes from 'prop-types';

const Evolution = ({ evolution }) => (
        <section
            className={`${
              evolution ? 'evolutionSection active' : 'evolutionSection'
            }`}
        >
            <h1>Evolution Chain</h1>
        </section>
);
export default Evolution;
Evolution.propTypes = {
  evolution: PropTypes.any,
};
