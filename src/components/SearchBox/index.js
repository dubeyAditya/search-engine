import React, { useState, useContext, useEffect } from 'react';
import { SearchItemList } from './SearchItemList';
import { SearchBoxWrapper, SearchItemWrapper, SearchInput } from './styled';
import { Library } from '../../context/libraryContext';

export const SearchBox = ({ onTitleSelect, reset }) => {

    const { summaries, titles } = useContext(Library);

    const [searchText, setSeachText] = useState('');

    const [resultList, setResultList] = useState([]);

    const [isListVisible, setListVisiblity] = useState(false);

    useEffect(()=>{
      if(reset){
          setSeachText('');
      } 
    },[reset]);

    const filterTiltle = (text) => {
        if (!text) {
            setResultList([]);
        }
        else {
            const words = text.split(" ");
            const regstr = words.reduce((acc, item) => (`${acc}${item}|`), '');
            const regex = new RegExp(regstr.slice(0, regstr.length - 1), "ig");
            let filteredTitles = [];
            summaries.forEach(item => {
                let regexResult = item.summary.match(regex);
                if (regexResult !== null && regexResult.length >= 0) {
                    filteredTitles.push({ id: item.id, title: titles[item.id] });
                }
            });
            setResultList(filteredTitles);
        }
    }


    const handleKeyPress = (e) => {
        const value = e.target.value;
        setListVisiblity(false);
        setSeachText(value);
        filterTiltle(value);
    }

    const handleItemSelect = (item) => {
        onTitleSelect(item.id);
        setSeachText(item.title);
        setListVisiblity(true);
    }


    return (
        <SearchBoxWrapper>
            <SearchInput value={searchText}
                placeholder='Type a part of Summary'
                onChange={handleKeyPress}>
            </SearchInput>
            <SearchItemWrapper hidden={searchText.length === 0 || isListVisible}>
                <SearchItemList onSelect={handleItemSelect} resultList={resultList}>
                </SearchItemList>
            </SearchItemWrapper>
        </SearchBoxWrapper>
    )

}