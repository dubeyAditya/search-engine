import React, { useState } from 'react';
import { SearchItem } from './SearchItem';
import { SearchBoxWrapper, SearchItemWrapper, SearchInput } from './styled';

export const SearchBox = ({ onType, resultList }) => {

    const [searchText, setSeachText] = useState('');

    const handleKeyPress = (e) => {
        const value = e.target.value;
        setSeachText(value);
    }

    return (
        <SearchBoxWrapper>
            <SearchInput onChange={handleKeyPress}></SearchInput>
            <SearchItemWrapper hidden={ searchText.length === 0 }>
                <SearchItem resultList={resultList}></SearchItem>
            </SearchItemWrapper>
        </SearchBoxWrapper>
    )

}