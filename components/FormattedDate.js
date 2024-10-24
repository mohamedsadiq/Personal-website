import React from 'react';

const FormattedDate = () => {
  const getFormattedDate = () => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date().toLocaleDateString('en-US', options);
  };

  return (
    <span className="text-xs text-gray-500">Updated {getFormattedDate()}</span>
  );
};

export default FormattedDate;
