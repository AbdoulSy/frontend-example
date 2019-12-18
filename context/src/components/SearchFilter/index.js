import React from 'react';

import TextInput from '../TextInput';
import SelectButton from '../SelectButton';


const SearchFilter = ({ filter, onSelect, clearFilter }) => {
    return <div data-test-id='filter-area'>
        <div data-test-id='form-error'></div>
        <form action='#' onSubmit={ e => {
            onSelect(e.target[0].value);
            e.preventDefault();
            return false;
        }}>
            <TextInput placeholder={filter.name}/>
            <SelectButton type='submit' />
        </form>
        {filter.active &&
            <div data-testid='filter-details'>
                <div data-testid='applied-filter'>{filter.name}</div>
                <button onClick={clearFilter}>x</button>
            </div>
        }
    </div>
};

export default SearchFilter;