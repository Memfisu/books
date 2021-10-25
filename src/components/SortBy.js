import React from 'react';
import Dropdown from "../ui-kit/Dropdown";
import  { sortingNames } from '../constants/dropdownItems';

const SortBy = () => {
    const options = Object.values(sortingNames);

    return <Dropdown options={options} />;
};

export default SortBy;
