import React from 'react';
import Dropdown from "../ui-kit/Dropdown";
import  { filterNames } from '../constants/dropdownItems';

const FilterCategories = () => {
    const options = Object.values(filterNames);

    return <Dropdown options={options} />;
};

export default FilterCategories;
