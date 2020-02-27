import React from 'react';
import { SearchItemWrapper, EmptyWrapper } from './styled';

export const SearchItemList = ({onSelect, resultList }) => {
    if (resultList.length === 0) return <EmptyWrapper> No Match Found </EmptyWrapper>

    const handleItemClick = (item) => (e)=> {
        e.stopPropagation();
        onSelect(item);
    }
    
    console.log(resultList);

    return resultList.map((item) => (<SearchItemWrapper key={item.id} onClick={handleItemClick(item)}>{item.title}</SearchItemWrapper>))
}