import React from 'react';
import PropTypes from 'prop-types';

const Moves = ({ moves }) => (
        <section
            className={`${moves ? 'movesSection active' : 'movesSection'}`}
        >
            <h2>Moves</h2>
        </section>
);

export default Moves;
Moves.propTypes = {
  moves: PropTypes.any,
};
