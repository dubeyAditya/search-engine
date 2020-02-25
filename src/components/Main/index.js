import React  from 'react';
import { MainWrapper } from './styled';
import { SearchBox } from '../SearchBox';
export const Main = () => {
    return (
        <MainWrapper>
          <SearchBox resultList={[]}></SearchBox>
        </MainWrapper>
    )
}