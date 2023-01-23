import React from 'react';
import PropTypes from 'prop-types';
import Breeding from './Pokemon_Details/Bio_&_Breeding/Breeding';
import Training from './Pokemon_Details/Training/Training';

const About = ({ about }) => (
  <section
    className={`${about ? 'aboutSection active' : 'aboutSection'}`}
  >
    <Breeding/>
    <br/>
    <Training/>
  </section>
);

export default About;
About.propTypes = {
  about: PropTypes.any,
};
