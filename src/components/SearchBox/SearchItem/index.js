import React from 'react';
import { SearchItemWrapper, EmptyWrapper } from './styled';

export const SearchItem = ({ resultList }) => {
    if (resultList.length === 0) return <EmptyWrapper> No Match Found </EmptyWrapper>

    return resultList.map((item) => (<SearchItemWrapper>{item}</SearchItemWrapper>))
}