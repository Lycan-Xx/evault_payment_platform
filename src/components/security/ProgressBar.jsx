import React from 'react';
import PropTypes from 'prop-types';

const ProgressBar = ({ currentStep, totalSteps }) => (
  <div className="absolute top-0 left-0 w-full h-1 bg-gray-200 rounded">
    <div
      className="h-full bg-[#2B7A9E] rounded transition-all duration-500"
      style={{ width: `${(currentStep / totalSteps) * 100}%` }}
    />
  </div>
);

ProgressBar.propTypes = {
  currentStep: PropTypes.number.isRequired,
  totalSteps: PropTypes.number.isRequired
};

export default ProgressBar;