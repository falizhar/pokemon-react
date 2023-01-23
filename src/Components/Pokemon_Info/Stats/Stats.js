import React from 'react';
import PropTypes from 'prop-types';
import BarStats from './Pokemon_Stats/BarStats';

const Stats = ({ stats, color }) => (
  <section
    className={`${stats ? 'statsSection active' : 'statsSection'}`}
  >
    <BarStats color={color}/>
  </section>
);

export default Stats;

Stats.propTypes = {
  stats: PropTypes.any.isRequired,
  color: PropTypes.string.isRequired,
};
