import React from 'react';
import PropTypes from 'prop-types';

const ErrorMessage = ({ error }) => (
  <div data-testid="error">An error occured: {error.toString()}</div>
);

ErrorMessage.propTypes = {
  error: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.instanceOf(Error)
  ]).isRequired
};

export default ErrorMessage;
