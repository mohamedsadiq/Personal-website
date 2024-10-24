import React from 'react';

const FormattedDate = () => {
  const getFormattedDate = () => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date().toLocaleDateString('en-US', options);
  };

  return (
    <p className="text-sm text-gray-500">Updated {getFormattedDate()}</p>
  );
};

export default FormattedDate;