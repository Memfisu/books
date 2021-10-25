import React from 'react';

const Dropdown = ({
  options
}) => {
    return <select>
        {options.map(item => <option>{item}</option>)}
    </select>;
};

export default Dropdown;
